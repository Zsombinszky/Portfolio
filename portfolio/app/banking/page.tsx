'use client'

import {motion, useScroll, useTransform, MotionValue} from 'framer-motion';
import React, {useEffect, useRef} from 'react';
import Lenis from 'lenis';
import {BankingHero} from "@/app/components/BankingHero";
import BankingVideo from "@/app/components/BankingVideo";

const BankingPage: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main ref={container} className="relative bg-gray-200 h-[200vh]">
            <Section1 scrollYProgress={scrollYProgress}/>
            <Section2 scrollYProgress={scrollYProgress}/>
        </main>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div
            style={{scale, rotate}}
            className="sticky top-0 h-screen bg-[#C72626] flex items-center justify-center"
        >
            <BankingHero/>
        </motion.div>
    );
};

const Section2: React.FC<SectionProps> = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

    return (
        <motion.div
            style={{scale, rotate}}
            className="relative h-screen"
        >
            <BankingVideo/>
        </motion.div>
    );
};

export default BankingPage;
