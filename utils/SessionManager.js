const fs = require('fs');
const path = require('path');
const { Logger } = require('./Logger');
const { LoginPage } = require('../pages/LoginPage');
require('dotenv').config;


class SessionManager {

    constructor(browser) {
        this.browser = browser;

        this.authDirectory = path.join(
            process.cwd(),
            'auth'
        );

        this.authFile = path.join(
            this.authDirectory,
            'Application-auth.json'
        );
    }

    sessionExists() {
        return fs.existsSync(this.authFile);
    }

    async createSession() {

        Logger.info('Creating new Application authentication session');

        if (!fs.existsSync(this.authDirectory)) {
            fs.mkdirSync(
                this.authDirectory,
                { recursive: true }
            );
        }

        const context = await this.browser.newContext();
        const page = await context.newPage();

        try {

            const loginPage = new LoginPage(page);

            await loginPage.open();
            await page.waitForTimeout(5000);
            await loginPage.login("Admin",'admin123'
            );
            await page.waitForTimeout(5000);
            Logger.info('Verifying Application login');

            const isLoggedIn =
                await loginPage.isLoggedIn();

            if (!isLoggedIn) {
                throw new Error(
                    'Application login verification failed'
                );
            }

            await context.storageState({
                path: this.authFile
            });

            Logger.pass(
                'Application authentication session saved successfully'
            );

        } catch (error) {

            Logger.fail(
                'Failed to create Application authentication session'
            );

            Logger.error(error.message);

            throw error;

        } finally {

            await context.close();
        }
    }

    async isSessionValid() {

        if (!this.sessionExists()) {

            Logger.info(
                'Application authentication file does not exist'
            );

            return false;
        }

        Logger.info(
            'Existing Application authentication file found'
        );

        const context = await this.browser.newContext({
            storageState: this.authFile
        });

        const page = await context.newPage();

        try {

            await page.goto(
                process.env.BASE_URL,
                {
                    waitUntil: 'domcontentloaded'
                }
            );

            const loginPage = new LoginPage(page);

            const isLoggedIn =
                await loginPage.isLoggedIn();

            if (isLoggedIn) {

                Logger.pass(
                    'Existing Application session is valid'
                );

                return true;
            }

            Logger.warn(
                'Existing Application session has expired'
            );

            return false;

        } catch (error) {

            Logger.warn(
                'Unable to validate existing Application session'
            );

            Logger.error(error.message);

            return false;

        } finally {

            await context.close();
        }
    }

    async ensureAuthenticated() {

        Logger.info(
            'Checking Application authentication session'
        );

        const validSession =
            await this.isSessionValid();

        if (validSession) {

            Logger.pass(
                'Valid Application session found. Reusing existing session'
            );

            return;
        }

        Logger.info(
            'Valid Application session not found. Creating new session'
        );

        await this.createSession();
    }
}

module.exports = { SessionManager };