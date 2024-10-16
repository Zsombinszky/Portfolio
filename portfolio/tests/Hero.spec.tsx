import {test, expect} from '@playwright/test'

test.describe('View My Work button navigate the user', () => {
    test('should navigate to the Projects page', async ({page}) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto('http://localhost:3000/')
        // Find an element with the text 'About' and click on it
        await page.click('text=View My Work',{force : true})
        // The new URL should be "/about" (baseURL is used there)
        await expect(page).toHaveURL('http://localhost:3000/#gallery')

        await expect(page.getByRole('heading', {name: 'Projects', level: 1})).toBeVisible();
    })
})
