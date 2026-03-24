import type { FC, SVGProps } from "react";

function Link({ icon: Icon, href, content }: { icon: FC<SVGProps<SVGSVGElement>>; href: string; content: string }) {
  return (
    <a className="flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5" href={href} target="_blank" rel="noopener">
      <Icon className="size-4 shrink-0" />
      <p>{content}</p>
    </a>
  );
}

export default Link;
