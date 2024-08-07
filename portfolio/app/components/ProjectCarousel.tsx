'use client';

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
    image: string;
    alt: string;
}

const ProjectCarousel: React.FC<{ images: Image[] }> = ({images}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="m-auto max-w-800px">
                        <img src={image.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover"/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default ProjectCarousel;
