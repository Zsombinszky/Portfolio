'use client';
import React, {useState} from "react";
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition} from "framer-motion";
import FeatureTab from "./FeatureTab";
import {tabs} from "@/constants";
import productImage from '@/public/projects/banking/images/homepage.png';

const FeatureTabs: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
    const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
    const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

    const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
    const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

    const handleSelectTab = (index: number) => {
        setSelectedTab(index);
        const animateOptions: ValueAnimationTransition = {
            duration: 2,
            ease: "easeInOut",
        };

        animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX], animateOptions);
        animate(backgroundPositionX, [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX], animateOptions);
        animate(backgroundPositionY, [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY], animateOptions);
    };

    return (
        <div className="bg-black/50 ~p-3/4 ~mx-4/6 rounded-xl">
            <div className="flex ~gap-3/4">
                {tabs.map((tab, index) => (
                    <FeatureTab
                        {...tab}
                        selected={selectedTab === index}
                        onClick={() => handleSelectTab(index)}
                        key={tab.title}
                    />
                ))}
            </div>
            <div className="border bg-white/60 ~mt-3/4 border-white/20 p-2.5 rounded-xl">
                <motion.div
                    className="aspect-video bg-cover border border-white/20 rounded-lg"
                    style={{
                        backgroundPosition,
                        backgroundSize,
                        backgroundImage: `url(${productImage.src})`,
                    }}
                ></motion.div>
            </div>
        </div>
    );
};

export default FeatureTabs;
