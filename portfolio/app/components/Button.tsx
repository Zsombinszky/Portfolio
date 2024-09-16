import React from 'react'
import Link from "next/link";
import {ButtonProps} from "@/types";

const Button = ({children, href, onClick, type}: ButtonProps) => {
    const linkClasses = `group flex items-center justify-center h-12 w-52 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-4 text-white p-[1.5px]`;
    const divClasses = `relative tracking-wide text-lg font-bold flex rounded-full bg-gray-900 h-full w-full items-center justify-center group-hover:bg- group-hover:text-color-1 duration-500`;
    const spanClasses = `absolute bottom-2 left-0 w-full h-[2px] bg-color-1 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-[70%]`;

    const renderButton = () => (
        <button className={linkClasses} onClick={onClick}>
            <div className={divClasses}>
                {children}
                <span className={spanClasses}></span>
            </div>
        </button>
    );

    const renderLink = () => (
        <Link href={href ?? "#"} className={linkClasses} onClick={onClick}>
            <div className={divClasses}>
                {children}
                <span className={spanClasses}></span>
            </div>
        </Link>
    );

    return href ? renderLink() : renderButton();
}

export default Button;
