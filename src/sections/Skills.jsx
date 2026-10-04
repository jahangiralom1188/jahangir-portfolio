import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Wrench,
  BookOpen,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces and frontend applications.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    accent: "blue",
  },
  {
    number: "02",
    title: "Backend",
    description: "Server-side applications and APIs.",
    icon: Server,
    skills: ["Node.js", "Express", "Python"],
    accent: "purple",
  },
  {
    number: "03",
    title: "Database",
    description: "Data storage and application databases.",
    icon: Database,
    skills: ["MongoDB", "SQLite"],
    accent: "green",
  },
  {
    number: "04",
    title: "Mobile",
    description: "Android applications and mobile systems.",
    icon: Smartphone,
    skills: ["Java", "Android", "SQLite"],
    accent: "orange",
  },
  {
    number: "05",
    title: "Tools",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    accent: "blue",
  },
  {
    number: "06",
    title: "Currently Learning",
    description: "Areas I'm actively exploring and improving.",
    icon: BookOpen,
    skills: ["APIs", "Cloud", "Deployment", "Full-Stack"],
    accent: "purple",
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
  orange: {
    icon: "text-orange-300",
    glow: "bg-orange-500/10",
    line: "bg-orange-400",
  },
};

function Skills() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-220px] top-1/3 h-[600px] w-[600px] rounded-full bg-[#5865F2]/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}

        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#5865F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                My Stack
              </span>
            </div>

            <p className="mt-6 hidden max-w-[190px] text-xs leading-6 text-white/25 lg:block">
              Technologies I use to turn ideas into working software.
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
              Tools I build
              <br />
              <span className="text-white/30">with.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              A practical collection of technologies and tools I&apos;m
              working with across web development, mobile applications,
              backend systems, and databases.
            </motion.p>
          </div>
        </div>

        {/* ================= SKILL GRID ================= */}

        <div className="border-y border-white/[0.06]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              const accent = accentStyles[group.accent];

              return (
                <motion.article
                  key={group.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                  }}
                  className={`group relative overflow-hidden p-7 sm:p-8 lg:p-9 ${
                    index < 3
                      ? "border-b border-white/[0.06]"
                      : ""
                  } ${
                    index % 3 !== 2
                      ? "lg:border-r lg:border-white/[0.06]"
                      : ""
                  } ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/[0.06] lg:border-r"
                      : ""
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
                  />

                  {/* Accent line */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-16 ${accent.line}`}
                  />

                  <div className="relative">
                    {/* Icon / number */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] ${accent.icon}`}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                        {group.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 font-['Space_Grotesk'] text-xl font-medium tracking-[-0.02em] text-white">
                      {group.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-white/35">
                      {group.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/45 transition-all duration-300 group-hover:border-white/[0.10] group-hover:text-white/55"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/30">
            This stack evolves as I build, experiment, and learn.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5865F2]/60">
            Always learning
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;