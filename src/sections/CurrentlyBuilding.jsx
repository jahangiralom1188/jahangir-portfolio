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
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#5865F2]/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}

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
                Currently Building
              </span>
            </div>

            <p className="mt-6 hidden max-w-[190px] text-xs leading-6 text-white/25 lg:block">
              The projects, skills, and creative work getting my attention
              right now.
            </p>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              What&apos;s next.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              I&apos;m always working on something. These are the areas
              currently getting my attention, time, and curiosity.
            </motion.p>
          </div>
        </div>

        {/* ================= CURRENT FOCUS ================= */}

        <div className="mt-20 border-y border-white/[0.06]">
          {buildingItems.map((item, index) => {
            const Icon = item.icon;
            const accent = accentStyles[item.accent];
            const isActive = item.status === "Active";

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                className={`group relative overflow-hidden border-b border-white/[0.06] last:border-b-0 ${
                  isActive ? "bg-white/[0.012]" : ""
                }`}
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-[-100px] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${accent.glow}`}
                />

                {/* Active accent */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-px transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100 bg-[#5865F2]"
                      : "opacity-0 group-hover:opacity-100 bg-white/20"
                  }`}
                />

                <div className="relative grid gap-8 px-1 py-9 sm:px-4 sm:py-10 lg:grid-cols-[80px_1fr_auto] lg:items-center lg:gap-12 lg:px-5 lg:py-12">
                  {/* Number */}
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex gap-5 sm:gap-7">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] ${accent.icon}`}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                          {item.category}
                        </p>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] ${
                            isActive
                              ? "border-[#5865F2]/20 bg-[#5865F2]/[0.08] text-[#7C86FF]"
                              : "border-white/[0.07] bg-white/[0.02] text-white/30"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.07] text-white/25 transition-all duration-300 group-hover:border-white/[0.15] group-hover:text-white ${accent.icon}`}
                    >
                      <ArrowUpRight
                        size={17}
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
          className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between"
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