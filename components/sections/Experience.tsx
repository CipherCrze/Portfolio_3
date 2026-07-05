"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve
              <br />
              worked.
            </>
          }
        />

        {experiences.map((exp, i) => (
          <RevealOnScroll key={exp.role} delay={i * 0.08}>
            <motion.div
              className={`grid grid-cols-[190px_1fr] gap-x-10 gap-y-3 py-11 border-t border-line max-[720px]:grid-cols-1 max-[720px]:gap-[10px] ${
                i === experiences.length - 1 ? "border-b border-line" : ""
              }`}
              whileHover={{ paddingLeft: 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="font-mono text-[0.72rem] text-paper-faint tracking-[0.03em]">
                  {exp.period}
                </div>
                <div className="text-[0.88rem] text-paper-dim mt-[5px]">
                  {exp.location}
                </div>
              </div>
              <div>
                <div className="font-display text-[1.4rem] font-semibold mb-[5px]">
                  {exp.role}
                </div>
                <div className="font-mono text-[0.78rem] text-brass tracking-[0.02em] mb-4">
                  {exp.org}
                </div>
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-paper-dim text-[0.95rem] py-[5px] pl-5 relative leading-[1.6]"
                    >
                      <span className="absolute left-0 text-paper-faint">
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {exp.badge && (
                  <motion.span
                    className="inline-flex items-center gap-[7px] font-mono text-[0.66rem] tracking-[0.05em] uppercase text-ink bg-brass px-[13px] py-[7px] mt-4 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    {exp.badge}
                  </motion.span>
                )}
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
