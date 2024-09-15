import React, { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, Pagination, Controller } from 'swiper/modules';
import Image from 'next/image';
import { CarouselProps, ImageType } from '@/types';
import { bankingProject } from '@/constants';
import Button from '@/app/components/Button';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

const Carousel = ({ images }: CarouselProps) => {
    // Type the controlledSwiper state as SwiperClass or null
    const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className="flex p-4 gap-4 flex-col items-center justify-center">
            {/* Swiper for images */}
            <div className="flex gap-12">
                <Swiper
                    modules={[Autoplay, EffectCube, Pagination, Controller]}
                    pagination={true}
                    slidesPerView={1}
                    direction={'vertical'}
                    effect={'cube'}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="w-[960px] h-[540px]"
                    controller={{ control: controlledSwiper }}
                >
                    {images.map((image: ImageType, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full">
                                <Image src={image.image} alt={image.alt} fill className="object-center rounded-3xl" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Swiper for description */}

                <div className="flex flex-col items-center space-y-2">
                    <div className="text-center">
                        <h1 className="text-color-8 font-semibold glow-text text-5xl mb-6">{bankingProject.title}</h1>
                        <p className="text-lightGray font-medium glow-text text-lg max-w-2xl mx-auto mb-20">{bankingProject.description}</p>
                    </div>
                    <Swiper
                        modules={[Autoplay, Controller]}
                        slidesPerView={1}
                        direction={'horizontal'}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="w-[640px] h-[100px]"
                        onSwiper={(swiper) => setControlledSwiper(swiper)} // Add the correct type here
                    >
                        {images.map((image: ImageType, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="flex relative text-center w-full">
                                    <p className="text-lightGray font-medium glow-text text-2xl">{image.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* DownArrow Animation */}
                    <DotLottiePlayer autoplay loop speed={0.8} src={"/lottie/arrow2.json"} className="h-16 w-16 mb-4" />
                    {/* Call-to-Action Button */}
                    <div className="mt-12">
                        <Button href={"/banking"}>See Details</Button>
                    </div>
                </div>
            </div>
            <div className="flex mt-20 max-w-[800px] [mask-image:linear-gradient(to_right,transparent,black,transparent)] overflow-hidden">
                <motion.ul
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                    className="flex gap-12 flex-none">
                    {[...bankingProject.technologies, ...bankingProject.technologies].map((app, index) => (
                        <li key={index} className="flex flex-col gap-2 items-center justify-end">
                            <div
                                className="flex bg-n-8 border border-n-1/15 rounded-xl h-12 w-12 items-center justify-center">
                                <Image src={app.logo} alt={app.name} width={32} height={32} />
                            </div>
                            <p className="text-lightGray font-medium glow-text">{app.name}</p>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Carousel;
