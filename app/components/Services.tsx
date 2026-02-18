"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Corporate Security Guards",
        image: "/services/corporate.jpg",
        desc: "Professional and disciplined guards ensuring corporate safety and compliance.",
    },
    {
        title: "Industrial Security Services",
        image: "/services/industrial.jpg",
        desc: "24/7 protection for factories, warehouses, and manufacturing units.",
    },
    {
        title: "Residential Security",
        image: "/services/residential.jpg",
        desc: "Secure gated communities and residential complexes with trained staff.",
    },
    {
        title: "Event Security Management",
        image: "/services/event.jpg",
        desc: "Crowd control and event protection handled with precision and discipline.",
    },
    {
        title: "Facility Management",
        image: "/services/facility.jpg",
        desc: "Integrated facility services ensuring smooth operational performance.",
    },
    {
        title: "Manpower Recruitment",
        image: "/services/manpower.jpg",
        desc: "Customized staffing solutions tailored to your industry requirements.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-28 bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/30 blur-[120px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-extrabold mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                            Security Services
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        Comprehensive security and manpower solutions designed for safety,
                        compliance, and operational excellence.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-3 transition duration-500 shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 relative">
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-7 mb-6">
                                    {service.desc}
                                </p>

                                {/* Learn More Button */}
                                <button className="relative inline-block text-sm font-semibold text-white">
                                    <span className="relative z-10">Learn More →</span>
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-red-500 transition-all duration-500 group-hover:w-full"></span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
