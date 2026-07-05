"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brass text-ink hover:bg-brass-bright",
  ghost:
    "border border-line-strong text-paper hover:border-brass-soft hover:text-brass-bright",
};

export function Button({
  variant = "primary",
  children,
  external,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.a
      className={`inline-flex items-center gap-2 font-mono text-[0.76rem] tracking-[0.07em] uppercase font-medium px-[26px] py-[15px] rounded-[2px] whitespace-nowrap cursor-pointer transition-colors duration-300 ${variantStyles[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
    >
      {children}
    </motion.a>
  );
}
