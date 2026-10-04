import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import heroImage from "../assets/jahangir-hero.webp";
import siteConfig from "../data/siteConfig";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[45%] top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/10 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[650px] lg:w-[650px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[20%] h-[350px] w-[350px] rounded-full bg-[#5865F2]/[0.05] blur-[120px]"
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-28 sm:gap-14 sm:px-6 md:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-32">
        {/* ================= LEFT ================= */}

        <div className="order-2 lg:order-1">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3 sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5865F2] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5865F2]" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 sm:text-xs">
              Currently building
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#5865F2] sm:mb-5 sm:text-sm"
          >
            Hello, I'm Jahangir
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-['Space_Grotesk'] text-[clamp(3rem,11vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
          >
            BUILDING
            <br />
            DIGITAL
            <br />
            <span className="text-white/40">PRODUCTS.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:mt-8 sm:text-base sm:leading-8 md:text-lg"
          >
            Computer Science & Engineering student focused on building
            practical web and mobile applications through code, creativity,
            and continuous learning.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <a
              href="#work"
              style={{
                color: "#07090D",
                backgroundColor: "#F5F5F2",
              }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-white sm:w-auto"
            >
              <span
                style={{
                  color: "#07090D",
                  display: "inline-block",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                View my work
              </span>

              <ArrowUpRight
                size={17}
                style={{ color: "#07090D" }}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:w-auto"
            >
              Resume
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex items-center gap-5 sm:mt-10"
          >
            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/30 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/30 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedinIn size={19} />
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-white/30 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaWhatsapp size={19} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-white/30 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        {/* ================= PORTRAIT ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 mt-2 flex justify-center sm:mt-6 lg:order-2 lg:mt-0 lg:justify-end"
        >
          <div className="relative w-full max-w-[560px]">
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-[2.5rem] bg-[#5865F2]/10 blur-[80px]"
            />

            {/* Secondary glow */}
            <div
              aria-hidden="true"
              className="absolute -right-16 top-1/4 h-48 w-48 rounded-full bg-[#5865F2]/10 blur-[80px]"
            />

            {/* Image container */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.10] bg-[#0D1016] shadow-2xl shadow-black/40 sm:rounded-[1.75rem]">
              <img
                src={heroImage}
                alt="Portrait of Jahangir Alom"
                className="h-[390px] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02] sm:h-[520px] md:h-[600px] lg:h-auto"
              />

              {/* Top fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07090D]/40 to-transparent"
              />

              {/* Bottom fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07090D]/85 via-[#07090D]/25 to-transparent"
              />

              {/* Accent edge */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#5865F2]/50 to-transparent"
              />

              {/* Identity label */}
              <div className="absolute bottom-4 left-4 rounded-full border border-white/[0.10] bg-black/30 px-3.5 py-2 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:px-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2]" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
                    Jahangir Alom
                  </p>
                </div>
              </div>

              {/* Role label */}
              <div className="absolute right-4 top-4 hidden rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 backdrop-blur-md sm:block">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Developer / Builder
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#5865F2]/30 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/60 md:flex"
      >
        Scroll to explore
        <ArrowDown size={13} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

export default Hero;