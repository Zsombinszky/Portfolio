import React, {useEffect, useRef, useState} from 'react';
import CurvedTitle from "@/app/components/CurvedTitle";
import TechCircle from "@/app/components/TechCircle";
import {useScroll, useTransform} from "framer-motion";
import Lenis from "lenis";
import TechnologyCard from "@/app/components/TechnologyCard";
import {DotLottiePlayerRef, RAFTime} from "@/types";
import {BACKEND_SKILLS} from "@/constants";
import {FRONTEND_SKILLS} from "@/constants";

const Technologies = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const frontendCardRef: DotLottiePlayerRef = useRef(null);
    const backendCardRef: DotLottiePlayerRef = useRef(null);
    const [isFrontendExpanded, setIsFrontendExpanded] = useState(false);
    const [isBackendExpanded, setIsBackendExpanded] = useState(false);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const frontendTranslateY = useTransform(scrollYProgress, [0, 1], [150, -400]);
    const backendTranslateY = useTransform(scrollYProgress, [0, 1], [150, -400]);

    const handleCardHover = (cardRef: DotLottiePlayerRef) => {
        if (cardRef.current === null) return;
        cardRef.current.seek(0);
        cardRef.current.play();
    };

    const handleFrontendClick = () => {
        setIsFrontendExpanded(prev => !prev);
    };

    const handleBackendClick = () => {
        setIsBackendExpanded(prev => !prev);
    };

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: RAFTime) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <section
            id={"technologies"}
            ref={container}
            style={{backgroundImage: 'url(/backgrounds/saturn1.jpeg)'}}
            className="relative flex justify-center bg-cover overflow-hidden h-screen w-full bg-no-repeat bg-center items-center"
        >
            <TechnologyCard
                title={'Frontend'}
                translateY={frontendTranslateY}
                onClick={handleFrontendClick}
                onMouseEnter={() => handleCardHover(frontendCardRef)}
                isExpanded={isFrontendExpanded}
                dotLottieRef={frontendCardRef}
                technologies={FRONTEND_SKILLS}
                side={'left'}
            />
            <TechnologyCard
                title={'Backend'}
                translateY={backendTranslateY}
                onClick={handleBackendClick}
                onMouseEnter={() => handleCardHover(backendCardRef)}
                isExpanded={isBackendExpanded}
                dotLottieRef={backendCardRef}
                technologies={BACKEND_SKILLS}
                side={'right'}
            />
            <div className="flex flex-col items-center justify-center h-full">
                <CurvedTitle/>
                <TechCircle/>
            </div>
        </section>
    );
};

export default Technologies;
