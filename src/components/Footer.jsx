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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07090D]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_auto] lg:items-start lg:py-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-2"
            >
              <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-[-0.04em] text-white">
                JAHAN
              </span>

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#5865F2] transition-transform duration-300 group-hover:scale-125"
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/25">
              Building ideas into digital products.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
              Navigate
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-4 lg:grid-cols-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/35 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/20">
            © {currentYear} Jahangir Alom. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/25 transition-colors duration-300 hover:text-white"
            >
              <FaGithub size={15} />
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/25 transition-colors duration-300 hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-white/25 transition-colors duration-300 hover:text-white"
            >
              <FaWhatsapp size={15} />
            </a>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/[0.08] sm:block"
            />

            <span className="hidden items-center gap-1.5 text-xs text-white/20 sm:flex">
              Built with
              <Heart
                size={12}
                className="text-[#5865F2]"
                fill="currentColor"
              />
              and code
            </span>

            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] text-white/25 transition-all duration-300 hover:border-white/[0.15] hover:text-white"
            >
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;