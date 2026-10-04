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
    text: "text-[#8B93FF]",
    border: "border-[#5865F2]/20",
    line: "via-[#5865F2]/50",
  },
  purple: {
    glow: "bg-purple-500/10",
    text: "text-purple-300",
    border: "border-purple-400/20",
    line: "via-purple-400/40",
  },
  green: {
    glow: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    line: "via-emerald-400/40",
  },
  orange: {
    glow: "bg-orange-500/10",
    text: "text-orange-300",
    border: "border-orange-400/20",
    line: "via-orange-400/40",
  },
};

function ProjectPreview({ project, featured = false }) {
  const accent = accentStyles[project.accent] || accentStyles.blue;
  const isMobile = project.mobile;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#090C11] ${
        featured
          ? "min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]"
          : "min-h-[300px] sm:min-h-[360px]"
      }`}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${accent.glow}`}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Project number */}
      <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/25">
          {project.number}
        </span>
      </div>

      {/* Status */}
      <div className="absolute right-5 top-5 z-20 sm:right-6 sm:top-6">
        <span
          className={`rounded-full border bg-black/25 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] backdrop-blur-md ${accent.border} ${accent.text}`}
        >
          {project.status}
        </span>
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
          <div
            className={`relative overflow-hidden border border-white/[0.10] bg-[#0D1016] shadow-2xl shadow-black/40 ${
              isMobile
                ? featured
                  ? "h-[390px] w-auto rounded-[1.75rem] sm:h-[470px] lg:h-[520px]"
                  : "h-[330px] w-auto rounded-[1.5rem] sm:h-[390px]"
                : "h-full w-full rounded-xl"
            }`}
          >
            {/* Browser header for web projects */}
            {!isMobile && (
              <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.07] bg-[#10141B] px-3">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />

                <div className="ml-3 h-4 flex-1 rounded bg-white/[0.03]" />
              </div>
            )}

            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className={
                isMobile
                  ? "h-full w-auto object-contain"
                  : "h-[calc(100%-2.25rem)] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              }
            />

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090D]/25 via-transparent to-transparent ${
                isMobile ? "rounded-[1.75rem]" : ""
              }`}
            />
          </div>
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
      <div
        aria-hidden="true"
        className={`absolute bottom-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`}
      />
    </div>
  );
}

function ProjectLinks({ project }) {
  const hasGithub = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  if (!hasGithub && !hasLive) {
    return null;
  }

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {hasGithub && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
        >
          <FaGithub size={14} />
          Source
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      )}

      {hasLive && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-[#5865F2]/20 bg-[#5865F2]/[0.08] px-4 py-2.5 text-xs font-medium text-[#AAB0FF] transition-all duration-300 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/15 hover:text-white"
        >
          <ExternalLink size={14} />
          Live Demo
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      )}
    </div>
  );
}

function ProjectInfo({ project, featured = false }) {
  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
          {project.category}
        </span>

        {featured && (
          <span className="rounded-full border border-[#5865F2]/15 bg-[#5865F2]/[0.06] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8B93FF]">
            Featured
          </span>
        )}
      </div>

      <h3
        className={`mt-3 font-['Space_Grotesk'] font-semibold tracking-[-0.045em] text-white ${
          featured
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`mt-5 leading-7 text-white/45 ${
          featured
            ? "text-sm sm:text-base sm:leading-8"
            : "text-sm"
        }`}
      >
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/45"
          >
            {technology}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </div>
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
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-7 lg:mb-24 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#5865F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-['Space_Grotesk'] text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
            >
              Things I&apos;ve built.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12 }}
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
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 ${
                  index % 2 !== 0
                    ? "lg:grid-cols-[0.7fr_1.3fr]"
                    : ""
                }`}
              >
                <div
                  className={
                    index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  }
                >
                  <ProjectPreview project={project} featured />
                </div>

                <div
                  className={
                    index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  }
                >
                  <ProjectInfo project={project} featured />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-28 border-t border-white/[0.06] pt-20 sm:mt-36 sm:pt-24">
            <div className="mb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                More experiments
              </p>

              <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                More things I&apos;ve built.
              </h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[1.5rem] border border-white/[0.07] bg-[#090C11] p-5 sm:p-7"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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