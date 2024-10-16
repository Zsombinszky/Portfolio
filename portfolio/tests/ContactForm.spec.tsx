import {test, expect} from '@playwright/test'

test.describe('ContactForm component', () => {
    test.skip(({browserName}) => browserName === 'webkit', 'Skipping WebKit');
    test('Send message successfully', async ({page}) => {

        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto('http://localhost:3000/#contact')

        const nameInput = page.getByRole('textbox', {name: /name/i});
        await nameInput.fill('Soma')

        const emailInput = page.getByRole('textbox', {name: /email/i});
        await emailInput.fill('some@gmail.com')

        const messageInput = page.getByRole('textbox', {name: /message/i});
        await messageInput.fill('Love you Baby')

        // Find an element with the text 'About' and click on it
        await page.click('text=Send Message')

        const toastifyMessage = page.getByText('Message sent successfully!')
        await expect(toastifyMessage).toBeVisible()
    })
})

test.describe('ContactForm fails', () => {
    test('Send message fail', async ({page}) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto('http://localhost:3000/#contact')

        const nameInput = page.getByRole('textbox', {name: /name/i});
        await nameInput.fill('')

        const emailInput = page.getByRole('textbox', {name: /email/i});
        await emailInput.fill('')

        const messageInput = page.getByRole('textbox', {name: /message/i});
        await messageInput.fill('')

        // Find an element with the text 'About' and click on it
        await page.click('text=Send Message')

        const nameError = page.getByText('Name is required')
        await expect(nameError).toBeVisible()

        const emailError = page.getByText('Invalid email address')
        await expect(emailError).toBeVisible()

        const messageError = page.getByText('Message is required')
        await expect(messageError).toBeVisible()
    })
})
