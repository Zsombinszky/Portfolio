import React, {useEffect, useState} from 'react';
import circleLogo from '@/public/images/navbarlogo.jpg';
import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';

const technologies = [
    {name: 'Javascript', logo: '/logos/javascript.svg'},
    {name: 'React', logo: '/logos/react-2.svg'},
    {name: 'TailwindCSS', logo: '/logos/tailwindcss.svg'},
    {name: 'Next.js', logo: '/logos/next-js.svg'},
    {name: 'Framer Motion', logo: 'logos/framer-motion.svg'},
    {name: 'Java', logo: '/logos/java-14.svg'},
    {name: 'Spring Boot', logo: '/logos/springboot.svg'},
    {name: 'Node.js', logo: '/logos/nodegreenicon.svg'},
    {name: 'Express', logo: '/logos/express.svg'},
    {name: 'MongoDB', logo: '/logos/mongodb-icon-1-1.svg'},
    {name: 'PostgreSQL', logo: '/logos/postgresql.svg'},
    {name: 'Appwrite', logo: '/logos/appwrite.svg'},
];

const TechCircle = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const circleSpinControl = useAnimation();
    const logoSpinControls = useAnimation();
    const animationDuration = 50;

    const startSpinning = () => {
        circleSpinControl.start({
            rotate: 360,
            transition: {
                repeat: Infinity,
                duration: animationDuration,
                ease: 'linear',
            },
        });
        logoSpinControls.start({
            rotate: -360,
            transition: {
                repeat: Infinity,
                duration: animationDuration,
                ease: 'linear',
            },
        });
    };

    const stopSpinning = () => {
        circleSpinControl.stop();
        logoSpinControls.stop();
    };

    useEffect(() => {
        startSpinning();
    }, []);

    return (
        <div
            style={{transform: 'translateY(19rem) translateX(1.1rem)'}}
            className="absolute top-0 lg:ml-auto xl:w-[42rem]"
        >
            <div
                className="relative left-1/2 flex w-[24.2rem] aspect-square border border-transparent rounded-full -translate-x-1/2">
                <div className="flex w-60 aspect-square m-auto border border-transparent rounded-full">
                    <div className="w-[8rem] aspect-square m-auto p-[0.2rem] rounded-full overflow-hidden">
                        <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                            <Image
                                className="bg-cover rounded-full scale-[1]"
                                src={circleLogo}
                                alt="circleLogo"
                            />
                        </div>
                    </div>
                </div>
                <motion.ul
                    className="absolute inset-0 flex items-center justify-center will-change-transform" // Apply here for spinning circle
                    animate={circleSpinControl}
                >
                    {technologies.map((app, index) => (
                        <motion.li
                            key={index}
                            className="absolute will-change-transform" // Apply here for individual logos
                            style={{
                                transform: `rotate(${index * (360 / technologies.length)}deg) translate(10rem) rotate(-${index * (360 / technologies.length)}deg)`,
                            }}
                        >
                            <motion.div
                                style={{
                                    transform: `rotate(${index * (360 / technologies.length)}deg) translate(6rem) `,
                                }}
                                className="absolute -translate-y-10 will-change-transform" // Apply here for the positioning
                            >
                                <motion.p
                                    className="tracking-wider text-xl glow-text font-bold text-planetGreen will-change-transform" // Apply here for hover text
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        scale: hoveredIndex === index ? 1 : 0.9,
                                    }}
                                    transition={{duration: 0.2}}
                                >
                                    {app.name}
                                </motion.p>
                            </motion.div>
                            <motion.div
                                animate={logoSpinControls}
                                onMouseEnter={() => {
                                    stopSpinning();
                                    setHoveredIndex(index);
                                }}
                                onMouseLeave={() => {
                                    startSpinning();
                                    setHoveredIndex(null);
                                }}
                                onHoverStart={() =>
                                    logoSpinControls.start({
                                        scale: 1.2,
                                        transition: {duration: 0.2},
                                    })
                                }
                                onHoverEnd={() =>
                                    logoSpinControls.start({
                                        scale: 1,
                                        transition: {duration: 0.2},
                                    })
                                }
                                className="cursor-pointer shadow-xl shadow-planetGreen hover:bg-gradient-to-tr from-planetGreen via-black tra to-color-1 flex w-[2.8rem] h-[2.8rem] bg-n-8 border border-n-1/15 rounded-xl transition-colors duration-500 will-change-transform"
                            >
                                <Image
                                    className="m-auto"
                                    width={28}
                                    height={28}
                                    src={app.logo}
                                    alt={app.name}
                                />
                            </motion.div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default TechCircle;
