import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import siteConfig from "../data/siteConfig";

const signals = [
  {
    number: "01",
    label: "Projects",
    description: "Personal applications and development experiments.",
  },
  {
    number: "02",
    label: "Development",
    description: "Learning by building and improving real projects.",
  },
  {
    number: "03",
    label: "Open Source",
    description: "Code, experiments, and work shared publicly.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function GitHub() {
  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#090C11] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#5865F2]/[0.025] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-px w-8 origin-left bg-[#5865F2]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Open Source
              </span>
            </div>

            <p className="mt-6 hidden max-w-[190px] text-xs leading-6 text-white/25 lg:block">
              Where experiments, projects, learning, and development work
              come together.
            </p>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              Code, in public.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              My GitHub is where experiments, projects, learning, and
              development work come together.
            </motion.p>
          </div>
        </div>

        {/* Main GitHub panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 border-y border-white/[0.07] sm:mt-28"
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5865F2]/[0.05] blur-[110px]"
          />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Profile */}
            <div className="border-b border-white/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{
                    rotate: -5,
                    scale: 1.04,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-white"
                >
                  <FaGithub size={27} />
                </motion.div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                    Developer Profile
                  </p>

                  <p className="mt-1 font-['Space_Grotesk'] text-xl font-medium tracking-[-0.025em] text-white">
                    @jahangiralom1188
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 }}
                className="mt-8 max-w-xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8"
              >
                Explore the code behind my projects, experiments, and ongoing
                learning journey.
              </motion.p>

              <motion.a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
              >
                Visit GitHub

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </div>

            {/* Signals */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="divide-y divide-white/[0.07]"
            >
              {signals.map((signal) => (
                <motion.div
                  key={signal.number}
                  variants={item}
                  whileHover="hover"
                  className="group relative overflow-hidden p-7 sm:p-9 lg:p-10"
                >
                  <motion.div
                    variants={{
                      hidden: {
                        scaleX: 0,
                      },
                      visible: {
                        scaleX: 0,
                      },
                      hover: {
                        scaleX: 1,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[#5865F2]/50 via-[#5865F2]/10 to-transparent"
                  />

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                        {signal.number}
                      </span>

                      <h3 className="mt-4 font-['Space_Grotesk'] text-xl font-medium tracking-[-0.025em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {signal.label}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/40">
                        {signal.description}
                      </p>
                    </div>

                    <GitBranch
                      size={17}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#5865F2]"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Terminal size={14} className="text-[#5865F2]/60" />

            <p className="text-sm text-white/25">
              Follow the build.
            </p>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/15">
            github.com/jahangiralom1188
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHub;