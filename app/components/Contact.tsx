"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get in touch with Suvira Facilities for reliable security and manpower solutions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">

          {/* Phone */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center transition duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white group-hover:scale-110 transition duration-500">
                <Phone size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-400">+91-9290934388</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center transition duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white group-hover:scale-110 transition duration-500">
                <Mail size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
            <p className="text-gray-400">sfacilities5@gmail.com</p>
          </motion.div>

          {/* Address */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center transition duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-red-600 text-white group-hover:scale-110 transition duration-500">
                <MapPin size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
            <p className="text-gray-400 text-sm leading-6">
              6/146, Anish Residency, Flat No.102, KTR Colony, Nizampet,
              Hyderabad – 500090
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Send Us a Message
          </h3>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 outline-none text-white"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 outline-none text-white md:col-span-2"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-500 outline-none text-white md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
