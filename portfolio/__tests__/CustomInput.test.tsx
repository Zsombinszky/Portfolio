import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import CustomInput from "@/app/components/CustomInput";

describe('CustomInput component', () => {

    it('Renders without crashing', () => {
        // @ts-ignore
        render(<CustomInput label="Test Label" id="test-input" type="text" register={() => {
        }}/>);

        expect(screen.getByTestId('custominput')).toBeInTheDocument();
    });

    it('Renders the input with the correct properties', () => {
        // @ts-ignore
        render(<CustomInput label="Test Label" id="test-input" type="text" register={() => {
        }}/>);

        const customLabel = screen.getByLabelText('Test Label')
        expect(customLabel).toBeInTheDocument()

        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('id', 'test-input');
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveClass('w-full p-3 bg-darkModeGray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1');
    })

    it('Handles error prop correctly', () => {
        // @ts-ignore
        render(<CustomInput label="Test Label" id="test-input" type="text" register={() => {
        }} error="This is an error"/>);
        const errorMessage = screen.getByText('This is an error');
        expect(errorMessage).toBeInTheDocument();
    });

    it('Associated label with input field', () => {
        // @ts-ignore
        render(<CustomInput label="Test Label" id="test-input" type="text" register={() => {
        }}/>);

        const inputField = screen.getByTestId('custominput').querySelector('input');
        const labelElement = screen.getByText('Test Label');

        expect(labelElement).toHaveAttribute('for', 'test-input');
        // @ts-ignore
        expect(labelElement).toBeVisible({container: inputField});
    })

    it('matches the snapshot', () => {
        // @ts-ignore
        const {asFragment} = render(<CustomInput label="Test Label" id="test-input" type="text" register={() => {
        }}/>);
        expect(asFragment()).toMatchSnapshot();
    });
})