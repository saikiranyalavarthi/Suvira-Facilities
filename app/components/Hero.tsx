"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 opacity-90"></div>

      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-20">
        <Image
          src="/hero1.jpg"
          alt="Security Guard"
          fill
          className="object-cover col-span-1 animate-pulse"
        />
        <Image
          src="/hero2.jpg"
          alt="Facility Management"
          fill
          className="object-cover col-span-1"
        />
        <Image
          src="/hero3.jpg"
          alt="Corporate Security"
          fill
          className="object-cover col-span-1 animate-pulse"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm text-blue-300 mb-4"
        >
          Trusted Since 2020
        </motion.p>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
            Suvira Facilities
          </span>
          <br />
          Private Limited
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl font-semibold text-gray-200 mb-6"
        >
          Professional Security & Facility Management Solutions
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-10"
        >
          We simplify staffing and amplify success by delivering highly trained
          security personnel, manpower recruitment, and facility management
          services across Hyderabad and Telangana. Our commitment to excellence
          ensures safety, compliance, and operational efficiency for every client.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Get Free Consultation
          </Link>

          <Link
            href="#services"
            className="px-8 py-3 rounded-full border border-white/40 backdrop-blur-md hover:bg-white/10 transition duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Floating Decorative Circle */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-600 to-red-500 rounded-full blur-3xl opacity-30"
      ></motion.div>

    </section>
  );
}
