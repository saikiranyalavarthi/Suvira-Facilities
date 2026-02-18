"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Security Services", href: "#security" },
    { name: "Housekeeping Services", href: "#housekeeping" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                        ? "bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 shadow-2xl"
                        : "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800"
                    }`}
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logosfpl.png"
                            alt="Suvira Facilities"
                            width={55}
                            height={55}
                            className="transition duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent tracking-wide">
                            Suvira Facilities
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="relative text-white font-medium tracking-wide group"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="#contact"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-500/40 transition duration-300"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-white"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 right-0 h-full w-[85%] bg-gradient-to-b from-slate-950 to-blue-950 shadow-2xl transform transition-transform duration-500 z-50 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
                        <span className="font-bold text-white text-lg">Menu</span>
                        <X
                            size={26}
                            onClick={() => setOpen(false)}
                            className="cursor-pointer text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8 px-8 py-12">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-white text-lg font-medium hover:text-blue-400 transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-6 px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-red-600 text-center font-semibold shadow-lg"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
