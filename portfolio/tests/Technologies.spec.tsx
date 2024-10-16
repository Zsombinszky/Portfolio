import {test, expect} from "@playwright/test";

test.describe('Technologies component', () => {

    test('clicking on FRONTEND div should expand its content', async ({page}) => {

        await page.goto('http://localhost:3000/#technologies')

        const frontendDiv = page.getByTestId('frontend-div')
        await expect(frontendDiv).toBeVisible()

        const techLink = page.getByRole('link', {name: 'https://www.javascript.com/'})
        await expect(techLink).not.toBeVisible()

        await frontendDiv.click()

        await expect(techLink).toBeVisible()
    })

    test('clicking on BACKEND div should expand its content', async ({page}) => {

        await page.goto('http://localhost:3000/#technologies')

        const backendDiv = page.getByTestId('backend-div')
        await expect(backendDiv).toBeVisible()

        const techLink = page.getByRole('link', {name: 'https://www.java.com/'})
        await expect(techLink).not.toBeVisible()

        await backendDiv.click()

        await expect(techLink).toBeVisible()
    })

    // test('hovering a tech logo shows the tech name in the middle', async ({ page }) => {
    //
    //     await page.goto('http://localhost:3000/#technologies')
    //
    //     const techLogo = page.getByAltText('Javascript')
    //     await expect(techLogo).toBeVisible()
    //
    //     const techName = page.getByTestId('techname')
    //     await expect(techName).toBeHidden()
    //
    //     await techLogo.hover()
    // })

})