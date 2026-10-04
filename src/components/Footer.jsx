import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import siteConfig from "../data/siteConfig";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Building", href: "#building" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const socials = [
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
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#home"
              className="group inline-flex items-center gap-2"
            >
              <span className="font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.045em] text-white">
                JAHAN
              </span>

              <motion.span
                whileHover={{
                  scale: 1.35,
                }}
                transition={{ duration: 0.25 }}
                className="h-1.5 w-1.5 rounded-full bg-[#5865F2]"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/30">
              Building ideas into digital products.
            </p>

            <div className="mt-7 flex items-center gap-5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="text-white/25 transition-colors duration-300 hover:text-white"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/20">
              Navigate
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-white/35 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
            © {currentYear} Jahangir Alom. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/20">
            <span>Built with</span>

            <Heart
              size={12}
              className="fill-[#5865F2]/40 text-[#5865F2]"
            />

            <span>code</span>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            className="group flex items-center gap-2 self-start text-[10px] font-medium uppercase tracking-[0.18em] text-white/25 transition-colors duration-300 hover:text-white sm:self-auto"
          >
            Top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] transition-colors duration-300 group-hover:border-white/[0.18]">
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;