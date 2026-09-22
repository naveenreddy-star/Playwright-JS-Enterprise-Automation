const { test } = require('@playwright/test');
const { SessionManager } = require('../utils/SessionManager');

test('Ensure Application authentication', async ({ browser }) => {

    const sessionManager =
        new SessionManager(browser);

    await sessionManager.ensureAuthenticated();
});