import React from 'react';
import Carousel from "@/app/components/Carousel";
import Button from "@/app/components/Button";
import {bankingProject} from "@/constants";

const Projects = () => {
    return (
        <section
            id="gallery"
            className="relative w-full h-screen overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(/backgrounds/aboutmebg.jpg)'}}
        >
            <div className="relative mt-8 w-full flex flex-col items-center px-4 md:px-16">
                <h1 className="text-color-5 glow-text font-bold text-8xl text-center mt-12 mb-8">Projects</h1>
                {/*  carousel */}
                <div>
                    <div>
                        <Carousel images={bankingProject.images}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;