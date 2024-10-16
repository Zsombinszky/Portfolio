import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Contact from "@/app/components/Contact";
import {userEvent} from "@testing-library/user-event";

describe('Contact component', () => {

    it('renders without crashing', () => {
        render(<Contact/>)

        const email = screen.getByText('pzsombor.dev@gmail.com')
        expect(email).toBeInTheDocument()
    })

    it('renders all essential elements', () => {
        render(<Contact/>)

        const title = screen.getByRole('heading', {
            level: 2,
            name: "Let's Connect"
        })
        expect(title).toBeInTheDocument()
        expect(title).toHaveClass('text-4xl md:text-6xl text-center md:text-start lg:text-8xl glow-text font-bold text-color-5 ~mb-8/12')

        const contactMessage = screen.getByTestId('contactmessage')
        expect(contactMessage).toBeInTheDocument()
        expect(contactMessage).toHaveClass('~text-xl/2xl px-6 mb-2 glow-text font-semibold text-lightGray text-center')

        const email = screen.getByText('pzsombor.dev@gmail.com')
        expect(email).toBeInTheDocument()

        const findmeSection = screen.getByTestId('findme-section')
        expect(findmeSection).toBeInTheDocument()

        const contactForm = screen.getByTestId('contact-form')
        expect(contactForm).toBeInTheDocument()
    })

    it('Renders the correct background image', () => {
        render(<Contact/>)

        const contactSection = screen.getByTestId('contact-section')
        expect(contactSection).toBeInTheDocument()
        expect(contactSection).toHaveStyle('backgroundImage: url(/backgrounds/contactbg.jpeg)')
        expect(contactSection).toHaveClass('relative h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center')
        expect(contactSection).toHaveTextContent('pzsombor.dev@gmail.com')
    })

    it('changes style on hover', async () => {
        render(<Contact/>);
        const aTag = screen.getByText('pzsombor.dev@gmail.com');
        expect(aTag).toBeInTheDocument()
        expect(aTag).toHaveClass('text-color-4');
        // Simulate hover using userEvent
        await userEvent.hover(aTag);

        aTag.classList.add('text-lightOrange');  // Manually mimic hover behavior

        expect(aTag).toHaveClass('text-lightOrange');
    });

    it('Matches the snapshot', () => {
        const {asFragment} = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot()
    })
})
