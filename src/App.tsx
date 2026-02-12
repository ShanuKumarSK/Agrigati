"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ================= SAFE ANIMATION CONFIG ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      // ease: "easeOut",
    },
  },
};

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="relative bg-[#0b1120] text-white overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[150px]" />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
        >
          India’s Agri Digital Backbone
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg text-gray-300"
        >
          Agrigati unifies farmland discovery, AI advisory, mandi intelligence,
          and agricultural services into one powerful ecosystem designed to
          increase farmer income and bring transparency to rural markets.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-6 flex-wrap justify-center"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold shadow-xl hover:scale-105 transition">
            Explore Platform
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-4 border border-green-400 rounded-full hover:bg-green-500/10 transition"
          >
            Download App
          </button>
        </motion.div>
      </section>

      {/* ================= PLATFORM MODULES ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 px-6 md:px-20 relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-20">
          Complete Agriculture Ecosystem
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              title: "Smart Land Marketplace",
              desc: "Geo-tagged farmland listings with transparent pricing, digital booking and owner verification.",
            },
            {
              title: "AI Crop Advisory",
              desc: "Image-based crop diagnosis, multilingual voice interaction and localized farming guidance.",
            },
            {
              title: "Mandi Intelligence",
              desc: "Real-time crop prices, demand analytics and historical market trends across India.",
            },
            {
              title: "Service Network",
              desc: "Machinery rentals, fertilizers, seeds, cold storage and finance under one platform.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= IMPACT STATS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-r from-green-900 to-emerald-800 text-center"
      >
        <h2 className="text-4xl font-bold mb-20">Impact & Scale</h2>

        <div className="grid md:grid-cols-4 gap-16">
          {[
            { value: "10K+", label: "Farmers Onboarded" },
            { value: "5K+", label: "Land Listings" },
            { value: "120+", label: "Verified Service Providers" },
            { value: "24/7", label: "AI Advisory Engine" },
          ].map((metric, i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold">{metric.value}</h3>
              <p className="mt-4 text-green-200">{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= INVESTOR SECTION ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 px-6 md:px-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-10">
          Built for Scale & Impact
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
          Agrigati addresses India’s fragmented agricultural infrastructure by
          integrating land access, advisory intelligence and service logistics
          into a unified platform. Our scalable AI engine and verified service
          network ensure farmer-first innovation at national scale.
        </p>
      </motion.section>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Transforming Rural India Through Technology
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Join Agrigati and become part of the next-generation agriculture
          movement.
        </p>

        <button className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Agrigati — The Future of Agriculture
      </footer>

      {/* ================= DOWNLOAD MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center max-w-md shadow-2xl"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
              Coming Soon 🚀
            </h3>

            <p className="text-gray-300 mb-8">
              Agrigati mobile app is launching soon on Android & iOS.
              Stay tuned for smarter agriculture.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold hover:scale-105 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
