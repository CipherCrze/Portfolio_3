"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] z-[200]"
      style={{
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, var(--color-brass), var(--color-brass-bright))",
      }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
}
