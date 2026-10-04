import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import siteConfig from "../data/siteConfig";

const socials = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: siteConfig.social.github,
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: siteConfig.social.linkedin,
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: siteConfig.social.whatsapp,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36 lg:py-44"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.045] blur-[160px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-8 origin-left bg-[#5865F2]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
              Get in touch
            </span>
          </div>

          <h2 className="mt-7 font-['Space_Grotesk'] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7rem]">
            Let&apos;s build
            <br />
            <span className="text-white/35">something.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
            Have an idea, a project, or simply want to connect? I&apos;m always
            open to meaningful conversations around technology, development,
            and building useful things.
          </p>
        </motion.div>

        {/* Contact area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 border-y border-white/[0.07] sm:mt-20"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Email CTA */}
            <div className="relative overflow-hidden border-b border-white/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#5865F2]/[0.07] blur-[100px]"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#5865F2]"
                  />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                    Email
                  </span>
                </div>

                <p className="mt-7 max-w-xl break-all font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  {siteConfig.email}
                </p>

                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5F5F2] px-5 py-3 text-sm font-medium text-[#07090D] transition-colors duration-300 hover:bg-white"
                >
                  Start a conversation

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>
            </div>

            {/* Social links */}
            <div className="divide-y divide-white/[0.07]">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover="hover"
                    className="group relative flex items-center justify-between overflow-hidden px-7 py-7 sm:px-10 sm:py-8"
                  >
                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0,
                          scale: 0.7,
                        },
                        hover: {
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                      initial="rest"
                      transition={{
                        duration: 0.5,
                      }}
                      className="pointer-events-none absolute right-[-60px] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.06] blur-[70px]"
                    />

                    <div className="relative flex items-center gap-4">
                      <motion.span
                        variants={{
                          rest: {
                            x: 0,
                            opacity: 0.55,
                          },
                          hover: {
                            x: 2,
                            opacity: 1,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        <Icon size={19} />
                      </motion.span>

                      <span className="text-sm font-medium text-white/55 transition-colors duration-300 group-hover:text-white">
                        {social.label}
                      </span>
                    </div>

                    <motion.span
                      variants={{
                        rest: {
                          x: 0,
                          y: 0,
                          opacity: 0.3,
                        },
                        hover: {
                          x: 3,
                          y: -3,
                          opacity: 1,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative text-[#5865F2]"
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Closing identity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-14 flex flex-col gap-5 border-b border-white/[0.06] pb-10 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-[-0.03em] text-white">
                Jahangir Alom
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2]" />
            </div>

            <p className="mt-2 text-xs text-white/25">
              Building ideas into digital products.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <Sparkles size={13} />
            <span>Let&apos;s create something useful</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;