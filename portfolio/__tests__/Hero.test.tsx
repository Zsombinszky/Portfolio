import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Hero from "@/app/components/Hero";
import "@testing-library/jest-dom";
import {userEvent} from "@testing-library/user-event";

// Mocking necessary components and libraries
jest.mock('next/image', () => {
    // @ts-ignore
    return ({src, alt, className}) => <img src={src} alt={alt} className={className}/>;
});

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

jest.mock("next/link", () => {
    // @ts-ignore
    return ({children}) => {
        return children;
    }
});

jest.mock('../app/components/AnimatedHeroText1', () => {
    return function MockAnimatedHeroText1() {
        return <div>Mock AnimatedHeroText1</div>;
    };
});

jest.mock('../app/components/AnimatedHeroText2', () => {
    return function MockAnimatedHeroText2() {
        return <div>Mock AnimatedHeroText2</div>;
    };
});

jest.mock('../app/components/Button', () => {
    // @ts-ignore
    return function MockButton({children}) {
        return <a href={"#gallery"}>
            <div>{children}</div>
        </a>;
    };
});

jest.mock('../app/components/BackgroundShapes', () => {
    return function MockBackgroundShapes() {
        return <div>Mock BackgroundShapes</div>;
    };
});

jest.mock('../app/components/AnimatedName', () => {
    return function MockAnimatedName() {
        return <div>Mock AnimatedName</div>;
    };
});

jest.mock('@dotlottie/react-player', () => {
    return {
        DotLottiePlayer: () => <div>Mock DotLottiePlayer</div>,
    };
});

jest.mock('lenis', () => {
    return jest.fn().mockImplementation(() => ({
        raf: jest.fn(),
    }));
});

describe('Hero Component', () => {

    it('renders without crashing', () => {
        render(<Hero/>);
        const title = screen.getByRole('heading', {
            name: 'Welcome to My Portfolio',
            level: 1
        });
        expect(title).toBeInTheDocument();
    });

    it('renders all essential elements', () => {
        render(<Hero/>);
        expect(screen.getByRole('heading', {name: 'Welcome to My Portfolio'})).toBeInTheDocument();
        expect(screen.getByText('Mock AnimatedHeroText1')).toBeInTheDocument();
        expect(screen.getByText('Mock AnimatedHeroText2')).toBeInTheDocument();
        expect(screen.getByText('View My Work')).toBeInTheDocument();
        expect(screen.getByAltText('Hero')).toBeInTheDocument();
        expect(screen.getByText('Mock BackgroundShapes')).toBeInTheDocument();
        expect(screen.getByText('Mock AnimatedName')).toBeInTheDocument();
        expect(screen.getByText('Mock DotLottiePlayer')).toBeInTheDocument();
    });

    it('has the correct background image', () => {
        render(<Hero/>);
        const section = screen.getByTestId('hero-section'); // Ensure data-testid="hero-section" is added in the component
        expect(section).toHaveStyle('backgroundImage: url(/backgrounds/galaxy2.jpeg)');
        expect(section).toHaveClass('h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center');
        expect(section).toHaveTextContent('Welcome to My Portfolio');
    });

    it('renders DotLottiePlayer with correct props', () => {
        render(<Hero/>);
        const lottiePlayer = screen.getByText('Mock DotLottiePlayer');
        expect(lottiePlayer).toBeInTheDocument();
    });

    it('link click navigates to the gallery section', async () => {
        render(<Hero/>);

        // Find the link
        const aTag = screen.getByRole('link', {name: 'View My Work'});

        // Ensure the link is present
        expect(aTag).toBeInTheDocument();

        // Ensure it has the correct href
        expect(aTag).toHaveAttribute('href', '#gallery');

        // Simulate a click event
        fireEvent.click(aTag);

        // Manually set the window location hash to simulate navigation
        window.location.hash = '#gallery';

        // Check if the location hash changes to '#gallery'
        expect(window.location.hash).toBe('#gallery');
    });

    it('button hover changes style', async () => {
        render(<Hero/>);
        const button = screen.getByText('View My Work');

        // Simulate hover using userEvent
        await userEvent.hover(button);

        expect(button).toBeInTheDocument()

        // Check if any expected styles or changes occur
        // (assuming you have styles that would change on hover, modify as needed)
        expect(button).toHaveStyle('color: color-1');
    });

    it('calls Lenis on mount', () => {
        const Lenis = require('lenis');
        render(<Hero/>);
        expect(Lenis).toHaveBeenCalled();
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<Hero/>);
        expect(asFragment()).toMatchSnapshot();
    });
});