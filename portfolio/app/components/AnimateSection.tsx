import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateSectionProps {
    children: ReactNode;
}

const AnimateSection: React.FC<AnimateSectionProps> = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateSection;
