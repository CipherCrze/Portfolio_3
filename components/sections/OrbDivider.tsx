"use client";

import { motion } from "framer-motion";

export function OrbDivider() {
  return (
    <div
      className="flex justify-center items-center py-[90px] relative"
      aria-hidden="true"
    >
      <motion.div
        className="w-[170px] h-[170px] rounded-full relative"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(201,164,100,0.32), rgba(201,164,100,0.04) 60%, transparent 76%)",
        }}
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Inner ring */}
        <span className="absolute -inset-[42px] rounded-full border border-line" />
        {/* Outer ring */}
        <span className="absolute -inset-[86px] rounded-full border border-line" />
        {/* Ferrari red subtle glow */}
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_65%_70%,rgba(225,6,0,0.06),transparent_60%)]" />
      </motion.div>
    </div>
  );
}
