import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Smartphone,
  Wrench,
  BookOpen,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces, components, and modern web experiences.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Server-side logic, APIs, and application architecture.",
    icon: GitBranch,
    skills: ["Node.js", "Express", "Python"],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with application data and local persistence.",
    icon: Database,
    skills: ["MongoDB", "SQLite"],
  },
  {
    number: "04",
    title: "Mobile",
    description: "Android applications and mobile-first workflows.",
    icon: Smartphone,
    skills: ["Java", "Android", "SQLite"],
  },
  {
    number: "05",
    title: "Tools",
    description: "The tools I use to develop, manage, and test projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
  {
    number: "06",
    title: "Currently Learning",
    description: "Expanding the foundation toward complete product development.",
    icon: BookOpen,
    skills: ["APIs", "Cloud", "Deployment", "Full-Stack"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Skills() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#090C11] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#5865F2]/[0.025] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
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
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px w-8 origin-left bg-[#5865F2]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Stack
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Tools I build
              <br />
              <span className="text-white/35">with.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl lg:pt-10"
          >
            <p className="text-base leading-8 text-white/45 sm:text-lg sm:leading-9">
              My stack is built around technologies I have actually worked
              with while developing projects, experimenting with ideas, and
              learning how complete applications come together.
            </p>
          </motion.div>
        </div>

        {/* Skill grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-20 grid border-y border-white/[0.07] sm:mt-28 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                variants={item}
                whileHover="hover"
                className={`group relative min-h-[270px] overflow-hidden p-7 sm:p-9 lg:p-10 ${
                  index < 3
                    ? "border-b border-white/[0.07]"
                    : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-white/[0.07]"
                    : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-white/[0.07] lg:border-r"
                    : ""
                }`}
              >
                {/* Background glow */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.8,
                    },
                    visible: {
                      opacity: 0,
                      scale: 0.8,
                    },
                    hover: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5865F2]/[0.06] blur-[80px]"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                      {group.number}
                    </span>

                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0.35,
                          y: 0,
                        },
                        visible: {
                          opacity: 0.35,
                          y: 0,
                        },
                        hover: {
                          opacity: 0.9,
                          y: -3,
                        },
                      }}
                      transition={{ duration: 0.35 }}
                      className="text-[#5865F2]"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <motion.h3
                    variants={{
                      hidden: { x: 0 },
                      visible: { x: 0 },
                      hover: { x: 3 },
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-12 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.035em] text-white"
                  >
                    {group.title}
                  </motion.h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/30 transition-colors duration-500 group-hover:text-white/45">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -2,
                          borderColor: "rgba(88,101,242,0.3)",
                          backgroundColor: "rgba(88,101,242,0.08)",
                          color: "rgba(255,255,255,0.8)",
                        }}
                        transition={{ duration: 0.25 }}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/45 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
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
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[#5865F2]/60 via-[#5865F2]/20 to-transparent"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 flex flex-col gap-5 border-b border-white/[0.06] pb-10 sm:mt-24 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/20">
              Always learning
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
              The stack will keep evolving as I build more, solve harder
              problems, and move closer to becoming a stronger full-stack
              developer.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#5865F2]/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2]" />
            Growing every day
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;