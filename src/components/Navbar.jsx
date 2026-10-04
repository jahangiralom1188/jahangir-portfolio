import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Building", href: "#building", id: "building" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 180;

      let currentSection = "work";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock page scrolling while mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu with Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#07090D]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-24 lg:px-10"
        >
          {/* Brand */}
          <a
            href="#work"
            onClick={closeMenu}
            aria-label="JAHAN — home"
            className="group relative z-[60] flex items-center gap-2"
          >
            <span className="font-['Space_Grotesk'] text-xl font-bold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#5865F2]">
              JAHAN
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2] shadow-[0_0_10px_rgba(88,101,242,0.5)] transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group relative px-2 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#5865F2] transition-all duration-300 ${
                      isActive
                        ? "w-4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 lg:inline-flex"
          >
            Let's talk
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#07090D]/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-24 sm:px-6"
            >
              {/* Status */}
              <div className="mb-8 border-y border-white/[0.07] py-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5865F2] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5865F2]" />
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                    Currently building
                  </span>
                </div>
              </div>

              {/* Mobile links */}
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.035,
                      }}
                      className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                    >
                      <div className="flex items-center gap-5">
                        <span
                          className={`w-5 text-xs transition-colors duration-300 ${
                            isActive
                              ? "text-[#5865F2]"
                              : "text-white/20"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`font-['Space_Grotesk'] text-2xl font-medium tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-white/65 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "-translate-y-0.5 translate-x-0.5 text-[#5865F2]"
                            : "text-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5865F2]"
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom brand */}
              <div className="mt-auto pt-10">
                <p className="font-['Space_Grotesk'] text-sm font-semibold tracking-wide text-white/40">
                  JAHANGIR ALOM
                </p>

                <p className="mt-2 text-xs text-white/25">
                  Computer Science & Engineering
                </p>

                <p className="mt-1 text-xs leading-5 text-white/20">
                  Building ideas into digital products.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;