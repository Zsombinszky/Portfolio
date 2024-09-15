'use client'
import {motion} from 'framer-motion';
import Contact from "@/app/components/Contact";
import Projects from "@/app/components/Projects";
import Hero from "@/app/components/Hero";
import Technologies from "@/app/components/Technologies";
import AboutMe from "@/app/components/AboutMe";
import TestComponent from "@/app/components/TestComponent";


export default function Home() {
    return (
        <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="flex min-h-screen flex-col items-center justify-between"
        >
            <Hero/>
            <Technologies/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </motion.main>
    );
}
