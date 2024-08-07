import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section
            id="aboutme"
            className="bg-lightGray dark:bg-darkModeGray mt-6 md:mt-12 lg:mt-16 p-6 md:p-12 lg:p-24 xl:p-32 transition-colors duration-500 ease-in-out"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/profilepic.jpg"
                        alt="Profile picture"
                        className="w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkGray dark:text-lightGray mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-darkGray dark:text-lightGray mb-4">
                        My goal is to build innovative and impactful web applications, with a focus on creating
                        intuitive and visually compelling user experiences.</p>
                    <p className="text-lg text-darkGray dark:text-lightGray mb-4">
                        Over the past year at CodeCool, I’ve gained hands-on experience with the MERN stack and full
                        stack development using JavaScript and Java.</p>
                    <p className="text-lg text-darkGray dark:text-lightGray mb-4">
                        Outside of work, I enjoy reminiscing about basketball and boxing, camping with friends, and
                        diving into music and video games.</p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 mt-4 bg-lightCoral text-white rounded-full font-extrabold transition-colors duration-300 hover:bg-lightOrange"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
