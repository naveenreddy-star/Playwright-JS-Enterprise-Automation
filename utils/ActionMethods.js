const { Logger } = require('./Logger');

class ActionMethods {

    constructor(page) {

        this.page = page;
    }


    // ============================================================
    // GENERIC ACTION HANDLER
    // ============================================================

    async performAction(
        actionName,
        elementName,
        action
    ) {

        try {

            Logger.info(
                `${actionName} ${elementName}`
            );

            await action();

            Logger.pass(
                `${actionName} ${elementName} completed successfully`
            );

        } catch (error) {

            Logger.fail(
                `Failed to ${actionName.toLowerCase()} ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // CLICK
    // ============================================================

    async clickElement(
        locator,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Clicking',
            elementName,
            () => locator.click(options)
        );
    }


    // ============================================================
    // DOUBLE CLICK
    // ============================================================

    async doubleClickElement(
        locator,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Double clicking',
            elementName,
            () => locator.dblclick(options)
        );
    }


    // ============================================================
    // RIGHT CLICK
    // ============================================================

    async rightClickElement(
        locator,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Right clicking',
            elementName,
            () =>
                locator.click({
                    ...options,
                    button: 'right'
                })
        );
    }


    // ============================================================
    // FILL TEXT
    // ============================================================

    async fillText(
        locator,
        value,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Entering text into',
            elementName,
            () =>
                locator.fill(
                    value,
                    options
                )
        );
    }


    // ============================================================
    // TYPE TEXT
    // ============================================================

    async typeText(
        locator,
        value,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Typing text into',
            elementName,
            () =>
                locator.pressSequentially(
                    value,
                    options
                )
        );
    }


    // ============================================================
    // CLEAR TEXT
    // ============================================================

    async clearText(
        locator,
        elementName
    ) {

        await this.performAction(
            'Clearing text from',
            elementName,
            () => locator.clear()
        );
    }


    // ============================================================
    // GET TEXT
    // ============================================================

    async getText(
        locator,
        elementName,
        options = {}
    ) {

        try {

            Logger.info(
                `Getting text from ${elementName}`
            );

            const text =
                await locator.innerText(
                    options
                );

            Logger.pass(
                `Text retrieved from ${elementName}: "${text}"`
            );

            return text;

        } catch (error) {

            Logger.fail(
                `Failed to get text from ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // GET TEXT CONTENT
    // ============================================================

    async getTextContent(
        locator,
        elementName,
        options = {}
    ) {

        try {

            Logger.info(
                `Getting text content from ${elementName}`
            );

            const text =
                await locator.textContent(
                    options
                );

            Logger.pass(
                `Text retrieved from ${elementName}: "${text}"`
            );

            return text;

        } catch (error) {

            Logger.fail(
                `Failed to get text content from ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // GET INPUT VALUE
    // ============================================================

    async getInputValue(
        locator,
        elementName
    ) {

        try {

            Logger.info(
                `Getting input value from ${elementName}`
            );

            const value =
                await locator.inputValue();

            Logger.pass(
                `Input value retrieved from ${elementName}`
            );

            return value;

        } catch (error) {

            Logger.fail(
                `Failed to get input value from ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // GET ATTRIBUTE
    // ============================================================

    async getAttribute(
        locator,
        attributeName,
        elementName
    ) {

        try {

            Logger.info(
                `Getting ${attributeName} from ${elementName}`
            );

            const value =
                await locator.getAttribute(
                    attributeName
                );

            Logger.pass(
                `${attributeName} retrieved from ${elementName}: "${value}"`
            );

            return value;

        } catch (error) {

            Logger.fail(
                `Failed to get ${attributeName} from ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // DROPDOWN - VALUE
    // ============================================================

    async selectByValue(
        locator,
        value,
        elementName
    ) {

        await this.performAction(
            `Selecting value "${value}" from`,
            elementName,
            () =>
                locator.selectOption(
                    value
                )
        );
    }


    // ============================================================
    // DROPDOWN - LABEL
    // ============================================================

    async selectByLabel(
        locator,
        label,
        elementName
    ) {

        await this.performAction(
            `Selecting "${label}" from`,
            elementName,
            () =>
                locator.selectOption({
                    label
                })
        );
    }


    // ============================================================
    // DROPDOWN - INDEX
    // ============================================================

    async selectByIndex(
        locator,
        index,
        elementName
    ) {

        await this.performAction(
            `Selecting option ${index} from`,
            elementName,
            () =>
                locator.selectOption({
                    index
                })
        );
    }


    // ============================================================
    // CHECK
    // ============================================================

    async checkElement(
        locator,
        elementName
    ) {

        await this.performAction(
            'Checking',
            elementName,
            () => locator.check()
        );
    }


    // ============================================================
    // UNCHECK
    // ============================================================

    async uncheckElement(
        locator,
        elementName
    ) {

        await this.performAction(
            'Unchecking',
            elementName,
            () => locator.uncheck()
        );
    }


    // ============================================================
    // IS CHECKED
    // ============================================================

    async isChecked(
        locator,
        elementName
    ) {

        try {

            const result =
                await locator.isChecked();

            Logger.info(
                `${elementName} checked status: ${result}`
            );

            return result;

        } catch (error) {

            Logger.fail(
                `Failed to check status of ${elementName}`
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // HOVER
    // ============================================================

    async hoverElement(
        locator,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Hovering over',
            elementName,
            () =>
                locator.hover(options)
        );
    }


    // ============================================================
    // FOCUS
    // ============================================================

    async focusElement(
        locator,
        elementName
    ) {

        await this.performAction(
            'Focusing on',
            elementName,
            () => locator.focus()
        );
    }


    // ============================================================
    // PRESS KEY
    // ============================================================

    async pressKey(
        locator,
        key,
        elementName
    ) {

        await this.performAction(
            `Pressing "${key}" on`,
            elementName,
            () =>
                locator.press(key)
        );
    }


    // ============================================================
    // SCROLL
    // ============================================================

    async scrollToElement(
        locator,
        elementName
    ) {

        await this.performAction(
            'Scrolling to',
            elementName,
            () =>
                locator.scrollIntoViewIfNeeded()
        );
    }


    // ============================================================
    // UPLOAD FILE
    // ============================================================

    async uploadFile(
        locator,
        filePath,
        elementName
    ) {

        await this.performAction(
            'Uploading file to',
            elementName,
            () =>
                locator.setInputFiles(
                    filePath
                )
        );
    }


    // ============================================================
    // DRAG AND DROP
    // ============================================================

    async dragAndDrop(
        sourceLocator,
        targetLocator,
        sourceName,
        targetName
    ) {

        await this.performAction(
            `Dragging ${sourceName} to`,
            targetName,
            () =>
                sourceLocator.dragTo(
                    targetLocator
                )
        );
    }


    // ============================================================
    // WAIT FOR ELEMENT
    // ============================================================

    async waitForElement(
        locator,
        elementName,
        options = {}
    ) {

        await this.performAction(
            'Waiting for',
            elementName,
            () =>
                locator.waitFor(options)
        );
    }


    // ============================================================
    // NAVIGATE
    // ============================================================

    async navigateTo(url) {

        await this.performAction(
            'Navigating to',
            url,
            () =>
                this.page.goto(url)
        );
    }


    // ============================================================
    // REFRESH
    // ============================================================

    async refreshPage() {

        await this.performAction(
            'Refreshing',
            'current page',
            () =>
                this.page.reload()
        );
    }


    // ============================================================
    // BACK
    // ============================================================

    async goBack() {

        await this.performAction(
            'Navigating',
            'back',
            () =>
                this.page.goBack()
        );
    }


    // ============================================================
    // FORWARD
    // ============================================================

    async goForward() {

        await this.performAction(
            'Navigating',
            'forward',
            () =>
                this.page.goForward()
        );
    }


    // ============================================================
    // SCREENSHOT
    // ============================================================

    async takeScreenshot(
        filePath
    ) {

        await this.performAction(
            'Taking screenshot',
            filePath,
            () =>
                this.page.screenshot({
                    path: filePath
                })
        );
    }


    // ============================================================
    // PAGE TITLE
    // ============================================================

    async getPageTitle() {

        try {

            const title =
                await this.page.title();

            Logger.info(
                `Page title: ${title}`
            );

            return title;

        } catch (error) {

            Logger.fail(
                'Failed to get page title'
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }


    // ============================================================
    // CURRENT URL
    // ============================================================

    async getCurrentUrl() {

        try {

            const url =
                this.page.url();

            Logger.info(
                `Current URL: ${url}`
            );

            return url;

        } catch (error) {

            Logger.fail(
                'Failed to get current URL'
            );

            Logger.error(
                error.message
            );

            throw error;
        }
    }
}


module.exports = {
    ActionMethods
};