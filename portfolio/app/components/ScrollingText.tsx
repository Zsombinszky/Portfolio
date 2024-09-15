import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollingTextProps {
    text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
    const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');

    // Handle scroll direction change
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrollDirection(scrollY > 100 ? 'right' : 'left');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative overflow-hidden w-full h-16 flex items-center">
            <motion.div
                className="absolute whitespace-nowrap"
                animate={{
                    x: scrollDirection === 'left'
                        ? ['100%', '-100%']
                        : ['-100%', '100%'],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
            >
                {text}
            </motion.div>
        </div>
    );
};

export default ScrollingText;
