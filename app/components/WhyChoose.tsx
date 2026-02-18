"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Handshake, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trained & Verified Staff",
    desc: "Rigorous background verification and structured training programs ensure disciplined personnel.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring & Support",
    desc: "Round-the-clock operational supervision and rapid response support.",
  },
  {
    icon: Handshake,
    title: "Trusted Corporate Partner",
    desc: "Building long-term partnerships through reliability, compliance, and excellence.",
  },
  {
    icon: Users,
    title: "Customized Staffing Solutions",
    desc: "Tailored manpower deployment to meet industry-specific requirements.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-slate-950 to-blue-950 text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering reliability, discipline, and excellence in every security and manpower solution.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition duration-500"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white group-hover:scale-110 transition duration-500">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-blue-400 transition">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center leading-7">
                  {feature.desc}
                </p>

                {/* Bottom Hover Line */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-400 to-red-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
