import React, {useEffect, useRef} from 'react';
import AnimatedHeroText1 from './AnimatedHeroText1';
import AnimatedHeroText2 from './AnimatedHeroText2';
import Button from './Button';
import Image from 'next/image';
import heroImage from '@/public/images/heroImage.png';
import {RAFTime} from '@/types';
import BackgroundShapes from "@/app/components/BackgroundShapes";
import AnimatedName from "@/app/components/AnimatedName";
import {motion} from 'framer-motion';
import {DotLottiePlayer} from "@dotlottie/react-player";
import Lenis from "lenis";
import {heroText, heroText2, myName} from "@/constants";

const Hero = () => {
    const heroImageRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: RAFTime) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <section
            ref={container}
            className="h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(/backgrounds/galaxy2.jpeg)'}}
        >
            <AnimatedName myName={myName}/>
            <BackgroundShapes parallaxRef={container}/>

            <div className="flex flex-col lg:flex-row ~mt-12/24 items-center justify-evenly ~p-6/12">
                {/* Left Side: Title and Texts */}
                <div className="h-auto items-center flex flex-col w-full md:w-[80%] lg:w-1/2 ~mb-8/0">
                    <motion.h1
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="mt-6 glow-text text-center text-4xl sm:text-6xl lg:text-8xl font-bold text-color-5 mb-4">
                        Welcome to My Portfolio
                    </motion.h1>
                    <AnimatedHeroText1 words={heroText}/>
                    <AnimatedHeroText2 words={heroText} words2={heroText2}/>
                    <DotLottiePlayer autoplay loop speed={0.8} src={"/lottie/arrow1.json"}
                                     className="~h-8/12 ~w-8/12 mb-4"/>

                    <Button href={"#gallery"}>
                        View My Work
                    </Button>
                </div>
                {/* Right Side: Hero Image */}
                <div className="relative w-1/3 md:w-1/4 lg:w-1/5 mt-0 flex justify-center">
                    <div
                        ref={heroImageRef}
                        className="relative w-[100%] sm:w-[75%]  lg:w-full"
                    >
                        <Image
                            priority
                            src={heroImage}
                            alt="Hero"
                            className="object-cover rounded-br-full rounded-tl-full border-4 border-gray-800 shadow-xl shadow-color-1/50 transform transition duration-300 hover:scale-105 hover:shadow-planetGreen/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
