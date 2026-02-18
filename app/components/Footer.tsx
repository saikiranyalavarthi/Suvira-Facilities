"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white pt-20 pb-8 overflow-hidden">

            {/* Top Glow Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-red-500 to-blue-500"></div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Main Grid */}
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logosfpl.png"
                                alt="Suvira Facilities"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                                Suvira Facilities
                            </h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-6">
                            Delivering professional security, manpower sourcing, and facility
                            management solutions across Hyderabad and Telangana since 2020.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            {["Home", "About", "Services", "Training", "Contact"].map(
                                (item, i) => (
                                    <li key={i}>
                                        <Link
                                            href="#"
                                            className="hover:text-blue-400 transition duration-300"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                "Corporate Security",
                                "Industrial Security",
                                "Residential Security",
                                "Facility Management",
                                "Manpower Recruitment",
                            ].map((service, i) => (
                                <li key={i} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>

                        <div className="space-y-4 text-gray-400 text-sm">

                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-400 mt-1" />
                                <span>+91-9290934388</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-400 mt-1" />
                                <span>sfacilities5@gmail.com</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-400 mt-1" />
                                <span>
                                    6/146, Anish Residency, KTR Colony,
                                    Nizampet, Hyderabad – 500090
                                </span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r from-blue-600 to-red-600 transition duration-300 cursor-pointer"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Suvira Facilities Pvt Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
