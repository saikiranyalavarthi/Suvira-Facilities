"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Phone, Award } from "lucide-react";

export default function FounderSection() {
    return (
        <section className="relative py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

            {/* Professional Background Glow */}
            <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-800/15 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/10 blur-[160px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Founder & Managing Director
                    </h2>

                    <div className="w-24 h-[3px] bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6"></div>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Discipline. Integrity. Strategic Leadership.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-24 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="relative group flex justify-center"
                    >
                        <div className="relative">
                            <Image
                                src="/chairmen.png"
                                alt="Vijaya Raju Borra - Founder"
                                width={450}
                                height={550}
                                className="rounded-3xl shadow-2xl object-cover border border-white/10 transition duration-700 group-hover:scale-105"
                            />

                            {/* Badge */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-blue-500/30 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
                                <Award size={18} className="text-blue-400" />
                                <span className="text-sm font-semibold text-blue-300">
                                    20+ Years Indian Army Service
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
                            VIJAYA RAJU BORRA
                        </h3>

                        <p className="text-gray-500 uppercase tracking-wider text-sm mb-8">
                            Founder & Managing Director – Suvira Facilities Pvt. Ltd.
                        </p>

                        <p className="text-gray-300 leading-8 mb-6">
                            After serving over two decades in the Indian Army with distinction,
                            Mr. Borra transitioned into the corporate sector to establish
                            Suvira Facilities Pvt. Ltd., bringing military-grade discipline,
                            strategic foresight, and operational excellence into the
                            security and manpower industry.
                        </p>

                        <p className="text-gray-300 leading-8 mb-6">
                            Under his leadership, Suvira Facilities has emerged as a trusted
                            provider of Security Services, Integrated Facility Management,
                            and Manpower Solutions across Telangana.
                        </p>

                        <p className="text-gray-300 leading-8 mb-8">
                            Beyond business, he actively leads Suvira Seva Samithi and
                            charitable initiatives dedicated to rural development, social
                            welfare, and empowering underprivileged communities — integrating
                            corporate success with meaningful social responsibility.
                        </p>

                        {/* CONTACT */}
                        <div className="flex flex-wrap gap-8 text-blue-400">
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                8099998832
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                9290934388
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* STRENGTH CARDS */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-12 mt-32"
                >
                    {[
                        "Military Discipline & Strategic Planning",
                        "20+ Years Leadership & Command Experience",
                        "Security Excellence & Social Welfare Commitment",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-slate-900/60 backdrop-blur-xl border border-white/5 p-10 rounded-2xl hover:border-blue-500/30 hover:-translate-y-3 transition duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <ShieldCheck size={22} className="text-blue-400" />
                                <h4 className="font-semibold text-lg">{item}</h4>
                            </div>
                            <div className="h-[2px] bg-gradient-to-r from-blue-500 to-red-500 w-0 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
