import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom";
import FeatureTab from "@/app/components/FeatureTab";

// Mocking the DotLottiePlayer component
jest.mock('@dotlottie/react-player', () => ({
    DotLottiePlayer: React.forwardRef(() => <div data-testid="dot-lottie">Mock DotLottiePlayer</div>),
}));

describe('FeatureTab component', () => {
    // Basic Rendering Test
    it('renders the component without crashing', () => {
        render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={() => {
        }}/>);

        const titleElement = screen.getByText('Test title');
        expect(titleElement).toBeInTheDocument();
        expect(screen.getByText('Mock DotLottiePlayer')).toBeInTheDocument(); // Check if mocked DotLottiePlayer is rendered
    });

    // Conditional Rendering of the 'selected' overlay
    it('renders the overlay when the tab is selected', () => {
        render(<FeatureTab title="Test title" icon="test icon" selected={true} onClick={() => {
        }}/>);

        const overlayElement = screen.getByTestId('selected-overlay'); // Use role or other query to identify the overlay
        expect(overlayElement).toBeInTheDocument();
    });

    it('does not render the overlay when the tab is not selected', () => {
        render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={() => {
        }}/>);

        const overlayElement = screen.queryByRole('region');
        expect(overlayElement).not.toBeInTheDocument(); // Should not render overlay when not selected
    });

    // Conditional Rendering of the 'new' label
    it('renders the "new" label if isNew is true', () => {
        render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={() => {
        }} isNew={true}/>);

        const newLabel = screen.getByText('new');
        expect(newLabel).toBeInTheDocument();
    });

    it('does not render the "new" label if isNew is false', () => {
        render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={() => {
        }} isNew={false}/>);

        const newLabel = screen.queryByText('new');
        expect(newLabel).not.toBeInTheDocument();
    });

    // Testing click event
    it('calls the onClick function when clicked', () => {
        const mockOnClick = jest.fn();
        render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={mockOnClick}/>);

        // Simulate a click event
        fireEvent.click(screen.getByText('Test title'));

        expect(mockOnClick).toHaveBeenCalled();
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<FeatureTab title="Test title" icon="test icon" selected={false} onClick={() => {
        }} isNew={false}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});