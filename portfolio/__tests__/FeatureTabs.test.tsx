import React from 'react';
import {fireEvent, render, screen, act, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureTabs from '@/app/components/FeatureTabs';
import {tabs} from '@/constants';

// Mocking the DotLottiePlayer component
jest.mock('@dotlottie/react-player', () => ({
    DotLottiePlayer: React.forwardRef(() => <div data-testid="dot-lottie">Mock DotLottiePlayer</div>),
}));

// Mocking necessary components and libraries
jest.mock('next/image', () => {
    // @ts-ignore
    return ({src, alt, className}) => <img src={src} alt={alt} className={className}/>;
});

describe('FeatureTabs component', () => {
    it('renders without crashing', () => {
        render(<FeatureTabs/>);

        // Check that all tabs are rendered
        tabs.forEach(tab => {
            const tabElement = screen.getByText(tab.title);
            expect(tabElement).toBeInTheDocument();
        });

        const backgroundDiv = screen.getByTestId('featuretabs-imagecontainer')
        expect(backgroundDiv).toBeVisible()
        expect(backgroundDiv).toHaveStyle(`background-image: url(/img.jpg)`);
    });

    it('changes selected tab when clicked', () => {
        render(<FeatureTabs/>);

        // Initially, the first tab should be selected
        const featureTabs = screen.getAllByTestId('featuretab');
        const firstTab = featureTabs[0];
        const overlay = screen.getByTestId('selected-overlay');

        // Check that the overlay is inside the first tab
        expect(firstTab).toContainElement(overlay);
        expect(overlay).toBeInTheDocument();

        // Click the second tab
        const secondTab = featureTabs[1];

        act(() => {
            fireEvent.click(secondTab);
        });

        const updatedOverlay = screen.getByTestId('selected-overlay'); // Get the overlay again
        expect(secondTab).toContainElement(updatedOverlay);
        expect(updatedOverlay).toBeInTheDocument();
    });

    it('applies the correct background position and size when tab is selected', async () => {
        render(<FeatureTabs/>);

        const featureTabs = screen.getAllByTestId('featuretab');

        const image = screen.getByTestId('featuretabs-imagecontainer')
        expect(image).toHaveStyle('background-position: 0% 0%')
        expect(image).toHaveStyle('background-size: 200% auto')

        const secondTab = featureTabs[1];
        act(() => {
            fireEvent.click(secondTab)
        })

        await waitFor(() => {
            expect(image).not.toHaveStyle('background-size: 200%');
            expect(image).not.toHaveStyle('background-position: 0% 0%');
        });
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<FeatureTabs/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
