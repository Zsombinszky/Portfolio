import {motion} from 'framer-motion';
import {MouseParallax} from 'react-just-parallax';
import {BackgroundShapesProps} from "@/types";
import {DotLottiePlayer} from "@dotlottie/react-player";

const BackgroundShapes = ({parallaxRef}: BackgroundShapesProps) => {

    return (
        <div className="absolute w-full h-full pointer-events-none">
            {/* Moving background colored circle balls */}
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>

                {/*UFO*/}
                <DotLottiePlayer autoplay loop src={"/lottie/arrow3.json"} className="h-12 w-12 mb-4 absolute top-[21%] right-[32.8%]"/>

                {/*UFO2*/}
                <DotLottiePlayer autoplay  speed={1.4} id="ufoAnimation" src={"/lottie/arrow4.json"} className="h-14 w-14 mb-4 absolute top-[30.6%] left-[19.2%]"/>

                {/*Green planet*/}
                <div className="-rotate-12 absolute top-1/4 right-1/3 pointer-events-none">
                    <div
                        className="w-7 h-7 bg-gradient-to-tr from-[#23F0C7] to-[#000000] rounded-full drop-shadow-[10px_-10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Purple planet*/}
                <div className="absolute top-[35%] left-[20%] pointer-events-none">
                    <div
                        className="w-6 h-6 bg-gradient-to-tl from-[#F433AB] to-[#000000] rounded-full drop-shadow-[-10px_-10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Yellow planet*/}
                <div className="absolute bottom-[25%] left-[45%] pointer-events-none">
                    <div
                        className="w-6 h-6 bg-gradient-to-b from-[#FBB02D] via-[#FA8334] to-[#000000] rounded-full drop-shadow-[0px_10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Small Green planet*/}
                <div className="-rotate-12 absolute top-[12%] right-1/4 pointer-events-none">
                    <div
                        className="w-3 h-3 bg-gradient-to-tr from-[#25907C] to-[#000000] rounded-full drop-shadow-[10px_-10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Small Purple planet*/}
                <div className="absolute top-[20%] left-[10%] pointer-events-none">
                    <div
                        className="w-4 h-4 bg-gradient-to-tl from-[#AC6AFF] to-[#000000] rounded-full drop-shadow-[-10px_-10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Small Yellow planet*/}
                <div className="absolute rotate-30 bottom-[15%] left-[20%] pointer-events-none">
                    <div
                        className="w-5 h-5 bg-gradient-to-b from-[#FB6107] to-[#000000] rounded-full drop-shadow-[-10px_10px_8px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/*Twinkling stars*/}
                <motion.div className="absolute top-1/4 right-1/3 w-[3px] h-[3px] bg-color-4 rounded-full animate-pulse"
                            animate={{x: -895, y: 590}}
                            transition={{
                                duration: 16,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                />

                <motion.div
                    className="absolute bottom-[25%] left-[46%] w-[3px] h-[3px] bg-color-2 rounded-full animate-pulse"
                    animate={{x: -695, y: -543}}
                    transition={{
                        duration: 12,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                <motion.div
                    className="absolute top-[35%] left-[20%] w-[3px] h-[3px] bg-color-6 rounded-full animate-pulse"
                    animate={{x: 1052, y: -230}}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </MouseParallax>
        </div>
    );
};

export default BackgroundShapes;
