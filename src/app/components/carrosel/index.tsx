'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "../box";

interface Product {
    name: string;
    img: string;
}

interface CarroselProps {
    data: Product[];
}

export function Carrosel({ data }: CarroselProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerMode: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="mx-8 md:mx-16 xl:mx-28 mb-6">
            {data.map((item, index) => (
                <div key={index} className="bg-zinc-950 p-5">
                <div className="h-[275px] bg-gray-600 p-5 rounded-xl border-2 border-transparent shadow-lg hover:border-primary transition-all duration-300 flex flex-col">
                    <div className="flex-auto flex items-center justify-center bg-white rounded-xl p-4">
                        <p className="text-center">{item.name}</p>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg p-4 mt-2">
                        <p className="text-gray-600 text-sm">{item.name}</p>
                    </div>
                </div>
            </div>
            
            ))}
        </Slider>   
    );
}
