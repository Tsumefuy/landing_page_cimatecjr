'use client'

import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "CATÁLOGO", path: "/catalogo" },
    ];

    return (
        <header className="relative top-0 left-0 w-full h-20 flex justify-between items-center px-6 md:px-20 py-6 bg-white border-b border-black z-50">
            <a href="/" className="text-2xl">
                <span className="text-primary font-extrabold">PortalGun</span>
                <span className="text-secundary font-normal">Store</span>
            </a>

            <a href="/" className="absolute left-1/2 transform -translate-x-1/2">
                <img src="icon.png" alt="Portal Gun" className="h-10" />
            </a>

            <nav className="flex space-x-6 md:space-x-12 text-secundary text-base font-normal">
                {navLinks.map((link) => (
                    <a key={link.path} href={link.path} className="relative group">
                        {link.name}
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform ${
                            pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}></span>
                    </a>
                ))}
            </nav>
        </header>
    );
}
