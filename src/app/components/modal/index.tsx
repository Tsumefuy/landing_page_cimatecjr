import { FaXmark } from "react-icons/fa6";
import { BoxModal } from "../box_modal";

interface PortalGunData {
    id: number;
    name: string;
    img: string;
    description: string;
}

interface ModalProps {
    data: PortalGunData;
    isOpen: boolean;
    handleClose: () => void;
}

export function Modal({ data, isOpen, handleClose }: ModalProps) {
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}/>
            <div className="relative items-start md:flex z-10 h-full max-h-[425px] md:max-h-[325px] md:rounded-xl w-full max-w-3xl 
                md:overflow-y-auto bg-background p-6"
                >
                <BoxModal data={data}/>
                <div className="mt-4 md:ml-4 text-base text-left break-words">
                    <p>{data.description}</p>
                </div>
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-0 top-0 m-4 hover:text-primary transition-all duration-500"
                >
                    <FaXmark className="h-8 w-8"/>
                </button>
            </div>
        </div>
    )
}