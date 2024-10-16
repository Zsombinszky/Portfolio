import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import AnimatedName from "@/app/components/AnimatedName";

describe('AnimatedName component', () => {

    it('matches the snapshot', () => {
        const {asFragment} = render(<AnimatedName myName="PÓCS ZSOMBOR"/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the correct name from the prop', () => {
        const myName = 'John Doe';
        render(<AnimatedName myName={myName}/>);
        expect(screen.getByText(myName)).toBeInTheDocument();
    });

    it('renders with the initial animation state', () => {
        const {container} = render(<AnimatedName myName="PÓCS ZSOMBOR"/>);
        const animatedDiv = container.querySelector('div');

        expect(animatedDiv).toBeInTheDocument()

        // Ensure the initial state is set correctly
        expect(animatedDiv).toHaveStyle('transform: translateX(-120%)');
        expect(animatedDiv).toHaveStyle('color: transparent');
        expect(animatedDiv).toHaveClass('font-bold');
    });
})