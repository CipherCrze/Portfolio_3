"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SOCIAL_LINKS } from "@/lib/constants";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const contactLinks = [
  {
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: Mail,
    label: SOCIAL_LINKS.email,
    external: false,
  },
  {
    href: SOCIAL_LINKS.github,
    icon: GitHubIcon,
    label: "github.com/CipherCrze",
    external: true,
  },
  {
    href: `tel:${SOCIAL_LINKS.phone.replace(/-/g, "")}`,
    icon: Phone,
    label: SOCIAL_LINKS.phone,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-[104px] relative">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px]">
        <RevealOnScroll className="text-center">
          <SectionHeader
            eyebrow="Get in touch"
            title={
              <>
                Let&apos;s build
                <br />
                something great.
              </>
            }
            centered
          />
          <p className="text-paper-dim text-[1.05rem] max-w-[460px] mx-auto mb-11">
            Open to full-time roles, research collaborations, and interesting
            projects. Drop me a line.
          </p>
          <div className="flex justify-center gap-[14px] flex-wrap">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-[0.8rem] text-paper-dim border border-line-strong px-6 py-[15px] flex items-center gap-[10px] rounded-[2px]"
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
                <link.icon size={15} />
                {link.label}
              </motion.a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
