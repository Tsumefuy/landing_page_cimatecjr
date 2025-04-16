'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Modal } from "../modal";
import Image from "next/image";
import { PortalGun } from "@/app/actions";


export function Carrosel({ 
  data
}: {
  data: PortalGun[]
}) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortalGun | null>(null);

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

  const handleOpenModal = (item: PortalGun) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Slider {...settings} className="mx-8 md:mx-16 xl:mx-28 mb-6">
        {data.map((item, index) => (
          <div key={index} className="bg-zinc-950 p-5">
            <div
              className="h-[275px] bg-neutral-800 p-5 rounded-xl border-2 border-transparent shadow-lg hover:border-primary transition-all duration-500 flex flex-col"
              onClick={() => handleOpenModal(item)}
            >
              <div className="h-[200px] flex flex-col justify-center items-center bg-white rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100} 
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-1.5 mt-2">
                <p className="text-primary font-bold text-sm">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedItem && (
        <Modal
          data={selectedItem}
          isOpen={modalIsOpen}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
}
