"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Dumbbell, BookOpen, Users, Target } from "lucide-react";

const modules = [
    {
        icon: Dumbbell,
        title: "Physical Fitness Training",
        desc: "Structured drills, endurance building, and physical conditioning programs.",
    },
    {
        icon: BookOpen,
        title: "Classroom Training",
        desc: "Security laws, PSARA compliance, surveillance systems & emergency protocols.",
    },
    {
        icon: Users,
        title: "On-The-Job Training",
        desc: "Practical exposure under supervision to ensure operational discipline.",
    },
    {
        icon: Target,
        title: "Crisis Management",
        desc: "Fire safety, evacuation procedures, and real-time emergency response training.",
    },
];

export default function Training() {
    return (
        <section
            id="training"
            className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-slate-950 text-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/30 blur-[120px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl font-extrabold mb-6">
                        Security{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                            Training Institute
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        A trained security personnel is an asset to any organization.
                        Our scientifically designed training programs comply with PSARA
                        standards and modern business requirements to ensure excellence,
                        discipline, and crisis preparedness.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <Image
                            src="/training.png"
                            alt="Security Training"
                            width={700}
                            height={600}
                            className="rounded-3xl shadow-2xl object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute -bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold text-blue-300">
                                PSARA Compliant
                            </h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Fully aligned with regulatory and operational standards.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-8">
                            Empowering Guards To Handle Routine & Crisis Situations
                        </h3>

                        <p className="text-gray-300 leading-8 mb-6">
                            Our centrally structured training approach equips security
                            personnel with physical readiness, classroom knowledge,
                            operational awareness, and crisis management skills.
                        </p>

                        <p className="text-gray-300 leading-8 mb-10">
                            The aim of our program is to make security guards self-reliant,
                            disciplined, and confident in handling day-to-day responsibilities
                            while providing immediate assistance during emergencies.
                        </p>

                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 font-semibold hover:scale-105 transition duration-300 shadow-lg">
                            Learn More →
                        </button>
                    </motion.div>
                </div>

                {/* Training Modules */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {modules.map((module, i) => {
                        const Icon = module.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:shadow-blue-500/20 hover:shadow-2xl transition duration-500"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 group-hover:scale-110 transition duration-500">
                                        <Icon size={28} />
                                    </div>
                                </div>

                                <h4 className="text-xl font-semibold mb-4 text-center group-hover:text-blue-400 transition">
                                    {module.title}
                                </h4>

                                <p className="text-gray-400 text-center leading-7">
                                    {module.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
