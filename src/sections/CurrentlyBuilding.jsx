import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Smartphone,
  Code2,
  Music2,
} from "lucide-react";

const buildingItems = [
  {
    number: "01",
    category: "Android Application",
    title: "DailyFlow",
    description:
      "A personal routine and productivity application focused on tasks, class routines, reminders, and attendance tracking.",
    status: "Active",
    icon: Smartphone,
    accent: "blue",
  },
  {
    number: "02",
    category: "Web Engineering",
    title: "Full-Stack Development",
    description:
      "Strengthening frontend architecture, backend systems, APIs, databases, and the skills needed to build complete applications.",
    status: "Exploring",
    icon: Code2,
    accent: "purple",
  },
  {
    number: "03",
    category: "Creative Projects",
    title: "Music & Creativity",
    description:
      "Exploring music, guitar, and creative digital projects alongside software development.",
    status: "Creative",
    icon: Music2,
    accent: "green",
  },
];

const accentStyles = {
  blue: {
    icon: "text-[#7C86FF]",
    glow: "bg-[#5865F2]/10",
    line: "bg-[#5865F2]",
  },
  purple: {
    icon: "text-purple-300",
    glow: "bg-purple-500/10",
    line: "bg-purple-400",
  },
  green: {
    icon: "text-emerald-300",
    glow: "bg-emerald-500/10",
    line: "bg-emerald-400",
  },
};

function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#5865F2]/[0.035] blur-[140px]"
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
                Currently Building
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
              What's next.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8"
            >
              I'm always working on something. These are the areas currently
              getting my attention, time, and curiosity.
            </motion.p>
          </div>
        </div>

        {/* ================= CARDS ================= */}

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          {buildingItems.map((item, index) => {
            const Icon = item.icon;
            const accent = accentStyles[item.accent];

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0D1016] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-[#10141B] sm:p-8"
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
                />

                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-20 ${accent.line}`}
                />

                <div className="relative">
                  {/* Number + status */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                      {item.number}
                    </span>

                    <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/35">
                      {item.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mt-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] ${accent.icon}`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  {/* Category */}
                  <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[120px] text-sm leading-7 text-white/40">
                    {item.description}
                  </p>

                  {/* Bottom arrow */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                      In progress
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] text-white/25 transition-all duration-300 group-hover:border-white/[0.15] group-hover:text-white ${accent.icon}`}
                    >
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/30">
            Building in public, one project at a time.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
            Keep building
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;