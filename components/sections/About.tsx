"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { skillCategories } from "@/lib/data";
import { SOCIAL_LINKS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <div className="grid grid-cols-2 gap-[72px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Left — Text */}
          <div>
            <SectionHeader
              eyebrow="About"
              title={
                <>
                  Engineer at heart,
                  <br />
                  researcher by choice.
                </>
              }
            />
            <RevealOnScroll delay={0.1}>
              <div className="space-y-[19px] mt-8">
                <p className="text-paper-dim text-[1.05rem] leading-[1.75]">
                  I&apos;m{" "}
                  <strong className="text-paper font-semibold">
                    Arnav Sharma
                  </strong>
                  , an incoming <strong className="text-paper font-semibold">Data Analyst @ Deloitte USI</strong> and Graduate in Data Science &amp; Engineering from <strong className="text-paper font-semibold">Manipal University Jaipur</strong>.
                </p>
                <p className="text-paper-dim text-[1.05rem] leading-[1.75]">
                  My work sits across{" "}
                  <strong className="text-paper font-semibold">
                    RAG architectures, NLP, GPU computing
                  </strong>
                  , and full-stack Python — I lead the Projects division at{" "}
                  <strong className="text-paper font-semibold">
                    ANOVA MUJ
                  </strong>
                  , the university&apos;s AI club.
                </p>
                <p className="text-paper-dim text-[1.05rem] leading-[1.75]">
                  I hold a Pre-Placement Offer from{" "}
                  <strong className="text-paper font-semibold">Deloitte</strong>{" "}
                  after winning their Capstone competition, and published
                  GPU-optimization research on{" "}
                  <strong className="text-paper font-semibold">
                    IEEE Xplore
                  </strong>
                  .
                </p>
                <p className="text-paper-dim text-[1.05rem] leading-[1.75]">
                  Based in Bengaluru, Karnataka.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap mt-[30px]">
                <motion.a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="font-mono text-[0.75rem] text-paper-dim border border-line-strong px-[18px] py-[11px] flex items-center gap-[9px] rounded-[2px]"
                  whileHover={{
                    color: "#c9a464",
                    borderColor: "rgba(201,164,100,0.5)",
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <Mail size={14} />
                  Email
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.75rem] text-paper-dim border border-line-strong px-[18px] py-[11px] flex items-center gap-[9px] rounded-[2px]"
                  whileHover={{
                    color: "#c9a464",
                    borderColor: "rgba(201,164,100,0.5)",
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
                  GitHub
                </motion.a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Skills Grid */}
          <RevealOnScroll delay={0.15}>
            <div className="grid grid-cols-2 border border-line">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className={`p-6 transition-colors duration-300 hover:bg-brass/[0.035] ${
                    i % 2 === 0 ? "border-r border-line" : ""
                  } ${i < 2 ? "border-b border-line" : ""} max-[520px]:border-r-0 max-[520px]:border-b max-[520px]:last:border-b-0`}
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <h4 className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-brass mb-[14px] font-medium">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-[7px]">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[0.72rem] text-paper-dim bg-paper/[0.04] px-[10px] py-[5px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
