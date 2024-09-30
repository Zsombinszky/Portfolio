import React, { useState, useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from './ContactForm'; // Adjust the import path as necessary

interface MessageInputProps {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const MessageInput: React.FC<MessageInputProps> = ({ register, errors }) => {
    const [rows, setRows] = useState(2);

    useEffect(() => {
        const updateRows = () => {
            setRows(window.innerWidth >= 768 ? 4 : 2);
        };
        updateRows();
        window.addEventListener('resize', updateRows);

        return () => window.removeEventListener('resize', updateRows);
    }, []);

    return (
        <div className="~mb-2/4">
            <label htmlFor="message" className="block ~text-base/lg md:text-start text-center glow-text font-semibold text-planetGreen mb-2">
                Message
            </label>
            <textarea
                id="message"
                rows={rows}
                {...register('message')}
                className={`w-full text-lightGray bg-darkModeGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-500 ~text-xs/sm">{errors.message.message}</p>}
        </div>
    );
};

export default MessageInput;
