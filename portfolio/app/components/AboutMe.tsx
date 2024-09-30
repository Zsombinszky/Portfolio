import React from 'react'
import Button from "@/app/components/Button";
import Image from "next/image";
import aboutmeImage from "@/public/images/aboutme2.png";
import neonPcImage from '@/public/images/neonpc1.jpeg'
import lakersImage from '@/public/images/lakers2.jpg'
import hordeImage from '@/public/images/horde.jpg'
import nvidiaImage from '@/public/images/Nvidia-Symbol.jpg'
import codecoolLogo from '@/public/logos/codecool.png'

import {ABOUTME_MESSAGES} from "@/constants";
import {motion} from 'framer-motion';
import Link from "next/link";

const fadeUp = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}}
};

const fadeFromRightWithDelay = (delay: number) => ({
    hidden: {opacity: 0, x: 500},
    visible: {opacity: 1, x: 0, transition: {duration: 0.6, delay}}
});

const AboutMe = () => {
    return (
        <section
            id={"aboutme"}
            className="relative h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(/backgrounds/nbadarkpurple.jpg)'}}
        >
            <motion.div
                animate={{
                    translateY: [-20, 20],
                    boxShadow: "0px 0px 50px #7b2ff7", // Subtle shadow effect
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4,
                    ease: [0.42, 0, 0.58, 1],
                }}
                className="absolute top-[34%] right-8 cursor-pointer rounded-full"
            >
                <Link href="https://www.codecool.com/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
                        <Image className="~w-14/28" width={100} height={100} src={codecoolLogo} alt="codecool logo"/>
                    </motion.div>
                </Link>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center justify-evenly ~p-6/12">
                {/* Left Side: Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    variants={fadeUp}
                    className="relative w-[60%] sm:w-1/2 md:w-1/3 lg:w-1/4 mt-0 flex justify-center"
                >
                    <div className="relative w-full">
                        <Image
                            priority
                            src={aboutmeImage}
                            alt="Hero"
                            className="object-cover rounded-3xl border-4 border-gray-800 shadow-xl shadow-color-10/50 transform transition duration-300 hover:scale-105 hover:shadow-color-7/50"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Title and Text */}
                <div
                    className="h-auto md:h-[80vh] w-full md:w-1/2 rounded-2xl items-center flex flex-col text-left mb-0">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeUp}
                        className="glow-text text-center text-4xl md:text-6xl lg:text-8xl font-bold text-color-5 ~mb-8/12 transition-colors duration-500 ease-in-out"
                    >
                        About Me
                    </motion.h1>

                    {/* First text with a delay of 0.6 seconds */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeFromRightWithDelay(0.6)}
                        className="w-full"
                    >
                        <p className="~text-lg/xl glow-text font-semibold text-lightGray mb-8">
                            {ABOUTME_MESSAGES[0]}
                        </p>
                    </motion.div>

                    {/* Second text with a delay of 0.8 seconds */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeFromRightWithDelay(0.8)}
                        className="w-full"
                    >
                        <p className="~text-lg/xl glow-text font-semibold text-lightGray mb-8">
                            {ABOUTME_MESSAGES[1]}
                        </p>
                    </motion.div>

                    {/* Third text with a delay of 1 seconds */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeFromRightWithDelay(1)}
                        className="grid grid-cols-2 w-full mb-12"
                    >
                        <div className="flex md:hidden items-center justify-center">
                            <Button href={"#contact"}>
                                Contact Me
                            </Button>
                        </div>
                        <p className="~text-lg/xl glow-text font-semibold text-lightGray">
                            {ABOUTME_MESSAGES[2]}
                        </p>
                    </motion.div>

                    <div className="hidden md:grid md:grid-cols-2 gap-8 w-full">
                        <div></div>
                        <Button href={"#contact"}>
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute hidden md:block -right-14 bottom-0 md:scale-50 lg:scale-75 xl:scale-100">
                <div className="relative">
                    <Image
                        src={neonPcImage}
                        alt="cartoonaboutme"
                        className="object-cover"
                        width={600}
                        height={600}
                    />

                    <div
                        className="absolute top-[24%] left-[28.6%] -rotate-25 w-[71px] h-[55px] skew-x-[-20deg] skew-y-[-1deg]"
                    >
                        <Image
                            className="rounded-sm"
                            src={hordeImage}
                            alt="monitor1"
                            fill
                        />
                    </div>

                    <div className="absolute top-[19.1%] left-[41.4%] w-[104px] h-[57px] skew-x-[-1deg]">
                        <Image
                            className="object-cover rounded-sm"
                            src={lakersImage}
                            alt="monitor2"
                            fill
                        />
                    </div>

                    <div
                        className="absolute top-[24%] left-[59.7%] rotate-[22.5deg] w-[71px] h-[55px] skew-x-[17deg] skew-y-[3deg]"
                    >
                        <Image
                            className="rounded-sm"
                            src={nvidiaImage}
                            alt="monitor3"
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
