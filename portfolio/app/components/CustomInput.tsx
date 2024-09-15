import React from 'react';
import {CustomInputProps} from "@/types";

const CustomInput: React.FC<CustomInputProps> = ({label, id, type, register, error}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block glow-text font-semibold text-planetGreen mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                {...register(id)}
                className={`w-full text-lightGray bg-darkModeGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default CustomInput;
