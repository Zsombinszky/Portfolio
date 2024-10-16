import React from 'react';
import {render, screen, act} from '@testing-library/react';
import MessageInput from "@/app/components/MessageInput";
import "@testing-library/jest-dom";

describe('MessageInput Component', () => {
    test('renders without crashing', () => {
        render(<MessageInput errors={() => {
        }} register={() => {
        }}/>);

        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    test('adjusts the number of rows based on window width', () => {
        // Set up the initial viewport width
        act(() => {
            global.innerWidth = 800; // Simulate a desktop viewport
            global.dispatchEvent(new Event('resize')); // Trigger resize event
        });

        render(<MessageInput register={() => {
        }} errors={{}}/>);

        const messageInput = screen.getByTestId('message-input')

        expect(messageInput).toBeInTheDocument()
        expect(messageInput).toHaveAttribute('rows', '4')

        act(() => {
            global.innerWidth = 500; // Simulate a mobile viewport
            global.dispatchEvent(new Event('resize')); // Trigger resize event
        });

        expect(messageInput).toHaveAttribute('rows', '2')
    });

    test('registers the input with react-hook-form', () => {
        const mockRegister = jest.fn();
        render(<MessageInput register={mockRegister} errors={{}}/>);

        expect(mockRegister).toHaveBeenCalledWith('message');
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<MessageInput register={() => {
        }} errors={() => {
        }}/>);
        expect(asFragment()).toMatchSnapshot();
    });

});
