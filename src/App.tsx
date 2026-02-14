"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // yaha apna email send logic daalo
      await new Promise((resolve) => setTimeout(resolve, 2000)); // demo delay
      alert("Message Sent Successfully 🚀");
    } catch (err) {
      console.error(err);
      alert("Failed to send ❌");
    }

    setLoading(false);
  };

  return (
    <main className="relative bg-[#0b1120] text-white overflow-x-hidden overflow-y-hidden">
      {/* ===== BACKGROUND GLOW ===== */}

      {/* ================= PREMIUM NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="AgriGati Logo" className="h-9 w-auto" />
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AgriGati
            </span>
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {["about", "features", "services", "partners", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-green-400 transition capitalize"
                >
                  {item}
                </a>
              ),
            )}

            <button
              onClick={() => setShowModal(true)}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-semibold"
            >
              Download App
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileOpen && (
          <div className="md:hidden w-full bg-black border-t border-white/10 px-6 py-6 space-y-6 text-center">
            {["about", "features", "services", "partners", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg capitalize hover:text-green-400"
                >
                  {item}
                </a>
              ),
            )}

            <button
              onClick={() => {
                setMobileOpen(false);
                setShowModal(true);
              }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold"
            >
              Download App
            </button>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          // className="absolute inset-0 w-full h-full object-cover animate-[slowZoom_20s_linear_infinite]"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/AgrigatiBannerVideo.mp4" type="video/mp4" />
        </video>
        🌑 Dark Overlay for Readability
        <div className="absolute inset-0 bg-black/60"></div>
        {/* 🌿 Content */}
        <div className="relative z-10 interface flex flex-col items-center text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Accelerating Indian Agriculture
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-3xl text-lg text-gray-200"
          >
            India’s unified digital agriculture platform integrating land, AI
            advisory, mandi intelligence and service providers.
          </motion.p>

          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-6 flex-wrap justify-center"
          >
            <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold shadow-xl hover:scale-105 transition">
              Get Started
            </button>
          </motion.div> */}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-32 px-6 md:px-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Complete Agri Ecosystem
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Agrigati integrates land access, AI intelligence, mandi analytics,
            and verified agricultural service providers into one unified digital
            platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Smart Land Marketplace",
              desc: "Geo-tagged farmland discovery, transparent leasing, owner verification and secure booking system connecting farmers directly with landowners.",
            },
            {
              title: "AI Crop Advisory",
              desc: "Image-based disease detection, voice-enabled multilingual chat, and location-aware farming recommendations powered by advanced AI.",
            },
            {
              title: "Real-Time Mandi Intelligence",
              desc: "Live mandi prices, crop demand analytics, historical trends, and smart selling insights helping farmers maximize profit.",
            },
            {
              title: "Verified Service Providers",
              desc: "Connect with trusted tractor operators, machinery rentals, fertilizer suppliers, seed distributors and cold storage facilities.",
            },
            {
              title: "Farm Logistics & Support",
              desc: "End-to-end agricultural supply chain support including transport coordination and digital service booking.",
            },
            {
              title: "Financial & Growth Insights",
              desc: "Data-driven analytics helping farmers make better production, pricing and expansion decisions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="relative p-10 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 
                   border border-green-400/20 backdrop-blur-xl 
                   shadow-[0_0_40px_rgba(34,197,94,0.15)] 
                   hover:shadow-[0_0_60px_rgba(34,197,94,0.35)] 
                   transition-all duration-500 cursor-pointer"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

              <h3 className="text-2xl font-bold text-green-400 mb-5 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="about"
        className="py-32 relative bg-gradient-to-b from-[#0b1120] to-[#0f172a] border-y border-white/10 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute -right-40 bottom-20 w-[400px] h-[400px] bg-emerald-400/10 blur-[120px] rounded-full" />

        <div className="relative z-10 text-center px-6 md:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            How Agrigati Works
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mb-20 leading-relaxed">
            Agrigati simplifies agriculture by combining land discovery, AI
            advisory, mandi intelligence and verified service providers into one
            seamless digital workflow. From registration to real farm impact —
            everything happens inside one powerful ecosystem.
          </p>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              {
                step: "01",
                title: "Create Your Agri Profile",
                desc: "Farmers, landowners, and service providers register and build verified profiles. Add land details, crop information and service listings with geo-location tagging.",
              },
              {
                step: "02",
                title: "Access Smart Agriculture Tools",
                desc: "Discover farmland, check live mandi prices, consult AI for crop diagnosis, and connect with verified machinery & finance providers — all in one dashboard.",
              },
              {
                step: "03",
                title: "Increase Productivity & Income",
                desc: "Make data-driven decisions using AI insights, optimize crop selling through mandi intelligence, and reduce dependency on middlemen for higher profit margins.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400/40 transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-green-500/20"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition">
                  {item.step}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-36 px-6 md:px-20 relative z-10 bg-gradient-to-b from-[#0b1120] to-black"
        id="partners"
      >
        {/* Background Glow Effects */}
        <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-green-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-0 w-[400px] h-[400px] bg-emerald-400/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Strategic Global Partners
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Agrigati collaborates with international development institutions,
            financial networks, and agri-innovation ecosystems to scale digital
            agriculture infrastructure across India.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
            {[
              { src: "/partners/Partner1.jpeg", name: "Partner 1" },
              { src: "/partners/Partner2.jpeg", name: "Partner 2" },
              { src: "/partners/Partner3.jpeg", name: "Partner 3" },
              { src: "/partners/Partner4.png", name: "Partner 4" },
              { src: "/partners/Partner5.png", name: "Partner 5" },
              { src: "/partners/Partner6.jpeg", name: "Partner 6" },
            ].map((partner, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Logo */}
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-20 object-contain grayscale group-hover:grayscale-0 transition duration-500"
                />

                {/* Green Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-green-400/40 transition duration-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= TESTIMONIALS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-36 px-6 md:px-20 bg-gradient-to-b from-black to-[#0b1120] relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Trusted by Farmers & Partners
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Agrigati is empowering farmers, landowners, and service providers
            across India with intelligent digital solutions that increase
            income, transparency, and operational efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Ramesh Kumar",
                role: "Farmer • Bihar",
                text: "AgriGati’s AI advisory helped me identify crop disease early. My yield increased by 30% this season. The mandi pricing feature gives me real-time price clarity before selling.",
              },
              {
                name: "Savitri Devi",
                role: "Land Owner • UP",
                text: "I listed my unused farmland on Agrigati and found verified farmers within days. The platform ensures secure and transparent agreements.",
              },
              {
                name: "Amit Sharma",
                role: "Service Provider • MP",
                text: "Through Agrigati, I now rent my tractors and farm machinery digitally. It reduced idle time and increased my monthly revenue significantly.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl group"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-green-400/40 transition duration-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] opacity-0 group-hover:opacity-100" />

                {/* Quote */}
                <p className="text-gray-300 italic leading-relaxed mb-8">
                  “{testimonial.text}”
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx} className="text-green-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>

                {/* Name */}
                <h4 className="text-lg font-semibold text-green-400">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        id="services"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-36 px-6 md:px-20 bg-gradient-to-b from-[#0b1120] to-black relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Complete Agri Service Ecosystem
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Agrigati connects farmers, landowners, service providers and markets
            through a unified digital infrastructure designed to increase
            productivity, transparency and income growth across rural India.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Smart Land Marketplace",
                desc: "Verified farmland listings with geo-location, transparent pricing and digital leasing contracts.",
                icon: "🌾",
              },
              {
                title: "AI Crop Advisory",
                desc: "Image-based crop disease detection, multilingual voice advisory and real-time recommendations.",
                icon: "🤖",
              },
              {
                title: "Mandi Intelligence",
                desc: "Live mandi prices, demand analytics, price comparison and historical trend tracking.",
                icon: "📊",
              },
              {
                title: "Machinery Rental",
                desc: "Book tractors, harvesters and farm equipment digitally from verified service providers.",
                icon: "🚜",
              },
              {
                title: "Seed & Fertilizer Supply",
                desc: "Access quality seeds, fertilizers and agri inputs from trusted vendors.",
                icon: "🌱",
              },
              {
                title: "Cold Storage Network",
                desc: "Locate nearby cold storage facilities to reduce post-harvest losses.",
                icon: "❄️",
              },
              {
                title: "Agri Finance & Credit",
                desc: "Connect with financial institutions for crop loans and working capital.",
                icon: "💰",
              },
              {
                title: "Farm Analytics Dashboard",
                desc: "Monitor crop health, yields and farm performance using smart data tools.",
                icon: "📈",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl group overflow-hidden cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-green-400/40 transition duration-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] opacity-0 group-hover:opacity-100" />

                {/* Icon */}
                <div className="text-4xl mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-36 px-6 md:px-20 relative bg-[#0b1120]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Let’s Build the Future of Agriculture Together
            </h2>

            <p className="text-gray-400 leading-relaxed mb-10">
              Whether you're a farmer, landowner, agri-business, or investor —
              Agrigati is ready to collaborate. Reach out to explore
              partnerships, enterprise solutions or ecosystem integrations.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📍 India</p>
              <p>📧 ceo@agrigati.com</p>
              <p>📞 +91 9990296759</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-green-400/40 transition duration-500 shadow-[0_0_60px_rgba(34,197,94,0.4)] pointer-events-none" />

            <form
              action="https://formsubmit.co/ceo@agrigati.com"
              method="POST"
              className="space-y-6 relative z-10"
              onSubmit={handleSubmit}
            >
              <input
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
              />

              <input
                name="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
              />

              <textarea
                name="message"
                placeholder="Tell us about your interest..."
                rows={4}
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
              />

              <button
                type="submit"
                disabled={loading}
                className={`relative w-full py-4 rounded-xl font-semibold 
  overflow-hidden transition-all duration-300
  ${
    loading
      ? "bg-green-700 cursor-not-allowed"
      : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
  }`}
              >
                {/* Background Glow Animation */}
                {!loading && (
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition duration-500"></span>
                )}

                {/* Loader */}
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message 🚀"
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="relative py-36 text-center overflow-hidden bg-gradient-to-r from-[#064e3b] to-[#022c22]">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)] animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            Join the Agricultural Revolution
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Agrigati is transforming rural India with intelligent
            infrastructure, AI-powered advisory and transparent agri markets. Be
            part of the next-generation agriculture movement.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-12 py-5 border border-green-400 rounded-full text-lg font-semibold hover:bg-green-500/10 transition">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-gray-400">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">AgriGati</h3>
            <p className="text-sm leading-relaxed">
              India’s unified digital agriculture platform empowering farmers,
              landowners and service providers through technology.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>Smart Land</li>
              <li>AI Advisory</li>
              <li>Mandi Intelligence</li>
              <li>Service Network</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-green-400">
              <span>LinkedIn</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          © {new Date().getFullYear()} AgriGati — Transforming Agriculture
          Digitally
        </div>
      </footer>

      {/* ================= DOWNLOAD MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-lg z-50 px-6">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-12 rounded-3xl text-center max-w-lg w-full shadow-2xl overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/30 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-400/30 blur-[120px] rounded-full"></div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text mb-6">
              <span className="text-transparent">Something Big is Growing</span>
              🌾
            </h3>

            {/* Message */}
            <p className="text-gray-300 leading-relaxed mb-8">
              Agrigati Mobile App is almost ready to transform Indian
              agriculture. Get ready for AI-powered farming, smart mandi
              insights, land discovery and a complete agri ecosystem — right in
              your pocket.
            </p>

            {/* Highlight Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 text-sm text-gray-400">
              🚀 Early Access Launching Soon 📱 Android & iOS 🌾 Built for
              Farmers. Powered by Technology.
            </div>

            {/* Button */}
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Stay Tuned ✨
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
