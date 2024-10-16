import {test, expect} from '@playwright/test';

test.describe('AboutMe Component', () => {
    // test.skip(({browserName}) => browserName === 'webkit', 'Skipping WebKit');
    test('Contact Me button should navigate to contact section', async ({page}) => {
        await page.goto('http://localhost:3000/#aboutme', {waitUntil: 'networkidle'})

        await page.evaluate((selector) => {
            const computerPic = document.querySelector(selector);
            if (computerPic) {
                computerPic.classList.add('hidden');
            }
        }, 'img[alt="cartoonaboutme"]');

        await new Promise(resolve => setTimeout(resolve, 1000)) // due to the internet connection or cpu performance i have to add timeOut because the buttons eventlistener and css not working asap.

        const button = page.getByRole('link', {name: 'Contact Me'})
        await expect(button).toBeVisible()

        await button.click()

        await page.waitForURL('http://localhost:3000/#contact')

        await expect(page).toHaveURL('http://localhost:3000/#contact')
    })

    // test('Codecool logo opens a new tab on click', async ({page}) => {
    //
    //     await page.goto('http://localhost:3000/#aboutme')
    //     console.log('Page loaded');
    //
    //     const button = page.getByTestId('codecool-logo')
    //     await expect(button).toBeVisible()
    //     console.log('icon is visible');
    //
    //     // Await the boundingBox call to get the correct coordinates
    //     const iconBox = await button.boundingBox();
    //     console.log(iconBox);
    //
    //     if (iconBox) {
    //         await page.mouse.move(iconBox.x + iconBox.width / 2, iconBox.y + iconBox.height / 2); // Move mouse to the center of the icon
    //         console.log('Mouse moved to Codecool logo');
    //     } else {
    //         console.error('icon is null, cannot move mouse')
    //         return;
    //     }
    //
    //     // Hide images and messages by adding 'hidden' class
    //     const elementsToHide = [
    //         'img[alt="cartoonaboutme"]',
    //         '[data-testid="message1"]',
    //         '[data-testid="message2"]',
    //         '[data-testid="message3"]'
    //     ];
    //     for (const selector of elementsToHide) {
    //         await page.evaluate((sel) => {
    //             const el = document.querySelector(sel);
    //             if (el) {
    //                 el.classList.add('hidden');
    //             }
    //         }, selector);
    //     }
    //
    //     const [newTab] = await Promise.all([
    //         page.waitForEvent('popup'),
    //         button.click()
    //     ])
    //     console.log('Logo clicked');
    //
    //     // Check the new tab's URL
    //     await expect(newTab).toHaveURL(/\/codecool\/i/);  // Using a regex to match the expected URL
    //     console.log('URL is correct');
    // })
})
