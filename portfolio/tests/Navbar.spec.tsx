import {expect, test} from "@playwright/test";

test.describe('Navbar component', () => {

    test('clicking Home should scroll navigate user back to top of homepage', async ({page}) => {
        await page.goto('http://localhost:3000/banking')

        const button = page.getByRole('link', {name: 'HOME'})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000')

        await expect(page).toHaveURL('http://localhost:3000')
    })

    test('clicking TECHNOLOGIES should scroll user to top #technologies', async ({page}) => {
        await page.goto('http://localhost:3000')

        const button = page.getByRole('link', {name: 'TECHNOLOGIES'})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000/#technologies')

        await expect(page).toHaveURL('http://localhost:3000/#technologies')
    })

    test('clicking ABOUT ME should scroll user to top #aboutme', async ({page}) => {
        await page.goto('http://localhost:3000')

        const button = page.getByRole('link', {name: 'ABOUT ME'})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000/#aboutme')

        await expect(page).toHaveURL('http://localhost:3000/#aboutme')
    })

    test('clicking PROJECTS should scroll user to top #gallery', async ({page}) => {
        await page.goto('http://localhost:3000')

        const button = page.getByRole('link', {name: 'PROJECTS'})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000/#gallery')

        await expect(page).toHaveURL('http://localhost:3000/#gallery')
    })

    test('clicking CONTACT should scroll user to top #contact', async ({page}) => {
        await page.goto('http://localhost:3000')

        const button = page.getByRole('link', {name: 'CONTACT', exact: true})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000/#contact')

        await expect(page).toHaveURL('http://localhost:3000/#contact')
    })

})