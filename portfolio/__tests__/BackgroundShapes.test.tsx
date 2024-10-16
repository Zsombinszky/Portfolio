import React, {createRef} from 'react';
import {render, screen} from '@testing-library/react';
import BackgroundShapes from '@/app/components/BackgroundShapes'; // Adjust the import based on your file structure
import "@testing-library/jest-dom";

//Types
type MouseParallaxProp = {
    parallaxContainerRef?: React.RefObject<HTMLDivElement>;
    children: React.ReactNode; // Use ReactNode for children
}

type DotLottiePlayerProps = {
    autoplay?: boolean;
    loop?: boolean;
    src: string;
    className?: string;
};

// Mocking the external components

jest.mock('react-just-parallax', () => {
    return {
        MouseParallax: ({children}: MouseParallaxProp) => <div>{children}</div>,
    };
});

jest.mock('@dotlottie/react-player', () => {
    return {
        DotLottiePlayer: ({autoplay, loop, src, className}: DotLottiePlayerProps) => (
            <div data-testid="dot-lottie-player" className={className}/>
        ),
    };
});

//Testing
describe('BackgroundShapes Component', () => {

    it('matches the snapshot', () => {
        const parallaxRef = createRef<HTMLDivElement>(); // Create a mock ref
        const {asFragment} = render(<BackgroundShapes parallaxRef={parallaxRef}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const parallaxRef = createRef<HTMLDivElement>();
        render(<BackgroundShapes parallaxRef={parallaxRef}/>);

        // Check for the container
        const container = screen.getByTestId('shapecontainer');
        expect(container).toBeInTheDocument()
    });

    it('renders the DotLottiePlayers correctly', () => {
        const parallaxRef = createRef<HTMLDivElement>();
        render(<BackgroundShapes parallaxRef={parallaxRef}/>);

        const lottiePlayers = screen.getAllByTestId('dot-lottie-player');
        expect(lottiePlayers.length).toBe(2); // Expecting two Lottie animations
    });

    it('renders the gradient planets', () => {
        const parallaxRef = createRef<HTMLDivElement>();
        render(<BackgroundShapes parallaxRef={parallaxRef}/>);

        // Check for the presence of gradient planet elements
        const greenPlanet = screen.getByTestId("green-planet");
        const purplePlanet = screen.getByTestId("purple-planet");
        const yellowPlanet = screen.getByTestId("yellow-planet");
        const smallGreenPlanet = screen.getByTestId("small-green-planet");
        const smallPurplePlanet = screen.getByTestId("small-purple-planet");
        const smallYellowPlanet = screen.getByTestId("small-yellow-planet");

        expect(greenPlanet).toHaveClass("~w-4/7 ~h-4/7 bg-gradient-to-tr from-[#23F0C7] to-[#000000] rounded-full drop-shadow-[10px_-10px_8px_rgba(0,0,0,0.8)]")
        expect(purplePlanet).toHaveClass("~w-3/6 ~h-3/6 bg-gradient-to-tl from-[#F433AB] to-[#000000] rounded-full drop-shadow-[-10px_-10px_8px_rgba(0,0,0,0.8)]")
        expect(yellowPlanet).toHaveClass("~w-3/6 ~h-3/6 bg-gradient-to-b from-[#FBB02D] via-[#FA8334] to-[#000000] rounded-full drop-shadow-[0px_10px_8px_rgba(0,0,0,0.8)]")
        expect(smallGreenPlanet).toHaveClass("~w-2/4 ~h-2/4 bg-gradient-to-tr from-[#25907C] to-[#000000] rounded-full drop-shadow-[10px_-10px_8px_rgba(0,0,0,0.8)]")
        expect(smallPurplePlanet).toHaveClass("~w-2/4 ~h-2/4 bg-gradient-to-tl from-[#AC6AFF] to-[#000000] rounded-full drop-shadow-[-10px_-10px_8px_rgba(0,0,0,0.8)]")
        expect(smallYellowPlanet).toHaveClass("~w-3/5 ~h-3/5 bg-gradient-to-b from-[#FB6107] to-[#000000] rounded-full drop-shadow-[-10px_10px_8px_rgba(0,0,0,0.8)]")

        expect(greenPlanet).toBeInTheDocument()
        expect(purplePlanet).toBeInTheDocument()
        expect(yellowPlanet).toBeInTheDocument()
        expect(smallGreenPlanet).toBeInTheDocument()
        expect(smallPurplePlanet).toBeInTheDocument()
        expect(smallYellowPlanet).toBeInTheDocument()
    });

    it('renders the twinkling stars', () => {
        const parallaxRef = createRef<HTMLDivElement>();
        render(<BackgroundShapes parallaxRef={parallaxRef}/>);

        // Check for the presence of elements styled as stars
        const stars = screen.getAllByTestId("twinking-star"); // Adjust based on how your stars are rendered
        expect(stars.length).toBe(3); // Adjust based on how many stars you expect
    });

    // Add negative tests
    it('does not crash when parallaxRef is null', () => {
        // @ts-ignore
        const {container} = render(<BackgroundShapes parallaxRef={null}/>);
        expect(container).toBeInTheDocument(); // Ensure it still renders
    });
});
