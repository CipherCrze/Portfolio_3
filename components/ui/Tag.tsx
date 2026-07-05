interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="font-mono text-[0.68rem] tracking-[0.04em] text-paper-dim border border-line-strong px-[11px] py-[5px] rounded-[2px]">
      {children}
    </span>
  );
}
