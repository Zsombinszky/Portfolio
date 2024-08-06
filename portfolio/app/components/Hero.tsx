// app/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
    return (
        <div id={"hero"} className="bg-lightGray p-6 md:p-12 lg:p-24 xl:p-32">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkGray mb-4">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-darkGray mb-6">
                        I'm a Junior Full Stack Developer passionate about front-end development and great design.
                    </p>
                    <a href="#projects" className="bg-coral text-white py-2 px-6 rounded-full text-lg md:text-xl">
                        View My Work
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img src="/hero-image.jpg" alt="Hero" className="w-full rounded-lg shadow-lg"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
