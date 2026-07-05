"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data";

// ─── Dashboard Mockup (Synergy AI) ────────────────────────
function MockupDashboard() {
  const barHeights = [35, 68, 50, 88, 30, 60, 45, 75, 40];
  return (
    <div className="w-full h-[180px] bg-ink-3/80 border-b border-line flex flex-col justify-between p-4 relative overflow-hidden group/mock">
      {/* Dynamic Grid stats */}
      <div className="flex gap-2 mb-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1 h-7 bg-ink/50 border border-line/50 rounded-[2px] flex items-center px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brass/40 animate-pulse mr-2" />
            <div className="w-8 h-1 bg-paper-faint/30 rounded" />
          </div>
        ))}
      </div>
      {/* Pulse bars */}
      <div className="flex items-end gap-1.5 h-[65px] px-1">
        {barHeights.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-[1px] bg-gradient-to-t from-brass/20 to-brass/70 group-hover/mock:to-ferrari/70"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.04,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </div>
      {/* Decorative text lines */}
      <div className="space-y-1.5 mt-2">
        <div className="w-[60%] h-1 bg-paper-faint/30 rounded" />
        <div className="w-[40%] h-1 bg-paper-faint/20 rounded" />
      </div>
    </div>
  );
}

// ─── Chat Mockup (SympEase) ───────────────────────────────
function MockupChat() {
  return (
    <div className="w-full h-[180px] bg-ink-3/80 border-b border-line flex flex-col justify-end p-4 gap-2 relative overflow-hidden">
      {/* Animated chat conversation */}
      <div className="flex flex-col gap-2 max-w-full">
        <motion.div
          className="self-start bg-ink/60 border border-line/60 rounded-[8px] rounded-tl-none py-1.5 px-3 max-w-[80%]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-24 h-1.5 bg-paper-dim/40 rounded mb-1" />
          <div className="w-16 h-1 bg-paper-faint/30 rounded" />
        </motion.div>

        <motion.div
          className="self-end bg-brass/[0.08] border border-brass-soft/40 rounded-[8px] rounded-tr-none py-1.5 px-3 max-w-[70%]"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-16 h-1.5 bg-brass-bright/50 rounded" />
        </motion.div>

        <motion.div
          className="self-start bg-ink/60 border border-line/60 rounded-[8px] rounded-tl-none py-1.5 px-3 max-w-[85%]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-32 h-1.5 bg-paper-dim/40 rounded mb-1" />
          <div className="w-24 h-1 bg-paper-faint/30 rounded" />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Music Wave Mockup (MELR) ──────────────────────────────
function MockupAudio() {
  const bars = Array.from({ length: 15 });
  return (
    <div className="w-full h-[180px] bg-ink-3/80 border-b border-line flex items-center justify-center p-4 relative overflow-hidden group/audio">
      {/* Decorative center record outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="w-28 h-28 rounded-full border border-paper" />
        <div className="w-16 h-16 rounded-full border border-paper absolute" />
      </div>

      <div className="flex items-center gap-1 h-[70px]">
        {bars.map((_, i) => {
          // Pulse loop using Framer Motion keyframes
          return (
            <motion.span
              key={i}
              className="w-1 bg-brass/30 group-hover/audio:bg-brass rounded-full"
              style={{ height: 16 }}
              animate={{
                height: [
                  16,
                  16 + Math.sin(i * 0.5) * 25 + Math.random() * 15,
                  16,
                ],
              }}
              transition={{
                duration: 1.2 + Math.sin(i) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── Summarizer Mockup (BOOLEAN) ──────────────────────────
function MockupSummary() {
  return (
    <div className="w-full h-[180px] bg-ink-3/80 border-b border-line flex gap-3 p-4 relative overflow-hidden">
      {/* Input Text Doc Panel */}
      <div className="flex-1 flex flex-col gap-1.5 border-r border-line/40 pr-3 opacity-40">
        <div className="w-full h-2 bg-paper/40 rounded" />
        <div className="w-[90%] h-1 bg-paper-dim/40 rounded" />
        <div className="w-[95%] h-1 bg-paper-dim/40 rounded" />
        <div className="w-[80%] h-1 bg-paper-dim/40 rounded" />
        <div className="w-full h-1 bg-paper-dim/40 rounded" />
        <div className="w-[70%] h-1 bg-paper-dim/40 rounded" />
      </div>
      {/* Clean output Summary list */}
      <div className="flex-1 flex flex-col justify-center gap-2">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="flex items-start gap-1.5"
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + n * 0.15, duration: 0.4 }}
          >
            <span className="w-1 h-1 rounded-full bg-brass mt-1 shrink-0" />
            <div className="w-full space-y-1">
              <div className="h-1 bg-brass-bright/60 rounded" style={{ width: `${90 - n * 12}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const mockups = {
  dashboard: MockupDashboard,
  chat: MockupChat,
  audio: MockupAudio,
  summary: MockupSummary,
};

export function Projects() {
  return (
    <section id="projects" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Completed
              <br />
              work.
            </>
          }
          lede="A curated collection of real, functional software projects with public repositories."
        />

        {/* Cohesive 2x2 Grid representing all 4 projects cleanly without empty space */}
        <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          {projects.map((project, i) => {
            const Mockup = mockups[project.mockupType];
            return (
              <RevealOnScroll key={project.title} delay={i * 0.08}>
                <div className="group bg-ink-2 border border-line hover:border-brass-soft rounded-[3px] overflow-hidden flex flex-col h-full shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition-all duration-300">
                  {/* Browser Mockup Frame Container */}
                  <div className="w-full select-none">
                    <div className="w-full bg-ink px-4 py-[11px] border-b border-line flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        <span className="w-2 h-2 rounded-full bg-line-strong group-hover:bg-ferrari/60 transition-colors" />
                        <span className="w-2 h-2 rounded-full bg-line-strong group-hover:bg-brass/60 transition-colors" />
                        <span className="w-2 h-2 rounded-full bg-line-strong" />
                      </div>
                      <span className="font-mono text-[0.62rem] text-paper-faint tracking-[0.05em] uppercase">
                        {project.sublabel}
                      </span>
                    </div>
                    <Mockup />
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="font-mono text-[0.64rem] tracking-[0.08em] text-paper-dim uppercase mb-1">
                        {project.label}
                      </div>
                      <h3 className="font-display text-[1.4rem] font-semibold mb-1 transition-colors duration-300 group-hover:text-brass-bright">
                        {project.title}
                      </h3>
                      <div className="font-mono text-[0.68rem] text-brass tracking-[0.03em] mb-4">
                        {project.subtitle}
                      </div>
                      <p className="text-paper-dim text-[0.9rem] leading-[1.6] mb-5">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>

                      {project.award && (
                        <div className="font-mono text-[0.66rem] text-brass-bright/90 mb-5 flex items-center gap-1.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-ferrari shrink-0" />
                          {project.award}
                        </div>
                      )}

                      {/* GitHub Button (Live demo omitted since none exist) */}
                      <div className="flex items-center justify-between border-t border-line/50 pt-4 mt-2">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[0.72rem] text-paper-dim hover:text-brass flex items-center gap-2 transition-colors duration-250 cursor-pointer"
                          whileHover={{ x: 3 }}
                        >
                          View Repository{" "}
                          <ArrowUpRight size={13} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
