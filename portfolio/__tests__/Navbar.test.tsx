import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Navbar from "@/app/components/Navbar";

describe('Navbar Component', () => {

    test('renders without crashing', () => {
        render(<Navbar/>);

        // Check if the logo is rendered
        expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    });

    test('renders every button', () => {
        render(<Navbar/>);

        const homeButton = screen.getByTestId('nav-home')
        const techButton = screen.getByTestId('nav-technologies')
        const aboutmeButton = screen.getByTestId('nav-aboutme')
        const projectsButton = screen.getByTestId('nav-projects')
        const contactButton = screen.getByTestId('nav-contact')

        const buttons = [homeButton, techButton, aboutmeButton, projectsButton, contactButton]

        buttons.forEach((button) => {
            expect(button).toBeInTheDocument()
            expect(button).toHaveClass('text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300')
            expect(button).toHaveStyle('font-family: var(--font-code)')
        })
    });
});
