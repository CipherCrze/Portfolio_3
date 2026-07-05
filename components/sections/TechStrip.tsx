"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { techBadges, type TechBadge } from "@/lib/data";

interface CircularProgressProps {
  percentage: number;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

function CircularProgress({
  percentage,
  color = "var(--color-brass)",
  size = 38,
  strokeWidth = 3.5,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="rotate-[-90deg]" width={size} height={size}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(237, 233, 225, 0.06)"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (percentage / 100) * circumference,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          strokeLinecap="round"
        />
      </svg>
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center font-mono text-[0.62rem] text-paper-dim font-medium">
        {percentage}%
      </div>
    </div>
  );
}

interface ExpandedCardProps {
  badge: TechBadge;
  onMouseLeave: () => void;
}

function ExpandedCard({ badge, onMouseLeave }: ExpandedCardProps) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] bg-ink-2 border border-brass/50 rounded-[4px] p-5 shadow-[0_0_25px_rgba(225,6,0,0.22)] backdrop-blur-[14px] z-50 flex flex-col gap-3 cursor-default select-none pointer-events-auto"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      onMouseLeave={onMouseLeave}
    >
      {/* Header Info */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-display font-semibold text-[1.15rem] leading-none text-paper group-hover:text-brass-bright mb-1">
            {badge.title}
          </h4>
          <span className="font-mono text-[0.66rem] tracking-[0.05em] uppercase text-brass font-medium">
            {badge.proficiency}
          </span>
        </div>
        <CircularProgress percentage={badge.percentage} />
      </div>

      {/* Animated proficiency horizontal bar */}
      <div className="space-y-1 mt-1">
        <div className="flex justify-between items-center font-mono text-[0.6rem] text-paper-faint">
          <span>Proficiency Index</span>
          <span className="text-paper-dim">{badge.percentage}%</span>
        </div>
        <div className="w-full h-1.5 bg-ink rounded-full overflow-hidden border border-line">
          <motion.div
            className="h-full bg-gradient-to-r from-brass to-brass-bright"
            initial={{ width: 0 }}
            animate={{ width: `${badge.percentage}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Short description */}
      <p className="text-paper-dim text-[0.78rem] leading-[1.45] mt-1">
        {badge.description}
      </p>

      {/* Primary use cases tag list */}
      <div className="border-t border-line/60 pt-3 mt-1">
        <span className="font-mono text-[0.58rem] text-paper-faint uppercase block mb-1.5 tracking-wider">
          Core Applications
        </span>
        <div className="flex flex-wrap gap-1">
          {badge.useCases.split(", ").map((uc) => (
            <span
              key={uc}
              className="font-mono text-[0.62rem] text-paper-dim bg-paper/[0.04] px-2 py-0.5 border border-line rounded-[1px]"
            >
              {uc}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function TechStrip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <RevealOnScroll>
      <div className="relative">
        <div className="max-w-[var(--container-max)] mx-auto flex items-center justify-center gap-[26px] flex-wrap px-8 py-[34px] max-[640px]:px-6">
          <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-paper-faint select-none">
            Tools &amp; Stack
          </span>
          <div className="flex gap-3 flex-wrap justify-center relative">
            {techBadges.map((badge, i) => {
              const isHovered = hoveredIndex === i;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <div
                  key={badge.label}
                  className="relative w-[50px] h-[50px] flex items-center justify-center z-10"
                  onMouseEnter={() => setHoveredIndex(i)}
                >
                  {/* Compact badge button (idle state) */}
                  <motion.span
                    className="w-[50px] h-[50px] rounded-full border border-line-strong shrink-0 flex items-center justify-center font-mono text-[0.66rem] text-paper-dim cursor-pointer select-none"
                    animate={{
                      opacity: isHovered ? 0 : isAnyHovered ? 0.35 : 1,
                      scale: isHovered ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    title={badge.title}
                  >
                    {badge.label}
                  </motion.span>

                  {/* Expanded Overlay Card */}
                  <AnimatePresence>
                    {isHovered && (
                      <ExpandedCard
                        badge={badge}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
