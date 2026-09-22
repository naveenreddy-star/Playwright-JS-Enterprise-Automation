const fs = require('fs');
const path = require('path');

class Logger {

    static logDirectory = path.join(
        process.cwd(),
        'logs'
    );

    static logFile = path.join(
        Logger.logDirectory,
        'automation.log'
    );


    // ============================================================
    // INITIALIZE LOGGER
    // ============================================================

    static initialize() {

        if (!fs.existsSync(Logger.logDirectory)) {

            fs.mkdirSync(
                Logger.logDirectory,
                {
                    recursive: true
                }
            );
        }
    }


    // ============================================================
    // GET TIMESTAMP
    // ============================================================

    static getTimestamp() {

        const now = new Date();

        const date =
            now.toISOString()
                .replace('T', ' ')
                .replace('Z', '');

        return date;
    }


    // ============================================================
    // WRITE LOG
    // ============================================================

    static writeLog(level, message) {

        Logger.initialize();

        const timestamp =
            Logger.getTimestamp();

        const logMessage =
            `${timestamp} | ${level} | ${message}`;

        // Print to terminal
        if (level === 'ERROR' || level === 'FAIL') {

            console.error(logMessage);

        } else if (level === 'WARN') {

            console.warn(logMessage);

        } else {

            console.log(logMessage);
        }


        // Write to log file
        fs.appendFileSync(
            Logger.logFile,
            logMessage + '\n'
        );
    }


    // ============================================================
    // INFO
    // ============================================================

    static info(message) {

        Logger.writeLog(
            'INFO',
            message
        );
    }


    // ============================================================
    // PASS
    // ============================================================

    static pass(message) {

        Logger.writeLog(
            'PASS',
            message
        );
    }


    // ============================================================
    // WARN
    // ============================================================

    static warn(message) {

        Logger.writeLog(
            'WARN',
            message
        );
    }


    // ============================================================
    // FAIL
    // ============================================================

    static fail(message) {

        Logger.writeLog(
            'FAIL',
            message
        );
    }


    // ============================================================
    // ERROR
    // ============================================================

    static error(message) {

        Logger.writeLog(
            'ERROR',
            message
        );
    }


    // ============================================================
    // DEBUG
    // ============================================================

    static debug(message) {

        Logger.writeLog(
            'DEBUG',
            message
        );
    }
}


module.exports = {
    Logger
};