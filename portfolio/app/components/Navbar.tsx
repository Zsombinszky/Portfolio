"use client";
import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <nav
                className="fixed top-0 w-full bg-[#020509]/90 shadow-md z-50 border-b border-n-6 lg:backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center flex-grow">
                            <div className="flex-shrink-0">
                                <Image className="rounded-full" width={60} height={60} src="/images/navbarlogo.jpg" alt="Logo"/>
                            </div>
                            <div className="hidden md:flex justify-center flex-grow">
                                <div className="flex space-x-12">
                                    <Link
                                        href="/#"
                                        className="text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300"
                                        style={{fontFamily: 'var(--font-code)'}}
                                    >
                                        HOME
                                    </Link>
                                    <Link
                                        href="/#technologies"
                                        className="text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300"
                                        style={{fontFamily: 'var(--font-code)'}}
                                    >
                                        TECHNOLOGIES
                                    </Link>
                                    <Link
                                        href="/#aboutme"
                                        className="text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300"
                                        style={{fontFamily: 'var(--font-code)'}}
                                    >
                                        ABOUT ME
                                    </Link>
                                    <Link
                                        href="/#gallery"
                                        className="text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300"
                                        style={{fontFamily: 'var(--font-code)'}}
                                    >
                                        PROJECTS
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        className="text-n-1/50 hover:text-n-1 px-3 py-2 rounded-md text-base font-semibold transition duration-300"
                                        style={{fontFamily: 'var(--font-code)'}}
                                    >
                                        CONTACT
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-white p-2"
                                aria-label="Toggle mobile menu"
                            >
                                {isOpen ? <FaTimes/> : <FaBars/>}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-lightGray`}>
                    <Link href="/#" className="block text-darkGray px-4 py-2 text-sm font-medium">Home</Link>
                    <Link href="/#technologies"
                          className="block text-darkGray px-4 py-2 text-sm font-medium">Technologies</Link>
                    <Link href="/#aboutme" className="block text-darkGray px-4 py-2 text-sm font-medium">About me</Link>
                    <Link href="/#gallery" className="block text-darkGray px-4 py-2 text-sm font-medium">Gallery</Link>
                    <Link href="/#contact" className="block text-darkGray px-4 py-2 text-sm font-medium">Contact</Link>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
