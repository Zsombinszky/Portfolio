import {test, expect} from '@playwright/test'

test.describe('Projects component', () => {
    test.skip(({browserName}) => browserName === 'webkit', 'Skipping WebKit');
    test('See Details click should navigate to /banking', async ({page}) => {

        await page.goto('http://localhost:3000');

        const button = page.getByRole('link', {name: 'See Details'});
        await expect(button).toBeVisible();
        await button.scrollIntoViewIfNeeded()

        // Log the button's properties
        console.log(await button.textContent()); // Log the text inside the button
        console.log(await button.getAttribute('href')); // Log the 'href' attribute if it's a link
        console.log(await button.boundingBox()); // Log the element's size and position


        await button.click()

        // await new Promise(resolve => setTimeout(resolve, 3000))

        // Wait for the URL to change to the expected banking URL
        await page.waitForURL('http://localhost:3000/banking');

        // Finally, assert that the page has the expected URL
        await expect(page).toHaveURL('http://localhost:3000/banking');
    });

})