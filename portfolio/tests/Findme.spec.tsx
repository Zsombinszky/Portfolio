import {test, expect} from '@playwright/test';

test.describe('Findme component', () => {
    test.skip(({browserName}) => browserName === 'webkit', 'Skipping WebKit');
    test('clicking LinkedIn icon opens new page', async ({page}) => {
        await page.goto('http://localhost:3000/#contact');
        console.log('Page loaded');

        const linkedinIcon = page.getByTestId('linkedin-logo');
        await expect(linkedinIcon).toBeVisible();
        console.log('LinkedIn icon is visible');

        // Await the boundingBox call to get the correct coordinates
        const iconBox = await linkedinIcon.boundingBox();
        console.log(iconBox);

        // Check if iconBox is not null to avoid errors
        if (iconBox) {
            await page.mouse.move(iconBox.x + iconBox.width / 2, iconBox.y + iconBox.height / 2); // Move mouse to the center of the icon
            console.log('Mouse moved to LinkedIn icon');

            // Change the CSS class of the LinkedIn icon to 'z-20'
            await page.evaluate((selector) => {
                const icon = document.querySelector(selector);
                if (icon) {
                    icon.classList.add('z-20'); // Add 'z-20' class to the icon
                }
            }, '[data-testid="linkedin-logo"]'); // Use your actual selector for the LinkedIn icon
        } else {
            console.error('Icon box is null, cannot move mouse');
            return; // Exit if iconBox is null
        }

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            linkedinIcon.click(),
        ]);
        console.log('Logo clicked');
        

        // Validate the URL of the new tab
        await expect(newTab).toHaveURL(/linkedin/i);
        console.log('URL is correct');
    });

    test('clicking GitHub icon opens new page', async ({page}) => {
        await page.goto('http://localhost:3000/#contact');
        console.log('Page loaded');

        const githubIcon = page.getByTestId('github-logo');
        await expect(githubIcon).toBeVisible();
        console.log('GitHub icon is visible');

        // Await the boundingBox call to get the correct coordinates
        const iconBox = await githubIcon.boundingBox();
        console.log(iconBox);

        // Check if iconBox is not null to avoid errors
        if (iconBox) {
            await page.mouse.move(iconBox.x + iconBox.width / 2, iconBox.y + iconBox.height / 2); // Move mouse to the center of the icon
            console.log('Mouse moved to GitHub icon');

            // Change the CSS class of the LinkedIn icon to 'z-20'
            await page.evaluate((selector) => {
                const icon = document.querySelector(selector);
                if (icon) {
                    icon.classList.add('z-20'); // Add 'z-20' class to the icon
                }
            }, '[data-testid="github-logo"]'); // Use your actual selector for the LinkedIn icon
        } else {
            console.error('Icon box is null, cannot move mouse');
            return; // Exit if iconBox is null
        }

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            githubIcon.click(),
        ]);
        console.log('Logo clicked');

        // Wait for the new tab to load
        await newTab.waitForLoadState();
        console.log('New tab loaded', newTab);

        // Validate the URL of the new tab
        await expect(newTab).toHaveURL(/github/i);
        console.log('URL is correct');
    });
});
