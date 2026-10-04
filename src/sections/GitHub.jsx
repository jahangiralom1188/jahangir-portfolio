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

        {/* ================= MAIN CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D1016] sm:mt-20"
        >
          {/* Grid background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#5865F2]/10 blur-[110px] transition-opacity duration-500 group-hover:bg-[#5865F2]/15"
          />

          <div className="relative p-6 sm:p-10 lg:p-14">
            {/* Top row */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white">
                  <FaGithub size={27} />
                </div>

                <h3 className="mt-8 font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Explore my repositories.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  See the code behind my projects, experiments, and ongoing
                  learning. New work gets added as I build.
                </p>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5F5F2] px-6 py-3.5 text-sm font-semibold text-[#07090D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Visit GitHub

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>
              </div>

              {/* Decorative GitHub mark */}
              <div
                aria-hidden="true"
                className="hidden text-white/[0.035] lg:block"
              >
                <FaGithub size={170} />
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-white/[0.06]" />

            {/* Indicators */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
              <div className="bg-[#0A0D12] p-5 sm:p-6">
                <GitBranch
                  size={18}
                  className="text-[#7C86FF]"
                  strokeWidth={1.7}
                />

                <p className="mt-5 text-sm font-medium text-white/70">
                  Projects
                </p>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  Building and experimenting
                </p>
              </div>

              <div className="bg-[#0A0D12] p-5 sm:p-6">
                <GitCommit
                  size={18}
                  className="text-purple-300"
                  strokeWidth={1.7}
                />

                <p className="mt-5 text-sm font-medium text-white/70">
                  Development
                </p>

                <p className="mt-1 text-xs leading-5 text-white/25">
                  Learning through code
                </p>
              </div>

              <div className="bg-[#0A0D12] p-5 sm:p-6">
                <CodeIcon />

                <p className="mt-5 text-sm font-medium text-white/70">
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