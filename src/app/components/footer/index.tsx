import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export function Footer() {
    return (
        <div className="bg-zinc-950 text-sm text-white text-center py-10 px-6 md:px-20 md:text-end sticky w-full top-full">
            <div className="flex justify-center md:justify-end gap-2 mb-4">
                <Link id='linkedin icon' href='https://www.linkedin.com/in/gustavomaiajesus/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-6 w-6 hover:text-primary transition-all duration-500"/>
                </Link>
                <Link href='https://www.instagram.com/gustavsmaia/' target="_blank" rel="noopener noreferrer">
                    <FaInstagram id='instagram icon' className="h-6 w-6 hover:text-primary transition-all duration-500"/>
                </Link>
            </div>
            <p>© Nenhum direito reservado</p>
            <p>Não me processa, [Adult Swin]</p>
        </div>
    );
}