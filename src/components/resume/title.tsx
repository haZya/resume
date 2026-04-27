function Title({ atsOptimized = false, content }: { atsOptimized?: boolean; content: string }) {
  if (atsOptimized) {
    return (
      <div>
        <h2 className="border-b border-slate-400 pb-1 text-sm font-bold tracking-wider text-slate-950">
          {content}
        </h2>
      </div>
    );
  }

  return (
    <div className="flex w-full place-items-center">
      <h2
        style={{ backgroundImage: "var(--resume-gradient-active)" }}
        className="w-fit rounded-full px-5 py-1 text-[13px] font-medium tracking-wider text-white"
      >
        {content}
      </h2>
      <hr
        style={{ backgroundImage: "var(--resume-gradient-active)" }}
        className="ml-2 h-0.5 grow rotate-180 border-0"
      />
    </div>
  );
}

export default Title;
