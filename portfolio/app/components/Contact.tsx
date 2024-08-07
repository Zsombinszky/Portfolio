import React from 'react';
import {LuSeparatorHorizontal} from "react-icons/lu";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="bg-lightGray dark:bg-darkModeGray mt-6 md:mt-12 lg:mt-16 p-6 md:p-12 lg:p-24 xl:p-32 transition-colors duration-500 ease-in-out"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-darkGray dark:text-lightGray mb-8">
                    Get in Touch
                </h2>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
                        <p className="text-lg text-darkGray dark:text-lightGray mb-4 text-center">
                            If you have any questions or just want to say hello, feel free to drop me a message.
                            I’m always open to new opportunities and collaborations.
                        </p>
                        <a
                            href="mailto:pzsombor.dev@gmail.com"
                            className="text-lg text-lightCoral hover:text-lightOrange transition-colors duration-300"
                        >
                            pzsombor.dev@gmail.com
                        </a>
                        <p className="text-lg mt-12 mb-8 text-darkGray dark:text-lightGray text-center">
                            Or find me on LinkedIn or GitHub.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <a
                                href="https://www.linkedin.com/in/zsombor-p%C3%B3cs/"
                                className="inline-block shake-wobble"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="#0077B5"
                                    className=""
                                >
                                    <path
                                        d="M22.23 0H1.77C.792 0 0 .774 0 1.726v20.548C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.274V1.726C24 .774 23.208 0 22.23 0zM7.09 20.452H3.55V9H7.09v11.452zM5.32 7.577c-1.13 0-1.99-.89-1.99-1.98s.86-1.98 1.99-1.98c1.13 0 1.99.89 1.99 1.98s-.86 1.98-1.99 1.98zM20.452 20.452h-3.538v-5.886c0-1.406-.028-3.214-1.961-3.214-1.964 0-2.264 1.536-2.264 3.114v5.986H9.086V9h3.396v1.561h.046c.474-.9 1.637-1.85 3.37-1.85 3.603 0 4.271 2.37 4.271 5.453v6.288h-.017z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <LuSeparatorHorizontal
                            className="my-6 h-12 w-12 dark:text-lightOrange transition-colors duration-300"/>
                        <div className="mt-4 flex justify-center">
                            <a
                                href="https://github.com/Zsombinszky"
                                className="inline-block shake-wobble"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="bg-white rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="#181717"
                                        className=""
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.167 6.84 9.486.5.093.682-.217.682-.483 0-.237-.009-.867-.014-1.704-2.782.606-3.369-1.35-3.369-1.35-.453-1.148-1.107-1.453-1.107-1.453-.906-.617.069-.605.069-.605 1 .07 1.528 1.027 1.528 1.027.894 1.508 2.34 1.07 2.91.818.092-.648.35-1.07.637-1.315-2.22-.253-4.56-1.111-4.56-4.94 0-1.091.39-1.989 1.029-2.688-.103-.254-.447-1.277.097-2.662 0 0 .84-.27 2.75 1.027A9.601 9.601 0 0 1 12 8.158a9.63 9.63 0 0 1 2.497.34c1.91-1.297 2.75-1.027 2.75-1.027.545 1.385.2 2.408.1 2.662.641.698 1.029 1.597 1.029 2.688 0 3.84-2.343 4.686-4.57 4.93.36.31.68.921.68 1.85 0 1.335-.012 2.415-.012 2.743 0 .266.18.578.69.481A9.975 9.975 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-10 ml-5">
                        <form
                            action="#"
                            method="POST"
                            className="bg-white dark:bg-darkModeLightGray p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-darkGray dark:text-lightGray mb-4">
                                Contact Form
                            </h3>
                            <div className="mb-4">
                                <label htmlFor="name"
                                       className="block text-darkGray dark:text-lightGray mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full dark:text-lightGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightCoral dark:border-gray-600 dark:bg-darkModeGray dark:focus:ring-lightOrange"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-darkGray dark:text-lightGray mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full dark:text-lightGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightCoral dark:border-gray-600 dark:bg-darkModeGray dark:focus:ring-lightOrange"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message"
                                       className="block text-darkGray dark:text-lightGray mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full dark:text-lightGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightCoral dark:border-gray-600 dark:bg-darkModeGray dark:focus:ring-lightOrange"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-block px-8 py-3 mt-4 bg-lightCoral text-white rounded-full font-extrabold transition-colors duration-300 hover:bg-lightOrange"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
