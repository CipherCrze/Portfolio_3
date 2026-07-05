export function Footer() {
  return (
    <footer className="py-11 border-t border-line">
      <div className="max-w-[var(--container-max)] mx-auto px-8 max-[640px]:px-[22px] flex justify-between items-center flex-wrap gap-3">
        <p className="font-mono text-[0.7rem] text-paper-faint tracking-[0.02em]">
          © {new Date().getFullYear()} Arnav Sharma. Designed &amp; built with
          intent.
        </p>
        <p className="font-mono text-[0.7rem] text-paper-faint tracking-[0.02em]">
          Bengaluru, India
        </p>
      </div>
    </footer>
  );
}
