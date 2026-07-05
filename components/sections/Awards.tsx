"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { awards } from "@/lib/data";

const iconMap = {
  trophy: Trophy,
  medal: Award,
  rocket: Rocket,
};

export function Awards() {
  return (
    <section id="awards" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <SectionHeader
          eyebrow="Honors & Awards"
          title={<>Recognition.</>}
        />

        <div className="grid grid-cols-3 border border-line max-[780px]:grid-cols-1">
          {awards.map((award, i) => {
            const Icon = iconMap[award.iconType];
            return (
              <RevealOnScroll key={award.title} delay={i * 0.08}>
                <motion.div
                  className={`py-11 px-8 text-center transition-colors duration-300 hover:bg-brass/[0.035] ${
                    i < awards.length - 1
                      ? "border-r border-line max-[780px]:border-r-0 max-[780px]:border-b max-[780px]:border-line"
                      : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <Icon
                    size={34}
                    className="text-brass mx-auto mb-5"
                    strokeWidth={1.3}
                  />
                  <div className="font-display text-[1.05rem] font-semibold mb-2 leading-[1.4]">
                    {award.title}
                  </div>
                  <div className="font-mono text-[0.68rem] text-paper-faint tracking-[0.02em]">
                    {award.org}
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
