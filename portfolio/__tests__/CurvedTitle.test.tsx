import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import CurvedTitle from "@/app/components/CurvedTitle";

describe('CurvedTitle component', () => {

    it('Renders without crashing', () => {
        render(<CurvedTitle/>)

        const text = screen.getByText('Tech Arsenal')
        expect(text).toBeInTheDocument()
    })

    it('includes the correct SVG path', () => {
        render(<CurvedTitle/>);
        const svgPath = screen.getByTestId('curve-path');
        expect(svgPath).toHaveAttribute('d', 'M 0 150 C 100 50, 300 50, 400 150');
    });

    it('aligns the text correctly', () => {
        render(<CurvedTitle/>);
        const textElement = screen.getByText('Tech Arsenal');

        screen.debug(textElement)
        expect(textElement).toHaveAttribute('text-anchor', 'middle');
    });

    it('renders responsively', () => {
        render(<CurvedTitle/>);

        const svg = screen.getByTestId('curve-svg');
        expect(svg).toHaveClass('w-[60%]');
        expect(svg).toHaveClass('max-w-[600px]');
    });

    it('has proper accessibility attributes', () => {
        render(<CurvedTitle/>);
        const textElement = screen.getByText('Tech Arsenal');
        expect(textElement).toHaveAttribute('fill', '#858DFF');
        expect(textElement).toHaveClass('glow-text font-bold');
    });

    it('optimizes SVG rendering', async () => {
        render(<CurvedTitle/>);
        const element = screen.getByText('Tech Arsenal')
        expect(element).toBeVisible();
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<CurvedTitle/>);
        expect(asFragment()).toMatchSnapshot();
    });
})