import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Rocket,
  Wrench,
} from "lucide-react";

const journey = [
  {
    year: "2024",
    title: "Started My CSE Journey",
    description:
      "Started my Diploma in Computer Science & Engineering and began building a foundation in programming, computer systems, and software development.",
    status: "Foundation",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Started Building Projects",
    description:
      "Moved beyond classroom learning and started turning ideas into practical projects involving web development, databases, and applications.",
    status: "Building",
    icon: Wrench,
  },
  {
    year: "2026",
    title: "Building Real Applications",
    description:
      "Working on projects such as StudyHub and DailyFlow while strengthening my skills across full-stack development, Android, databases, and software design.",
    status: "Current",
    icon: Rocket,
  },
  {
    year: "2027",
    title: "Next Chapter",
    description:
      "Complete my Diploma in CSE and take the next step toward professional software development, real-world experience, and bigger projects.",
    status: "Next",
    icon: ArrowUpRight,
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#090C11] py-28 sm:py-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-220px] top-1/3 h-[600px] w-[600px] rounded-full bg-[#5865F2]/[0.035] blur-[150px]"
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
                My Journey
              </span>
            </div>

            <p className="mt-6 hidden max-w-[190px] text-xs leading-6 text-white/25 lg:block">
              A timeline of learning, building, and the road ahead.
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
              Still
              <br />
              <span className="text-white/30">becoming.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
            >
              Every project, experiment, and challenge adds another layer to
              the journey. I&apos;m focused on learning by building and
              improving with every step.
            </motion.p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-20 sm:mt-24">
          {/* Desktop timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[31px] top-8 hidden w-px bg-gradient-to-b from-[#5865F2]/50 via-white/[0.08] to-transparent lg:block"
          />

          <div className="space-y-8 lg:space-y-0">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isCurrent = item.status === "Current";

              return (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative lg:min-h-[190px]"
                >
                  {/* ================= DESKTOP NODE ================= */}

                  <div className="absolute left-0 top-0 z-10 hidden lg:flex">
                    <div
                      className={`flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#090C11] transition-all duration-500 ${
                        isCurrent
                          ? "border-[#5865F2]/50 shadow-[0_0_35px_rgba(88,101,242,0.16)]"
                          : "border-white/[0.08] group-hover:border-white/[0.18]"
                      }`}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className={
                          isCurrent
                            ? "text-[#7C86FF]"
                            : "text-white/30 transition-colors duration-300 group-hover:text-white/60"
                        }
                      />
                    </div>
                  </div>

                  {/* ================= MOBILE HEADER ================= */}

                  <div className="mb-5 flex items-center gap-3 lg:hidden">
                    <span className="font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.03em] text-white">
                      {item.year}
                    </span>

                    <span className="h-px w-8 bg-white/10" />

                    <span
                      className={`text-[9px] font-medium uppercase tracking-[0.18em] ${
                        isCurrent ? "text-[#7C86FF]" : "text-white/25"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="lg:ml-[110px] lg:grid lg:grid-cols-[170px_1fr] lg:gap-12">
                    {/* Year */}
                    <div className="hidden lg:block">
                      <span
                        className={`font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.04em] ${
                          isCurrent ? "text-white" : "text-white/60"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="relative overflow-hidden border-y border-white/[0.06] py-7 transition-colors duration-500 group-hover:border-white/[0.12] sm:py-8 lg:pr-8">
                      {/* Hover glow */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#5865F2]/10 blur-[75px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                          isCurrent ? "opacity-30" : ""
                        }`}
                      />

                      <div className="relative">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="max-w-3xl">
                            <h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                              {item.title}
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                              {item.description}
                            </p>
                          </div>

                          {/* Status */}
                          <span
                            className={`w-fit shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] ${
                              isCurrent
                                ? "border-[#5865F2]/20 bg-[#5865F2]/[0.08] text-[#7C86FF]"
                                : "border-white/[0.07] bg-white/[0.02] text-white/30"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================= FOOTNOTE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center gap-3 border-t border-white/[0.06] pt-7"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5865F2]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/20">
            The journey continues
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;