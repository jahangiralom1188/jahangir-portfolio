import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Rocket,
  Wrench,
} from "lucide-react";

const journey = [
  {
    year: "2024",
    title: "Started My CSE Journey",
    description:
      "Began my Diploma in Computer Science & Engineering and started building the foundation in programming, problem solving, and computer science.",
    label: "Foundation",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Started Building Projects",
    description:
      "Moved beyond classroom learning and started turning ideas into practical projects while exploring web development, databases, and application development.",
    label: "Building",
    icon: Wrench,
  },
  {
    year: "2026",
    title: "Building Real Applications",
    description:
      "Focused on larger personal projects including full-stack web applications and Android applications while strengthening my development workflow.",
    label: "Current",
    icon: Rocket,
    current: true,
  },
  {
    year: "2027",
    title: "Next Chapter",
    description:
      "Complete my Diploma in CSE, gain real-world experience, and continue growing toward becoming a stronger full-stack developer and builder.",
    label: "Next",
    icon: ArrowUpRight,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
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

function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#5865F2]/[0.025] blur-[140px]"
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
                transition={{ duration: 0.6 }}
                className="h-px w-8 origin-left bg-[#5865F2]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5865F2]">
                Journey
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-['Space_Grotesk'] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              From learning
              <br />
              to <span className="text-white/35">building.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="max-w-2xl lg:pt-10"
          >
            <p className="text-base leading-8 text-white/45 sm:text-lg sm:leading-9">
              A timeline of how my development journey has evolved — from
              learning the fundamentals to building applications and preparing
              for the next stage.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="relative mt-20 sm:mt-28"
        >
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-[#5865F2]/40 via-white/[0.08] to-transparent sm:left-[10px] lg:left-1/2 lg:-translate-x-1/2"
          />

          {journey.map((itemData, index) => {
            const Icon = itemData.icon;
            const isRight = index % 2 !== 0;

            return (
              <motion.article
                key={itemData.year}
                variants={item}
                className={`relative grid min-h-[260px] grid-cols-[40px_1fr] gap-6 lg:grid-cols-2 lg:gap-0 ${
                  index !== journey.length - 1
                    ? "pb-14 sm:pb-20"
                    : ""
                }`}
              >
                {/* Desktop year side */}
                <div
                  className={`hidden lg:block ${
                    isRight
                      ? "lg:col-start-2 lg:row-start-1 lg:pl-20"
                      : "lg:col-start-1 lg:row-start-1 lg:pr-20 lg:text-right"
                  }`}
                >
                  <div
                    className={`flex flex-col ${
                      isRight
                        ? "items-start"
                        : "items-end"
                    }`}
                  >
                    <span
                      className={`font-['Space_Grotesk'] text-6xl font-semibold tracking-[-0.06em] ${
                        itemData.current
                          ? "text-[#5865F2]"
                          : "text-white/15"
                      }`}
                    >
                      {itemData.year}
                    </span>

                    {itemData.current && (
                      <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#5865F2]/20 bg-[#5865F2]/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B93FF]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5865F2]" />
                        Currently here
                      </span>
                    )}
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative z-10 flex justify-center lg:absolute lg:left-1/2 lg:top-3 lg:-translate-x-1/2">
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex h-4 w-4 items-center justify-center rounded-full border bg-[#07090D] ${
                      itemData.current
                        ? "border-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.35)]"
                        : "border-white/20"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        itemData.current
                          ? "bg-[#5865F2]"
                          : "bg-white/20"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-1 ${
                    isRight
                      ? "lg:col-start-1 lg:row-start-1 lg:pr-20 lg:text-right"
                      : "lg:col-start-2 lg:row-start-1 lg:pl-20"
                  }`}
                >
                  {/* Mobile year */}
                  <div className="mb-5 flex items-center gap-3 lg:hidden">
                    <span
                      className={`font-['Space_Grotesk'] text-4xl font-semibold tracking-[-0.05em] ${
                        itemData.current
                          ? "text-[#5865F2]"
                          : "text-white/25"
                      }`}
                    >
                      {itemData.year}
                    </span>

                    {itemData.current && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#5865F2]/20 bg-[#5865F2]/[0.06] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8B93FF]">
                        Current
                      </span>
                    )}
                  </div>

                  <motion.div
                    whileHover={{
                      x: isRight ? -4 : 4,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`group relative border-white/[0.07] ${
                      isRight
                        ? "lg:border-r lg:pr-10"
                        : "lg:border-l lg:pl-10"
                    } ${
                      itemData.current
                        ? "rounded-[1.25rem] border bg-white/[0.015] p-6 lg:p-8"
                        : "border-l pl-6 lg:pl-10"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 ${
                        isRight ? "lg:justify-end" : ""
                      }`}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className={
                          itemData.current
                            ? "text-[#5865F2]"
                            : "text-white/25"
                        }
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                        {itemData.label}
                      </span>
                    </div>

                    <h3
                      className={`mt-4 font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.04em] sm:text-3xl ${
                        itemData.current
                          ? "text-white"
                          : "text-white/80"
                      }`}
                    >
                      {itemData.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-lg text-sm leading-7 text-white/35 ${
                        isRight ? "lg:ml-auto" : ""
                      }`}
                    >
                      {itemData.description}
                    </p>

                    {itemData.current && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                        }}
                        className="mt-7 h-px origin-left bg-gradient-to-r from-[#5865F2]/50 via-[#5865F2]/10 to-transparent"
                      />
                    )}
                  </motion.div>
                </div>
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
          }}
          className="mt-8 border-t border-white/[0.06] pt-10 sm:mt-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/25">
              The journey is still being written.
            </p>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
              <Building2 size={13} />
              <span>Keep building</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;