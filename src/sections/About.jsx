import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Smartphone,
  Music2,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive interfaces and full-stack web applications with a focus on practical user experiences.",
    tags: ["React", "Vite", "JavaScript"],
    icon: Code2,
    accent: "blue",
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Creating practical Android applications for everyday problems, with attention to usability and reliable functionality.",
    tags: ["Java", "Android", "SQLite"],
    icon: Smartphone,
    accent: "purple",
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "Working with server-side logic, APIs, databases, and the systems that connect applications together.",
    tags: ["Node.js", "Express", "MongoDB"],
    icon: Database,
    accent: "green",
  },
  {
    number: "04",
    title: "Beyond Code",
    description:
      "Music and guitar give me another way to explore creativity, discipline, and expression outside software.",
    tags: ["Guitar", "Music", "Creativity"],
    icon: Music2,
    accent: "orange",
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

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#090C11] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-220px] top-[18%] h-[600px] w-[600px] rounded-full bg-[#5865F2]/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ================= INTRO ================= */}

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#5865F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                About Me
              </span>
            </div>

            <p className="mt-6 hidden max-w-[180px] text-xs leading-6 text-white/25 lg:block">
              A student developer focused on learning by building.
            </p>
          </motion.div>

          {/* Main introduction */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75 }}
              className="font-['Space_Grotesk'] text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              Learning.
              <br />
              Building.
              <br />
              <span className="text-white/30">Becoming.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-9 max-w-2xl space-y-5 text-sm leading-7 text-white/50 sm:text-base sm:leading-8"
            >
              <p>
                I&apos;m a Computer Science & Engineering student who enjoys
                turning ideas into practical software. I like understanding
                how things work, building them from the ground up, and
                continuously improving along the way.
              </p>

              <p>
                My current focus is web development, Android applications,
                backend systems, and databases. Each project is an opportunity
                to learn something new and turn that knowledge into something
                useful.
              </p>
            </motion.div>

            <motion.a
              href="#work"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </div>

        {/* ================= FOCUS AREAS ================= */}

        <div className="mt-24 border-y border-white/[0.06]">
          <div className="grid sm:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;
              const accent = accentStyles[item.accent];

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                  className={`group relative overflow-hidden py-9 sm:px-8 sm:py-10 lg:px-10 ${
                    index < 2
                      ? "border-b border-white/[0.06]"
                      : ""
                  } ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/[0.06]"
                      : ""
                  } ${
                    index === 2
                      ? "sm:border-b-0"
                      : ""
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-[90px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
                  />

                  {/* Top accent */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-20 ${accent.line}`}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] ${accent.icon}`}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.025em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/35 transition-colors duration-300 group-hover:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/[0.06] pt-8 sm:mt-24 sm:flex sm:items-end sm:justify-between"
        >
          <p className="max-w-3xl font-['Space_Grotesk'] text-2xl leading-tight tracking-[-0.025em] text-white/75 sm:text-3xl lg:text-4xl">
            I don&apos;t want to simply learn technologies.
            <span className="text-white/30">
              {" "}
              I want to understand them well enough to build something useful
              with them.
            </span>
          </p>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/20 sm:mb-1 sm:mt-0 sm:shrink-0">
            Student / Developer / Builder
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;