'use client'

import { useState } from "react";
import { Modal } from "../modal";
import Image from "next/image";

interface PortalGun {
  id: number;
  name: string;
  img: string;
  description: string;
}

export function Box({ data }: { data: PortalGun }) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="h-[275px] w-[300px] bg-neutral-800 p-5 rounded-xl border-2 border-transparent 
          shadow-lg hover:border-primary transition-all duration-500"
      >
        <div className="h-[170px] relative bg-white rounded-xl overflow-hidden">
          <Image
            src={data.img}
            alt={data.name}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-xl p-4"
          />
        </div>
        <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
          <p className="text-primary font-bold text-sm">{data.name}</p>
        </div>
      </button>

      {modalIsOpen && (
        <Modal
          data={data}
          isOpen={modalIsOpen}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
}
