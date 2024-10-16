import React, {useEffect, useMemo, useState} from 'react';
import circleLogo from '@/public/images/navbarlogo.jpg';
import Image from 'next/image';
import {motion, useAnimation} from 'framer-motion';

const TechCircle = () => {
    const [hoveredLogoName, setHoveredLogoName] = useState<string | null>(null);
    const circleSpinControl = useAnimation();
    const logoSpinControls = useAnimation();
    const animationDuration = 50;

    const technologies = useMemo(() => [
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
    ], []);

    const handleStartSpin = () => {
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

    const handleStopSpin = () => {
        circleSpinControl.stop();
        logoSpinControls.stop();
    };

    useEffect(() => {
        handleStartSpin();
        return handleStopSpin; // Clean up animation on component unmount
    }, []);

    return (
        <div
            style={{transform: 'translateY(19rem) translateX(1.1rem)'}}
            className="absolute top-0 lg:ml-auto xl:w-[42rem]"
        >
            <motion.div
                className="absolute inset-x-0 -top-20 flex justify-center items-center"
                initial={{opacity: 0}}
                animate={{opacity: hoveredLogoName ? 1 : 0}}
                transition={{duration: 0.3}}
                data-testid="techname"
            >
                {hoveredLogoName && (
                    <h3 className="text-lightOrange text-2xl sm:text-4xl font-bold glow-text tracking-wide">
                        {hoveredLogoName}
                    </h3>
                )}
            </motion.div>
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
                    className="absolute inset-0 flex items-center justify-center will-change-transform"
                    animate={circleSpinControl}
                >
                    {technologies.map((tech, index) => (
                        <motion.li
                            key={index}
                            className="absolute will-change-transform"
                            style={{
                                transform: `rotate(${index * (360 / technologies.length)}deg) translate(10rem) rotate(-${index * (360 / technologies.length)}deg)`,
                            }}
                        >
                            <motion.div
                                animate={logoSpinControls}
                                onMouseEnter={() => {
                                    setHoveredLogoName(tech.name);
                                    handleStopSpin();
                                }}
                                onMouseLeave={() => {
                                    setHoveredLogoName(null);
                                    handleStartSpin();
                                }}
                                whileHover={{scale: 1.2}}
                                className="cursor-pointer shadow-xl shadow-planetGreen hover:bg-gradient-to-tr from-planetGreen via-black to-color-1 flex w-[2.8rem] h-[2.8rem] bg-n-8 border border-n-1/15 rounded-xl transition-colors duration-500"
                                aria-label={tech.name}
                            >
                                <Image
                                    className="m-auto"
                                    width={28}
                                    height={28}
                                    src={tech.logo}
                                    alt={tech.name}
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
