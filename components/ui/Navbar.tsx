"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ScrollProgress } from "./ScrollProgress";

const sectionIds = NAV_ITEMS.map((item) =>
  item.href.replace("#", "")
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(useMemo(() => ["hero", ...sectionIds], []));

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[150] border-b transition-all duration-300 ${
          scrolled
            ? "bg-ink/82 backdrop-blur-[14px] border-line"
            : "bg-transparent border-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.1 }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-8 py-[22px] flex items-center justify-between max-[640px]:px-[22px] max-[640px]:py-[18px]">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-[10px] font-mono text-[0.78rem] tracking-[0.09em] text-paper group"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-[15px] h-[15px] text-brass transition-transform duration-300 group-hover:rotate-90"
            >
              <circle cx="3" cy="3" r="1.4" />
              <circle cx="8" cy="3" r="1.4" />
              <circle cx="13" cy="3" r="1.4" />
              <circle cx="3" cy="8" r="1.4" />
              <circle cx="8" cy="8" r="1.4" opacity=".4" />
              <circle cx="13" cy="8" r="1.4" />
              <circle cx="3" cy="13" r="1.4" />
              <circle cx="8" cy="13" r="1.4" />
              <circle cx="13" cy="13" r="1.4" />
            </svg>
            ARNAV SHARMA
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="flex gap-[30px] max-[860px]:hidden"
            aria-label="Section navigation"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = active === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-[0.7rem] tracking-[0.07em] uppercase relative pb-[5px] transition-colors duration-250 ${
                    isActive ? "text-paper" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="absolute left-0 bottom-0 h-px bg-brass"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "block" }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-[22px]">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center text-paper-dim hover:text-brass transition-colors duration-250"
            >
              <svg viewBox="0 0 16 16" width="19" height="19" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
            </a>
            <button
              className="hidden max-[860px]:block bg-transparent border-none text-paper p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className="flex flex-col min-[861px]:hidden bg-ink/98 border-b border-line overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-[0.82rem] tracking-[0.05em] uppercase text-paper-dim px-[22px] py-4 border-t border-line hover:text-brass transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
