import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  GitCommit,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import siteConfig from "../data/siteConfig";

function GitHub() {
  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#090C11] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.045] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#5865F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Open Source
              </span>
            </div>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="font-['Space_Grotesk'] text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
            >
              Code, in public.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8"
            >
              My GitHub is where experiments, projects, learning, and
              development work come together.
            </motion.p>
          </div>
        </div>

        {/* ================= MAIN GITHUB AREA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-14 overflow-hidden border-y border-white/[0.07] sm:mt-20"
        >
          {/* Subtle grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5865F2]/[0.08] blur-[110px] transition-opacity duration-700 group-hover:opacity-100"
          />

          <div className="relative grid lg:grid-cols-[1fr_auto]">
            {/* Main content */}
            <div className="px-1 py-12 sm:px-5 sm:py-14 lg:py-16">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white">
                  <FaGithub size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                    Developer Profile
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    github.com/jahangiralom1188
                  </p>
                </div>
              </div>

              <h3 className="mt-10 max-w-2xl font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Explore the work behind the portfolio.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                See the code behind my projects, experiments, and ongoing learning.
                New work gets added as I build.
              </p>

              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="group/button mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm font-medium text-white transition-colors duration-300 hover:border-[#5865F2] hover:text-[#7C86FF]"
              >
                Visit GitHub

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>
            </div>

            {/* GitHub indicators */}
            <div className="grid grid-cols-3 border-t border-white/[0.06] lg:w-[420px] lg:border-l lg:border-t-0">
              <div className="border-r border-white/[0.06] px-4 py-8 sm:px-6 lg:py-10">
                <GitBranch
                  size={18}
                  className="text-[#7C86FF]"
                  strokeWidth={1.7}
                />

                <p className="mt-6 text-sm font-medium text-white/70">
                  Projects
                </p>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  Building and experimenting
                </p>
              </div>

              <div className="border-r border-white/[0.06] px-4 py-8 sm:px-6 lg:py-10">
                <GitCommit
                  size={18}
                  className="text-purple-300"
                  strokeWidth={1.7}
                />

                <p className="mt-6 text-sm font-medium text-white/70">
                  Development
                </p>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  Learning through code
                </p>
              </div>

              <div className="px-4 py-8 sm:px-6 lg:py-10">
                <CodeIcon />

                <p className="mt-6 text-sm font-medium text-white/70">
                  Open Source
                </p>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  Code and experiments
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/20">
            Follow the build
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CodeIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-emerald-300"
      aria-hidden="true"
    >
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export default GitHub;