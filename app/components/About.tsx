"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white overflow-hidden"
        >
            {/* Strong Premium Glow */}
            <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-blue-600/30 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/30 blur-[150px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
                        About{" "}
                        <span className="relative inline-block group">
                            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                                Suvira Facilities
                            </span>

                            {/* Premium underline glow */}
                            <span className="absolute left-0 -bottom-3 h-[4px] w-0 bg-gradient-to-r from-blue-400 to-red-500 transition-all duration-700 group-hover:w-full rounded-full shadow-lg shadow-blue-500/50"></span>
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Delivering disciplined security personnel, structured manpower
                        sourcing, and reliable facility management solutions across
                        Hyderabad and Telangana since 2020.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <Image
                            src="/About.jpg"
                            alt="Suvira Facilities Team"
                            width={700}
                            height={600}
                            className="rounded-3xl shadow-2xl object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Floating Premium Card */}
                        <div className="absolute -bottom-12 left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                5+ Years Excellence
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Corporate • Industrial • Residential Security Solutions
                            </p>
                        </div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-8 leading-snug">
                            Building Trusted Security Partnerships With Discipline & Integrity
                        </h3>

                        <p className="text-gray-300 leading-8 mb-6">
                            Founded in 2020, Suvira Facilities Private Limited has grown into
                            a trusted manpower and security services provider in Hyderabad.
                            Our structured recruitment process, compliance standards, and
                            disciplined supervision ensure complete operational reliability.
                        </p>

                        <p className="text-gray-300 leading-8 mb-12">
                            We support corporate offices, manufacturing units, gated
                            communities, and commercial establishments with tailored
                            workforce solutions designed for safety, compliance, and
                            productivity.
                        </p>

                        {/* Premium Feature Boxes */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Background Verified Staff",
                                "24/7 Operational Monitoring",
                                "Customized Manpower Deployment",
                                "Compliance & Safety Focused",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-blue-400 transition duration-500 hover:-translate-y-2"
                                >
                                    <p className="text-blue-300 font-semibold">✔ {item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* PREMIUM STATS */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-10 mt-32"
                >
                    {[
                        { number: "150+", label: "Trained Personnel" },
                        { number: "100+", label: "Corporate Clients" },
                        { number: "5+", label: "Years Experience" },
                        { number: "24/7", label: "Support & Supervision" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:shadow-blue-500/30 hover:shadow-2xl transition duration-500"
                        >
                            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                                {stat.number}
                            </h3>
                            <p className="text-gray-400 mt-4">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
