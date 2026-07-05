"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { heroFacts } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[130px] pb-[60px] overflow-hidden"
    >
      {/* Ambient background glow (kept extremely subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brass/[0.015] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-ferrari/[0.01] blur-[100px]" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px] w-full">
        {/* Copy */}
        <motion.div
          className="relative z-[2] max-w-[680px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar */}
          <motion.div
            className="w-[78px] h-[78px] rounded-full relative flex items-center justify-center mb-[30px]"
            style={{
              background: "linear-gradient(160deg, var(--color-ink-2), var(--color-ink))",
            }}
            variants={itemVariants}
          >
            <span className="font-display italic font-semibold text-[1.55rem] text-brass-bright">
              AS
            </span>
            {/* Conic border ring */}
            <span
              className="absolute inset-0 rounded-full"
              style={{
                padding: "1px",
                background:
                  "conic-gradient(from 200deg, var(--color-brass), transparent 35%, transparent 65%, var(--color-brass))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            {/* Glow */}
            <span className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(201,164,100,0.12),transparent_72%)] -z-[1]" />
          </motion.div>

          {/* Name */}
          <motion.p
            className="font-mono text-[0.76rem] tracking-[0.16em] uppercase text-paper-dim mb-[26px] flex items-center gap-3"
            variants={itemVariants}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-brass shrink-0" />
            <span>
              <b className="text-brass font-medium">Arnav Sharma</b> — Data
              Science &amp; AI/ML Engineering
            </span>
          </motion.p>

          {/* Title */}
          <motion.h1
            className="font-display font-semibold tracking-[-0.02em] text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.08] mb-7"
            variants={itemVariants}
          >
            Systems that retrieve,
            <br />
            reason, and <em className="italic text-brass font-medium">respond</em>.
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-[1.08rem] text-paper-dim max-w-[480px] mb-[38px] leading-[1.7]"
            variants={itemVariants}
          >
            Incoming <strong className="text-paper font-semibold">Data Analyst @ Deloitte USI</strong> and Graduate of{" "}
            <strong className="text-paper font-semibold">
              Manipal University Jaipur
            </strong>
            , holding a published{" "}
            <strong className="text-paper font-semibold">IEEE Xplore</strong>{" "}
            paper on GPU-accelerated computing.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex gap-[14px] flex-wrap mb-[52px]"
            variants={itemVariants}
          >
            <Button href="#projects">View Projects</Button>
            <Button
              variant="ghost"
              href={SOCIAL_LINKS.ieee}
              external
            >
              Read the Paper ↗
            </Button>
            <Button
              variant="ghost"
              href={SOCIAL_LINKS.github}
              external
            >
              GitHub ↗
            </Button>
          </motion.div>

          {/* Facts */}
          <motion.div
            className="font-mono text-[0.7rem] tracking-[0.05em] uppercase text-paper-faint pt-[26px] border-t border-line flex flex-wrap gap-y-[10px]"
            variants={itemVariants}
          >
            {heroFacts.map((fact, i) => (
              <span key={fact}>
                {fact}
                {i < heroFacts.length - 1 && (
                  <span className="mx-3 text-line-strong">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
