import React, {useEffect, useState} from 'react';
import {DotLottiePlayer} from "@dotlottie/react-player";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {Technology, TechnologyCardProps} from "@/types";

const TechnologyCard = ({
                            title,
                            translateY,
                            onClick,
                            onMouseEnter,
                            isExpanded,
                            dotLottieRef,
                            technologies,
                            side
                        }: TechnologyCardProps) => {
    const sideClass = side === 'left' ? 'left-[4%]' : 'right-[4%]';

    // State to track if the card has fully expanded
    const [hasExpanded, setHasExpanded] = useState(false);

    // When the card expands, set `hasExpanded` to true after the expansion animation completes
    useEffect(() => {
        if (isExpanded) {
            const timeout = setTimeout(() => {
                setHasExpanded(true);
            }, 500); // Duration matches the card expansion animation
            return () => clearTimeout(timeout);
        } else {
            setHasExpanded(false); // Reset when the card collapses
        }
    }, [isExpanded]);

    return (
        <motion.div
            style={{
                translateY: translateY,
                background: 'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1))',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                border: '1px solid rgba(255,255,255,0.18)',
                fontFamily: 'var(--font-code)',
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            animate={{
                height: isExpanded ? 600 : 80,
                width: isExpanded ? 500 : 350,
            }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className={`flex cursor-pointer flex-col items-center absolute top-[40%] ${sideClass} w-[300px] h-[60px] rounded-2xl`}
        >
            <p className="text-planetGreen glow-text text-3xl mt-2 text-center text-shadow-md font-bold tracking-wider">
                {title.toUpperCase()}
            </p>
            {!isExpanded ? (
                <DotLottiePlayer ref={dotLottieRef} src={"/lottie/click.lottie"} className="h-5 w-5 mt-2"/>
            ) : (
                <div className="w-full h-full overflow-auto">
                    {/* Only show the ul after the card has fully expanded */}
                    {hasExpanded && (
                        <motion.ul
                            className={`flex flex-col gap-4 p-4`}
                            initial={{opacity: 0, x: side === 'left' ? -50 : 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                        >
                            {technologies.map((item: Technology, index: number) => (
                                <motion.li
                                    key={index}
                                    className={`p-3 rounded-lg h-auto flex gap-4 ${side === 'left' ? 'bg-gradient-to-r flex-row' : 'bg-gradient-to-l flex-row-reverse'} from-planetGreen via-lightCoral to-color-7 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: index * 0.1}} // Staggered animations
                                >
                                    {/* Technology Logo */}
                                    <div
                                        className="w-[3rem] h-[3rem] bg-n-8 rounded-xl flex-shrink-0 flex items-center justify-center">
                                        <Image className="m-auto" width={24} height={24} src={item.logo}
                                               alt={item.name}/>
                                    </div>

                                    {/* Technology Details */}
                                    <div className="flex flex-col">
                                        <h3 className={`text-darkModeGray font-bold text-lg ${side === 'left' ? 'text-start' : 'text-end'}`}>{item.name}</h3>
                                        <Link
                                            className={`text-sm text-[#4B0082] hover:text-planetGreen hover:underline ${side === 'left' ? 'text-start' : 'text-end'}`}
                                            href={item.link}>{item.link}</Link>
                                        <p className={`text-sm text-darkModeGray font-semibold mt-1 ${side === 'left' ? 'text-start' : 'text-end'}`}>{item.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </div>
            )}
        </motion.div>
    );
};

export default TechnologyCard;
