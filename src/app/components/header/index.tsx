'use client'

import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export function Header() {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "CATÁLOGO", path: "/catalogo" },
    ];

    return (
        <header className="absolute left-0 w-full h-20 flex items-center justify-between px-6 md:px-20 py-4 bg-background border-b border-black z-50">
            <Link href="/" className="flex items-center text-2xl">
                <Image src="icon.png" alt="Portal Gun" className="h-8 mr-3 mb-1" />
                <span className="text-primary font-extrabold">PortalGun</span>
                <span className="text-secundary font-normal">Store</span>
            </Link>
            <nav className={`md:flex items-center space-x-8 md:space-x-12 text-secundary text-base font-normal 
                ${openMenu ? "block absolute top-20 right-0 w-full transform transition-all duration-300 ease-in-out bg-background shadow-md p-4" : "hidden"} `}>
                {navLinks.map((link) => (
                    <Link key={link.path} href={link.path} className="relative group hover:text-gray-500 transition-all duration-300">
                        {link.name}
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform ${
                            pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}></span>
                    </Link>
                ))}
            </nav>
            <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <FaXmark className="h-10"/> : <FaBars className="h-10"/>}
            </button>
        </header>
    );
}
