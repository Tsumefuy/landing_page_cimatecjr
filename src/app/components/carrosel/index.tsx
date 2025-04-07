'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
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
        <Slider {...settings} className="mt-10 mb-10 mr-16 ml-16">
            {data.map((item, index) => (
                <div key={index} className="bg-zinc-950 p-5 rounded-xl">
                    <div className="bg-gray-500 p-5 rounded-xl border-2 border-transparent hover:border-primary transition-all duration-100">
                        <div className="flex flex-col h-[140px] md:h-[160px] bg-white rounded-xl justify-center text-center">
                            <p>{item.img}</p>
                        </div>
                        <div className="h-10 bg-white rounded-lg mt-2 flex items-center justify-center">
                            <p className="text-gray-600 text-sm">{item.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>   
    );
}
