import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <RevealOnScroll className={`mb-[60px] max-w-[640px] ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <span
        className={`font-mono text-[0.72rem] tracking-[0.18em] uppercase text-brass flex items-center gap-3 mb-[22px] ${
          centered ? "justify-center" : ""
        }`}
      >
        {!centered && (
          <span className="w-[26px] h-px bg-brass-soft shrink-0" />
        )}
        {eyebrow}
      </span>
      <h2 className="font-display font-semibold tracking-[-0.01em] text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.14]">
        {title}
      </h2>
      {lede && (
        <p className="mt-[18px] text-paper-dim text-[1.02rem] max-w-[520px]">
          {lede}
        </p>
      )}
    </RevealOnScroll>
  );
}
