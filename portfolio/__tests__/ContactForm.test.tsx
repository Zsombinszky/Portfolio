import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import ContactForm from "@/app/components/ContactForm";
import userEvent from "@testing-library/user-event";
import emailjs from "emailjs-com";

// Mock emailjs to avoid actual API calls during testing
jest.mock('emailjs-com', () => ({
    send: jest.fn(),
}));

describe('ContactForm component', () => {

    // Clear all mocks before each test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Renders without crashing', () => {
        render(<ContactForm/>);

        const contactSection = screen.getByTestId('contact-form');
        expect(contactSection).toBeInTheDocument();
        expect(contactSection).toHaveTextContent('Contact Form');
    });

    it('Renders all essential form elements', () => {
        render(<ContactForm/>);

        // Title of the form
        const title = screen.getByRole('heading', {
            name: 'Contact Form',
            level: 3,
        });
        expect(title).toBeInTheDocument();

        // Labels
        const nameLabel = screen.getByLabelText('Name');
        expect(nameLabel).toBeInTheDocument();

        const emailLabel = screen.getByLabelText('Email');
        expect(emailLabel).toBeInTheDocument();

        const messageLabel = screen.getByLabelText('Message');
        expect(messageLabel).toBeInTheDocument();

        // Inputs
        const nameInput = screen.getByRole('textbox', {name: /name/i});
        expect(nameInput).toBeInTheDocument();

        const emailInput = screen.getByRole('textbox', {name: /email/i});
        expect(emailInput).toBeInTheDocument();

        const messageInput = screen.getByRole('textbox', {name: /message/i});
        expect(messageInput).toBeInTheDocument();

        // Submit button
        const submitButton = screen.getByRole('button', {name: /send message/i});
        expect(submitButton).toBeInTheDocument();
    });

    it('displays validation errors if required fields are empty', async () => {
        render(<ContactForm/>);

        const submitButton = screen.getByRole('button', {name: /send message/i});
        await userEvent.click(submitButton);

        // Expect validation errors
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
            expect(screen.getByText('Invalid email address')).toBeInTheDocument();
            expect(screen.getByText('Message is required')).toBeInTheDocument();
        });
    });

    it('submits the form successfully and displays a success toast', async () => {
        // Mock emailjs send function to resolve successfully
        (emailjs.send as jest.Mock).mockResolvedValueOnce({status: 200});

        render(<ContactForm/>);

        // Fill out the form
        await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
        await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
        await userEvent.type(screen.getByRole('textbox', {name: /message/i}), 'Hello, this is a test message.');

        // Submit the form
        await userEvent.click(screen.getByRole('button', {name: /send message/i}));

        // Wait for async submit and toast message
        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
        });
    });

    it('displays loading state when form is being submitted', async () => {
        // Mock the emailjs.send function to resolve successfully
        (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });

        // Render the ContactForm component
        render(<ContactForm />);

        // Fill out the form
        await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
        await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
        await userEvent.type(screen.getByRole('textbox', { name: /message/i }), 'Hello, this is a test message.');

        // Click the submit button
        const submitButton = screen.getByRole('button', { name: /send message/i });
        await userEvent.click(submitButton);

        // Wait for the success toast message to appear after the email sending
        await waitFor(() => {
            expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
            expect(emailjs.send).toHaveBeenCalledTimes(1);
        });

        // Ensure the button text resets back to 'Send Message' after completion
        expect(submitButton).toHaveTextContent(/send message/i);
    });

    it('matches the snapshot', () => {
        const {asFragment} = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
