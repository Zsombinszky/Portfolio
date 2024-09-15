'use client';
import React, {useEffect, useRef} from "react";
import {DotLottieCommonPlayer, DotLottiePlayer} from "@dotlottie/react-player";
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition} from "framer-motion";
import {FeatureTabProps} from "@/types";

const FeatureTab = (props: FeatureTabProps) => {
    const tabRef = useRef<HTMLDivElement>(null);
    const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
    const xPercentage = useMotionValue(0);
    const yPercentage = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

    useEffect(() => {
        if (!tabRef.current || !props.selected) return;

        xPercentage.set(0);
        yPercentage.set(0);

        const {height, width} = tabRef.current.getBoundingClientRect();
        const circumference = height * 2 + width * 2;
        const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];
        const options: ValueAnimationTransition = {
            times,
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
        };
        animate(xPercentage, [0, 100, 100, 0, 0], options);
        animate(yPercentage, [0, 0, 100, 100, 0], options);
    }, [props.selected]);

    const handleTabHover = () => {
        if (dotLottieRef.current === null) return;
        dotLottieRef.current.seek(0);
        dotLottieRef.current.play();
    };

    return (
        <div
            ref={tabRef}
            onMouseEnter={handleTabHover}
            className="border border-white/30 bg-white/60 flex p-2.5 rounded-xl gap-2.5 items-center relative"
            onClick={props.onClick}
        >
            {props.selected && (
                <motion.div
                    style={{maskImage}}
                    className="absolute inset-0 bg-blue-400/15 -m-px border border-color-8 rounded-xl"
                ></motion.div>
            )}
            <div className="h-12 w-12 border border-white rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer ref={dotLottieRef} src={props.icon} className="h-5 w-5" autoplay/>
            </div>
            <div className="font-semibold text-darkModeGray ">{props.title}</div>
            {props.isNew && (
                <div
                    className="text-sm absolute left-[45%] -top-4 rounded-full px-2 py-2.5 bg-color-8 text-black font-semibold">new</div>
            )}
        </div>
    );
};

export default FeatureTab;
