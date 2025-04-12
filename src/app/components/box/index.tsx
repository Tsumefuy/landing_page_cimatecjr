'use client'

import { useState } from "react";
import { Modal } from "../modal";

interface PortalGunData {
    id: number;
    name: string;
    img: string;
    description: string;
}

interface BoxProps {
    data: PortalGunData;
}

export function Box({ data }: BoxProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return(
        <>
            <button 
            type="button"
            onClick={handleOpenModal}
            className="h-[275px] w-[300px] bg-neutral-800 p-5 rounded-xl border-2 border-transparent 
                shadow-lg hover:border-primary transition-all duration-500"
            >
                <div className="h-[170px] flex flex-col bg-white rounded-xl justify-center text-center">
                    <p>{data.name}</p>
                </div>
                <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">{data.name}</p>
                </div>
            </button>
            <Modal isOpen={modalIsOpen} handleClose={handleOpenModal}  />
        </>
        
    )
}