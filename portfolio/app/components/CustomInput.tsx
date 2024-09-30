import React from "react";
import {UseFormRegister} from "react-hook-form";

interface CustomInputProps {
    label: string;
    id: string;
    type: string;
    register: UseFormRegister<any>;
    error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({label, id, type, register, error}) => {
    return (
        <div className="w-full ~mb-2/4 px-1">
            <label htmlFor={id} className="block ~text-base/lg text-planetGreen font-semibold mb-2">{label}</label>
            <input
                id={id}
                type={type}
                {...register(id)}
                className={`w-full p-3 bg-darkModeGray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 ~text-xs/sm">{error}</p>}
        </div>
    );
};

export default CustomInput;
