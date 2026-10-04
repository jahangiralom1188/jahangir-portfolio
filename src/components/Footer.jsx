import { ArrowUp, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import siteConfig from "../data/siteConfig";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "Building", href: "#building" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#07090D]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.04em] text-[#F5F5F2]"
            >
              JAHAN

              <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2] transition-transform duration-300 group-hover:scale-150" />
            </a>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[#9297A3]">
              Building ideas into digital products.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#9297A3] transition-colors duration-300 hover:text-[#F5F5F2]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Bottom */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-2 text-xs text-[#9297A3] sm:flex-row sm:items-center sm:gap-4">
            <span>© {currentYear} Jahangir Alom</span>

            <span className="hidden text-white/20 sm:inline">
              •
            </span>

            <span className="flex items-center gap-1.5">
              Built with
              <Heart
                size={11}
                className="fill-current text-[#5865F2]"
              />
              and code.
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-white/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <FaGithub size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-white/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-white/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <FaWhatsapp size={16} />
            </a>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#5865F2]/30 bg-[#5865F2]/10 text-[#5865F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#5865F2]/60 hover:bg-[#5865F2]/20"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;