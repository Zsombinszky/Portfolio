import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import AnimatedHeroText1 from "@/app/components/AnimatedHeroText1";

describe('AnimatedHeroText1 component', () => {
    const words = ['Hello', 'world', 'this', 'is', 'a', 'test'];

    it('renders without crashing', () => {
        render(<AnimatedHeroText1 words={words}/>);

        // Check if each word is rendered
        words.forEach(word => {
            expect(screen.getByText(word)).toBeInTheDocument();
        });
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(<AnimatedHeroText1 words={['Hello', 'world']} />);
        expect(asFragment()).toMatchSnapshot();
    });
})