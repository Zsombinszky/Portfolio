import React from 'react';
import {motion} from 'framer-motion';
import {AnimatedHeroText1Props} from '@/types';

const AnimatedHeroText1 = ({words}: AnimatedHeroText1Props) => {
    return (
        <motion.div
            className="text-xl text-lightGray glow-text text-center mt-12 md:text-2xl lg:text-4xl font-medium mb-6"
        >
            {/* Split the text into lines or sentences */}
            <motion.div className="bg-gradient-to-r from-transparent via-black/50  to-transparent"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            duration: 5,
                            ease: 'easeIn'
                        }}
            >
                {words.map((word: string, index: number) => (
                    <React.Fragment key={index}>
                        <motion.span
                            className="inline-block"
                            initial={{color: '#a3a3a3', opacity: 0}}
                            animate={{color: '#f0f0f0', opacity: 1}}
                            transition={{
                                duration: 0.9,
                                delay: 0.5 + index * 0.18,
                                ease: 'easeInOut',
                            }}
                        >
                            {word}
                        </motion.span>
                        {/* Add line breaks manually if needed */}
                        {index === 8 && <br/>}
                        {/* Add a space after each word */}
                        {' '}
                    </React.Fragment>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AnimatedHeroText1;
