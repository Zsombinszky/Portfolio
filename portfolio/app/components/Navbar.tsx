"use client";
import React, {useState} from 'react';
import {FaMoon, FaSun, FaBars, FaTimes} from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className="fixed top-0 w-full bg-lightGray dark:bg-darkModeGray shadow-md z-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="/logo.png" alt="Logo"/>
                        </div>
                        <div className="hidden md:block ml-10 flex items-baseline space-x-4">
                            <a href="#"
                               className="text-darkGray dark:text-lightGray px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#technologies"
                               className="text-darkGray dark:text-lightGray px-3 py-2 rounded-md text-sm font-medium">Technologies</a>
                            <a href="#contact"
                               className="text-darkGray dark:text-lightGray px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className="bg-coral text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <FaSun className="mr-2"/> : <FaMoon className="mr-2"/>}
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-darkGray dark:text-lightGray p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isOpen ? <FaTimes/> : <FaBars/>}
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="ml-4 bg-coral text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <FaSun/> : <FaMoon/>}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-lightGray dark:bg-darkModeGray`}>
                <a href="#" className="block text-darkGray dark:text-lightGray px-4 py-2 text-sm font-medium">Home</a>
                <a href="#technologies"
                   className="block text-darkGray dark:text-lightGray px-4 py-2 text-sm font-medium">Technologies</a>
                <a href="#contact"
                   className="block text-darkGray dark:text-lightGray px-4 py-2 text-sm font-medium">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
