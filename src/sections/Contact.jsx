import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import siteConfig from "../data/siteConfig";

function Contact() {
  const socialLinks = [
    {
      label: "GitHub",
      href: siteConfig.social.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: FaLinkedinIn,
    },
    {
      label: "WhatsApp",
      href: siteConfig.social.whatsapp,
      icon: FaWhatsapp,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.07] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#5865F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Contact
              </span>
            </div>

            <p className="mt-6 hidden max-w-[190px] text-xs leading-6 text-white/25 lg:block">
              Have an idea, project, opportunity, or simply want to connect?
            </p>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <Sparkles
                size={16}
                className="text-[#7C86FF]"
                strokeWidth={1.7}
              />

              <span className="text-xs uppercase tracking-[0.18em] text-white/25">
                Let&apos;s connect
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 max-w-4xl font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
            >
              Let&apos;s build
              <br />
              <span className="text-white/35">something.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              I&apos;m open to meaningful projects, collaborations, and
              opportunities where I can learn, contribute, and build useful
              things.
            </motion.p>
          </div>
        </div>

        {/* Main contact area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 border-y border-white/[0.07] sm:mt-20"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Email CTA */}
            <div className="px-1 py-10 sm:px-5 sm:py-12 lg:py-14">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                Start a conversation
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-4 inline-flex max-w-full items-center gap-3 break-all font-['Space_Grotesk'] text-xl font-medium tracking-[-0.02em] text-white transition-colors duration-300 hover:text-[#7C86FF] sm:text-2xl"
              >
                {siteConfig.email}

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 border-t border-white/[0.06] lg:border-l lg:border-t-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={social.label === "Email" ? undefined : "noreferrer"}
                    className="group flex items-center gap-3 border-b border-r border-white/[0.06] px-5 py-5 text-sm text-white/35 transition-colors duration-300 hover:bg-white/[0.025] hover:text-white sm:px-7"
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="text-white/25 transition-colors duration-300 group-hover:text-[#7C86FF]"
                    />

                    <span>{social.label}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-auto opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/25">
            Building ideas into digital products.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
            Jahangir Alom
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;