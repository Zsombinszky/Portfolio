import React from 'react'
import {motion} from "framer-motion";
import {AnimatedHeroText2Props} from "@/types";

const AnimatedHeroText1 = ({words2, words}: AnimatedHeroText2Props) => {
    return (
        <motion.div
            className="text-lightGray glow-text text-center ~mt-8/12 ~text-2xl/4xl font-medium  ~mb-4/8"
        >
            <motion.div className="bg-gradient-to-r from-transparent via-black/50  to-transparent"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            duration: 4,
                            ease: 'easeIn',
                            delay: 3
                        }}
            >
                {words2.map((word: string, index: number) => (
                    <React.Fragment key={index}>
                        <motion.span
                            className="inline-block"
                            key={index}
                            initial={{color: '#a3a3a3', opacity: 0}}
                            animate={{color: '#f0f0f0', opacity: 1}}
                            transition={{
                                duration: 0.9,
                                delay: 1 + words.length * 0.18 + index * 0.18,
                                ease: 'easeInOut',
                            }}
                        >
                            {word}
                        </motion.span>
                        {/* Add line breaks manually if needed */}
                        {index === 6 && <br/>}
                        {/* Add a space after each word */}
                        {' '}
                    </React.Fragment>
                ))}
            </motion.div>
        </motion.div>
    )
}
export default AnimatedHeroText1
