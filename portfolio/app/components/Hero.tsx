import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="bg-lightGray dark:bg-darkModeGray p-6 md:p-12 lg:p-24 xl:p-32 transition-colors duration-500 ease-in-out"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkGray dark:text-lightGray mb-4 transition-colors duration-500 ease-in-out">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-darkGray dark:text-lightGray mb-6 transition-colors duration-500 ease-in-out">
                        Hi, I'm Zsombor Pócs from Hungary. I'm a junior full stack developer with a strong passion for frontend.
                    </p>
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 mt-4 bg-lightCoral text-white rounded-full font-extrabold transition-colors duration-300 ease-in-out hover:bg-lightOrange dark:hover:bg-lightOrange"
                    >
                        View My Work
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="/hero-image.jpg"
                        alt="Hero"
                        className="w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
