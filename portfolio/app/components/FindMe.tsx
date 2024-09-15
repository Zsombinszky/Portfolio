'use client'
import React, {useState} from "react";
import {motion} from "framer-motion";
import IconToFind from "@/app/components/IconToFind";
import {githubSVG, linkedInSVG} from "@/constants";
import starsBg from "@/public/backgrounds/stars.png";
import gridLines from "@/public/backgrounds/grid-lines.png";


export const FindMe: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({x: -1000, y: -1000});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="mt-12">
            <p className="text-2xl mx glow-text mb-4 text-lightGray font-medium dark:text-lightGray text-center">
                Or <span className="text-color-1">find</span> me on LinkedIn and GitHub.
            </p>
            <div
                className="relative h-[400px] w-[520px] rounded-xl overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({x: -1000, y: -1000})}
            >
                {/* Stars Background */}
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(${starsBg.src}), url(${starsBg.src})`,
                    }}
                    animate={{
                        backgroundPositionX: ["100%", "0%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                ></motion.div>

                {/* Grid Lines */}
                <div
                    className="absolute inset-0 top-2 -left-4 z-10 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]"
                    style={{
                        backgroundImage: `url(${gridLines.src})`,
                    }}
                />

                {/* Icons to Find */}
                <div className="absolute inset-0 flex justify-between">
                    <IconToFind
                        href={"https://www.linkedin.com/in/zsombor-p%C3%B3cs/"}
                        d={linkedInSVG}
                        isTop={true}
                    />
                    <IconToFind
                        href={"https://github.com/Zsombinszky"}
                        d={githubSVG}
                        isTop={false}
                    />
                </div>

                {/* Mask layer for the flashlight effect */}
                <div
                    className="absolute inset-0 bg-black z-0"
                    style={{
                        maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent 50%, black 80%)`,
                        WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent 50%, black 80%)`,
                        pointerEvents: 'none', // Ensure this layer doesn't interfere with mouse events
                        transition: 'mask-image 0.5s ease, -webkit-mask-image 0.5s ease',
                    }}
                />
            </div>
        </section>
    );
};
