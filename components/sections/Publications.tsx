"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { publication } from "@/lib/data";

export function Publications() {
  return (
    <section id="publications" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <SectionHeader
          eyebrow="Research"
          title={
            <>
              Published
              <br />
              work.
            </>
          }
        />

        <RevealOnScroll>
          <motion.div
            className="border border-line-strong p-12 grid grid-cols-[1fr_auto] gap-10 items-center relative max-[720px]:grid-cols-1 max-[720px]:p-8"
            whileHover={{ borderColor: "rgba(201,164,100,0.5)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subtle glow */}
            <div className="absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brass/[0.05] to-transparent" />

            <div>
              <div className="font-mono text-[0.7rem] tracking-[0.06em] text-brass mb-[14px] break-words">
                {publication.label}
              </div>
              <h3 className="font-display italic text-[1.6rem] font-medium mb-[14px] leading-[1.3]">
                {publication.title}
              </h3>
              <p className="text-paper-dim text-[0.96rem] leading-[1.7] mb-5 max-w-[520px]">
                {publication.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <Button href={publication.url} external>
              Read on IEEE ↗
            </Button>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
