function Title({ content }: { content: string }) {
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
