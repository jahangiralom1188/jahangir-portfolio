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
      "Building responsive interfaces and practical web applications with modern frontend and backend technologies.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Developing Android applications focused on useful features, clean interfaces, local storage, notifications, and everyday workflows.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "Working with APIs, server-side logic, databases, and the systems behind applications.",
    icon: Database,
  },
  {
    number: "04",
    title: "Beyond Code",
    description:
      "Exploring guitar, music, creativity, and the ideas that shape how I approach building digital products.",
    icon: Music2,
  },
];

const reveal = {
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

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[18%] h-[500px] w-[500px] rounded-full bg-[#5865F2]/[0.025] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
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
                About
              </span>
            </div>

            <h2 className="mt-6 max-w-lg font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Learning.
              <br />
              Building.
              <br />
              <span className="text-white/35">Becoming.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl lg:pt-10"
          >
            <p className="text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
              I&apos;m a Computer Science &amp; Engineering student focused on
              learning by building. I enjoy turning ideas into practical web
              and mobile applications while continuously improving how I
              understand code, systems, and product thinking.
            </p>

            <p className="mt-6 text-base leading-8 text-white/35 sm:text-lg sm:leading-9">
              My approach is simple: build something, understand why it works,
              learn from what breaks, and keep improving.
            </p>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="mt-20 border-y border-white/[0.07] sm:mt-28">
          <div className="grid md:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover="hover"
                  className={`group relative min-h-[230px] overflow-hidden p-7 sm:p-9 lg:p-10 ${
                    index < 2
                      ? "border-b border-white/[0.07]"
                      : ""
                  } ${
                    index % 2 === 0
                      ? "md:border-r md:border-white/[0.07]"
                      : ""
                  }`}
                >
                  {/* Hover glow */}
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 0,
                      },
                      hover: {
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#5865F2]/[0.07] blur-[70px]"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/20">
                        {area.number}
                      </span>

                      <motion.div
                        variants={{
                          hidden: {
                            opacity: 0.35,
                            x: 0,
                            y: 0,
                          },
                          visible: {
                            opacity: 0.35,
                            x: 0,
                            y: 0,
                          },
                          hover: {
                            opacity: 0.8,
                            x: 3,
                            y: -3,
                          },
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[#5865F2]"
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    <motion.h3
                      variants={{
                        hidden: {
                          y: 0,
                        },
                        visible: {
                          y: 0,
                        },
                        hover: {
                          x: 3,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-12 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl"
                    >
                      {area.title}
                    </motion.h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/35 transition-colors duration-500 group-hover:text-white/50">
                      {area.description}
                    </p>
                  </div>

                  {/* Bottom hover line */}
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
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 max-w-4xl sm:mt-28"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/25">
              My mindset
            </span>
          </div>

          <p className="mt-7 font-['Space_Grotesk'] text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-white/80 sm:text-4xl lg:text-5xl">
            I don&apos;t want to simply learn technologies. I want to
            understand them well enough to build something useful with them.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 h-px max-w-2xl bg-gradient-to-r from-[#5865F2]/50 to-transparent"
          />

          <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <span>Keep learning</span>
            <ArrowUpRight size={12} />
            <span>Keep building</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;