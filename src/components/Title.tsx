function Title({ content }: { content: string }) {
  return (
    <div className="flex w-full place-items-center">
      <h2 className="w-fit rounded-full bg-black px-5 py-1 text-[13px] font-medium tracking-wider text-white">{content}</h2>
      <hr className="grow border" />
    </div>
  );
}

export default Title;
