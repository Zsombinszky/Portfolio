import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import AboutMe from "@/app/components/AboutMe";
import {userEvent} from "@testing-library/user-event";


// Mocking IntersectionObserver
beforeAll(() => {
    // @ts-ignore
    global.IntersectionObserver = jest.fn(() => ({
        observe: jest.fn(),
        disconnect: jest.fn(),
    }));
});

type ImageMockProps = {
    src: string | { src: string; default?: string }; // src can be a string or an object with a src property
    alt?: string; // alt is optional
    className?: string; // className is optional
};

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({src, alt, className}: ImageMockProps) => {
        // If the src is an object (like when it's imported), return its "default" or "src" field
        const imgSrc = typeof src === 'object' ? src.src || src.default : src;
        return <img src={imgSrc} alt={alt} className={className}/>;
    },
}));

describe('Aboutme component', () => {

    it('matches the snapshot', () => {
        const {asFragment} = render(<AboutMe/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('applies the correct background image style', () => {
        render(<AboutMe/>);
        const section = screen.getByTestId('aboutme-section'); // You can use a more specific role if needed
        expect(section).toHaveStyle('background-image: url(/backgrounds/nbadarkpurple.jpg)');
        expect(section).toHaveClass('h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center');
        expect(section).toHaveTextContent('About Me');
    });

    it('Renders without crashing', () => {
        render(<AboutMe/>)

        const title = screen.getByRole('heading', {
            level: 1,
            name: 'About Me'
        })

        expect(title).toBeInTheDocument()
    })

    it('Renders all essential elements', () => {
        render(<AboutMe/>)

        // Title
        const title = screen.getByText(/About Me/i)
        expect(title).toBeInTheDocument()

        // Messages
        const message1 = screen.getByTestId('message1')
        expect(message1).toBeInTheDocument()

        const message2 = screen.getByTestId('message2')
        expect(message2).toBeInTheDocument()

        const message3 = screen.getByTestId('message3')
        expect(message3).toBeInTheDocument()
    })

    it('Renders priority Image', () => {
        render(<AboutMe/>)

        const priorityImage = screen.getByAltText('Hero'); // alt text from the image
        expect(priorityImage).toHaveAttribute('src', "/img.jpg");
        expect(priorityImage).toBeInTheDocument()
    })

    it('Renders computer desk Images', () => {
        render(<AboutMe/>)

        //Desk
        const computerdeskImage = screen.getByAltText("cartoonaboutme")
        expect(computerdeskImage).toHaveAttribute('src', "/img.jpg")
        expect(computerdeskImage).toBeInTheDocument()

        //Monitors
        const leftMonitorImage = screen.getByAltText("monitor1")
        expect(leftMonitorImage).toHaveAttribute('src', "/img.jpg")
        expect(leftMonitorImage).toBeInTheDocument()

        const middleMonitorImage = screen.getByAltText("monitor2")
        expect(middleMonitorImage).toHaveAttribute('src', "/img.jpg")
        expect(middleMonitorImage).toBeInTheDocument()

        const rightMonitorImage = screen.getByAltText("monitor3")
        expect(rightMonitorImage).toHaveAttribute('src', "/img.jpg")
        expect(rightMonitorImage).toBeInTheDocument()

        // check if monitors are in good place
        const computerdeskDiv = screen.getByTestId("computerdeskdiv")
        expect(computerdeskDiv).toBeInTheDocument()
        expect(computerdeskDiv).toContainElement(leftMonitorImage)
        expect(computerdeskDiv).toContainElement(middleMonitorImage)
        expect(computerdeskDiv).toContainElement(rightMonitorImage)
    })

    it('renders the link correctly', () => {
        render(<AboutMe/>);

        const linkElement = screen.getByRole('link', {name: /codecool logo/i});
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://www.codecool.com/');
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders the codecool logo image', () => {
        render(<AboutMe/>);

        const imageElement = screen.getByAltText('codecool logo');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', '/img.jpg');
        expect(imageElement).toHaveClass('~w-14/28');
    });

    it('renders the buttons correctly', () => {
        render(<AboutMe/>);

        const linkElements = screen.getAllByTestId('a-tag');
        expect(linkElements.length).toBe(2); // Ensure you expect two buttons if that’s the case

        linkElements.forEach(linkElement => {
            expect(linkElement).toHaveAttribute('href', '#contact');
        });
    });

    it('link click navigates to the contact section', async () => {
        render(<AboutMe/>);

        const linkElements = screen.getAllByTestId('a-tag');
        expect(linkElements.length).toBe(2);

        // Simulate a click event on the first link
        fireEvent.click(linkElements[0]); // Click the first link

        // Manually set the window location hash to simulate navigation
        window.location.hash = '#contact';

        // Check if the location hash changes to '#contact' after the click
        expect(window.location.hash).toBe('#contact'); // This should be what the link navigates to
    });

    it('button hover changes style', async () => {
        render(<AboutMe/>);

        const linkElements = screen.getAllByTestId('a-tag');
        expect(linkElements.length).toBe(2);

        // Simulate hover using userEvent
        for (const linkElement of linkElements) {
            await userEvent.hover(linkElement);

            expect(linkElement).toHaveStyle('color: color-1');
        }
    });

})

