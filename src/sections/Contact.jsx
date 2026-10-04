import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.08] blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]"
          >
            <Sparkles size={14} />
            Get in touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-['Space_Grotesk'] text-5xl font-semibold tracking-[-0.05em] text-[#F5F5F2] sm:text-6xl lg:text-8xl"
          >
            Let&apos;s build
            <br />
            <span className="text-white/30">something.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base"
          >
            Have an idea, project, collaboration, or opportunity in mind?
            I&apos;d love to hear about it and explore what we can build
            together.
          </motion.p>
        </div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1016] p-6 sm:p-8 lg:p-10">
            {/* Card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5865F2]/10 blur-[90px] transition-opacity duration-500 group-hover:bg-[#5865F2]/20"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Email */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                  Email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-xl font-medium tracking-tight text-white transition-colors duration-300 hover:text-[#5865F2] sm:text-2xl"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* CTA */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group/button inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#F5F5F2] px-6 py-3.5 text-sm font-semibold text-[#07090D] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-white/[0.06]" />

            {/* Socials */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/35">
                Find me around the web
              </p>

              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                >
                  <FaLinkedinIn size={17} />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#5865F2]/30 hover:bg-[#5865F2]/10 hover:text-[#5865F2]"
                >
                  <Mail size={18} />
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                >
                  <FaWhatsapp size={19} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-col items-center justify-center gap-2 text-center sm:flex-row"
        >
          <span className="text-xs uppercase tracking-[0.18em] text-white/20">
            Jahangir Alom
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          <span className="text-xs uppercase tracking-[0.18em] text-white/20">
            Building ideas into digital products.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;