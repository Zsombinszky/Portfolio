import React from 'react';
import { motion } from 'framer-motion';

const AnimatedName = ({myName}: { myName: string }) => {
    return (
        <motion.div
            // Initial state of the animation
            initial={{
                translateX: '-120%',  // Starting X position of the text
                translateY: '0%',     // Starting Y position of the text
                scale: 1,             // Starting scale of the text
                rotate: 0,            // Starting rotation of the text
                backgroundImage: 'linear-gradient(90deg, #ff7e5f, #feb47b)',  // Initial gradient color
            }}
            animate={{
                translateX: ['-120%', '35%', '35%', '115%'],  // X positions during the animation (start to end)
                translateY: ['0%', '0%', '0%', '-80%'],       // Y positions during the animation (start to end)
                scale: [1, 0.8, 0.8, 0.3],                     // Scale values during the animation (start to end)
                rotate: [0, 0, 0, -50],                       // Rotation values during the animation (start to end)
                backgroundImage: [
                    'linear-gradient(90deg, #ff7e5f, #feb47b)',  // Gradient color during the initial phase
                    'linear-gradient(90deg, #ff7e5f, #feb47b)',  // Gradient color during the scaling down
                    'linear-gradient(90deg, #ff7e5f, #feb47b)',  // Gradient color during the scaling down
                    'linear-gradient(90deg, #7b2ff7, #23F0C7)',  // Gradient color during the final phase
                ],
            }}
            transition={{
                duration: 6,                // Total duration of the animation in seconds
                ease: [0.42, 0, 0.58, 1],   // Easing function for the animation
                times: [0, 0.3, 0.8, 1],    // Times at which the animation should reach the specified values
                delay: 6,                   // Delay before the animation starts (in seconds)
            }}
            className="text-9xl font-bold absolute bottom-0 left-0 whitespace-nowrap"
            style={{
                WebkitBackgroundClip: 'text', // Ensures the gradient only fills the text
                color: 'transparent',          // Makes the text color transparent to show gradient
            }}
        >
            <motion.p>{myName}</motion.p>
        </motion.div>
    );
};

export default AnimatedName;
