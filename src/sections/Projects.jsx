import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import projects from "../data/projects";

const accentStyles = {
  blue: {
    glow: "bg-[#5865F2]/10",
    glowStrong: "bg-[#5865F2]/15",
    text: "text-[#8B93FF]",
    border: "border-[#5865F2]/20",
    line: "via-[#5865F2]/50",
  },
  purple: {
    glow: "bg-purple-500/10",
    glowStrong: "bg-purple-500/15",
    text: "text-purple-300",
    border: "border-purple-400/20",
    line: "via-purple-400/40",
  },
  green: {
    glow: "bg-emerald-500/10",
    glowStrong: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    line: "via-emerald-400/40",
  },
  orange: {
    glow: "bg-orange-500/10",
    glowStrong: "bg-orange-500/15",
    text: "text-orange-300",
    border: "border-orange-400/20",
    line: "via-orange-400/40",
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const childReveal = {
  hidden: {
    opacity: 0,
    y: 18,
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

function ProjectPreview({ project, featured = false }) {
  const accent = accentStyles[project.accent] || accentStyles.blue;
  const isMobile = project.mobile;

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#090C11] ${
        featured
          ? "min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]"
          : "min-h-[300px] sm:min-h-[360px]"
      }`}
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        variants={{
          rest: {
            opacity: 0.8,
            scale: 1,
          },
          hover: {
            opacity: 1,
            scale: 1.15,
          },
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${accent.glow}`}
      />

      <motion.div
        aria-hidden="true"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.8,
          },
          hover: {
            opacity: 0.7,
            scale: 1,
          },
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] ${accent.glowStrong}`}
      />

      {/* Technical grid */}
      <motion.div
        aria-hidden="true"
        variants={{
          rest: { opacity: 0.025 },
          hover: { opacity: 0.055 },
        }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Project number */}
      <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-white/45">
          {project.number}
        </span>
      </div>

      {/* Status */}
      <div className="absolute right-5 top-5 z-20 sm:right-6 sm:top-6">
        <motion.span
          variants={{
            rest: {
              y: 0,
              borderColor: "rgba(255,255,255,0.08)",
            },
            hover: {
              y: -2,
            },
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex rounded-full border bg-black/25 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] backdrop-blur-md ${accent.border} ${accent.text}`}
        >
          {project.status}
        </motion.span>
      </div>

      {/* Preview */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isMobile
            ? featured
              ? "px-10 py-12 sm:px-20 sm:py-14"
              : "px-8 py-10 sm:px-12"
            : featured
              ? "p-5 sm:p-8"
              : "p-4 sm:p-6"
        }`}
      >
        {project.image ? (
          <motion.div
            variants={{
              rest: {
                y: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              },
              hover: isMobile
                ? {
                    y: -7,
                    scale: 1.025,
                    rotateX: 1,
                    rotateY: -1,
                  }
                : {
                    y: -7,
                    scale: 1.025,
                    rotateX: 1,
                    rotateY: -1,
                  },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformPerspective: 1200,
            }}
            className={`relative overflow-hidden border border-white/[0.10] bg-[#0D1016] shadow-2xl shadow-black/40 ${
              isMobile
                ? featured
                  ? "h-[390px] w-auto rounded-[1.75rem] sm:h-[470px] lg:h-[520px]"
                  : "h-[330px] w-auto rounded-[1.5rem] sm:h-[390px]"
                : "h-full w-full rounded-xl"
            }`}
          >
            {/* Browser header */}
            {!isMobile && (
              <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.07] bg-[#10141B] px-3">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />

                <div className="ml-3 h-4 flex-1 rounded bg-white/[0.03]" />

                <motion.div
                  variants={{
                    rest: { opacity: 0.2 },
                    hover: { opacity: 0.45 },
                  }}
                  transition={{ duration: 0.3 }}
                  className={`h-2 w-2 rounded-full ${accent.glowStrong}`}
                />
              </div>
            )}

            <motion.img
              src={project.image}
              alt={`${project.title} project preview`}
              variants={{
                rest: {
                  scale: 1,
                },
                hover: {
                  scale: isMobile ? 1.015 : 1.035,
                },
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                isMobile
                  ? "h-full w-auto object-contain"
                  : "h-[calc(100%-2.25rem)] w-full object-cover object-top"
              }
            />

            {/* Image depth overlay */}
            <motion.div
              aria-hidden="true"
              variants={{
                rest: {
                  opacity: 0.15,
                },
                hover: {
                  opacity: 0.05,
                },
              }}
              transition={{ duration: 0.5 }}
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090D]/40 via-transparent to-transparent ${
                isMobile ? "rounded-[1.75rem]" : ""
              }`}
            />

            {/* Accent reflection */}
            <motion.div
              aria-hidden="true"
              variants={{
                rest: {
                  opacity: 0,
                  x: "-110%",
                },
                hover: {
                  opacity: 0.12,
                  x: "110%",
                },
              }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white to-transparent blur-xl"
            />
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <Layers3 className="mb-4 text-white/20" size={34} />
            <p className="text-sm text-white/30">
              Project preview coming soon
            </p>
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <motion.div
        aria-hidden="true"
        variants={{
          rest: {
            opacity: 0.65,
            scaleX: 0.85,
          },
          hover: {
            opacity: 1,
            scaleX: 1,
          },
        }}
        transition={{ duration: 0.5 }}
        className={`absolute bottom-0 left-[12%] right-[12%] h-px origin-center bg-gradient-to-r from-transparent ${accent.line} to-transparent`}
      />

      {/* Edge highlight */}
      <motion.div
        aria-hidden="true"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className={`pointer-events-none absolute inset-0 rounded-[1.5rem] border ${accent.border}`}
      />
    </motion.div>
  );
}

function ProjectLinks({ project }) {
  const hasGithub = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  if (!hasGithub && !hasLive) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="mt-7 flex flex-wrap gap-3"
    >
      {hasGithub && (
        <motion.a
          variants={childReveal}
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
        >
          <FaGithub size={14} />
          Source
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>
      )}

      {hasLive && (
        <motion.a
          variants={childReveal}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-[#5865F2]/20 bg-[#5865F2]/[0.08] px-4 py-2.5 text-xs font-medium text-[#AAB0FF] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/15 hover:text-white"
        >
          <ExternalLink size={14} />
          {project.id === "dailyflow" ? "Download APK" : "Live Demo"}
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>
      )}
    </motion.div>
  );
}

function ProjectInfo({ project, featured = false }) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-xl"
    >
      <motion.div
        variants={childReveal}
        className="flex items-center gap-3"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
          {project.category}
        </span>

        {featured && (
          <span className="rounded-full border border-[#5865F2]/15 bg-[#5865F2]/[0.06] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8B93FF]">
            Featured
          </span>
        )}
      </motion.div>

      <motion.h3
        variants={childReveal}
        className={`mt-3 font-['Space_Grotesk'] font-semibold tracking-[-0.045em] text-white ${
          featured
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl"
        }`}
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={childReveal}
        className={`mt-5 leading-7 text-white/45 ${
          featured
            ? "text-sm sm:text-base sm:leading-8"
            : "text-sm"
        }`}
      >
        {project.description}
      </motion.p>

      <motion.div
        variants={childReveal}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.technologies.map((technology, index) => (
          <motion.span
            key={technology}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
            }}
            whileHover={{
              y: -2,
              borderColor: "rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.8)",
            }}
            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/45 transition-colors duration-300"
          >
            {technology}
          </motion.span>
        ))}
      </motion.div>

      <ProjectLinks project={project} />
    </motion.div>
  );
}

function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient section glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#5865F2]/[0.025] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-7 lg:mb-24 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="h-px w-8 origin-left bg-[#5865F2]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Space_Grotesk'] text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
            >
              Things I&apos;ve built.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md text-sm leading-7 text-white/40 sm:text-base"
          >
            A collection of projects built while learning, experimenting,
            and turning ideas into working digital products.
          </motion.p>
        </div>

        {/* Featured projects */}
        <div className="space-y-28 sm:space-y-36">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="group"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 ${
                  index % 2 !== 0
                    ? "lg:grid-cols-[0.7fr_1.3fr]"
                    : ""
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 !== 0 ? 35 : -35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index % 2 !== 0
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                >
                  <ProjectPreview project={project} featured />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 !== 0 ? -25 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index % 2 !== 0
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >
                  <ProjectInfo project={project} featured />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-28 border-t border-white/[0.06] pt-20 sm:mt-36 sm:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-12"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                More experiments
              </p>

              <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                More things I&apos;ve built.
              </h3>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group border border-white/[0.07] bg-[#090C11] p-5 transition-colors duration-500 hover:border-white/[0.12] sm:p-7"
                >
                  <ProjectPreview project={project} />

                  <div className="pt-7">
                    <ProjectInfo project={project} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 flex items-center justify-center gap-3 sm:mt-32"
        >
          <div className="h-px w-8 bg-white/10" />

          <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
            More projects coming
          </p>

          <div className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;