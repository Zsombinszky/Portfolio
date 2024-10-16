import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Button from '@/app/components/Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {

    it('matches the snapshot', () => {
        const {asFragment} = render(<Button children={'Click Me'}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders a button element when no href is provided', () => {
        render(<Button onClick={() => {
        }}>Click Me</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('renders a link element when href is provided', () => {
        render(<Button href="/somewhere">Click Me</Button>);

        const link = screen.getByTestId('a-tag');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/somewhere');
    });

    it('calls onClick when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders children correctly', () => {
        render(<Button>Test Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Test Button');
    });

    it('has the correct classes applied', () => {
        render(<Button>Test Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('group flex items-center justify-center h-12 w-52 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-4 text-white p-[1.5px]');
    });

    it('has the correct classes applied for the link', () => {
        render(<Button href="/somewhere">Test Link</Button>);

        const link = screen.getByTestId('a-tag');
        expect(link).toHaveClass('group flex items-center justify-center h-12 w-52 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-4 text-white p-[1.5px]');
    });
});
