import type { FC, SVGProps } from "react";

import { cn } from "../lib/cn";

function Link({ atsOptimized = false, icon: Icon, href, content }: { atsOptimized?: boolean; icon: FC<SVGProps<SVGSVGElement>>; href?: string; content: string }) {
  return (
    <a
      className={cn(
        atsOptimized
          ? "inline-flex leading-snug"
          : "flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-0.75 leading-tight",
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {!atsOptimized && <Icon className="size-3 shrink-0" />}
      <span>{content}</span>
    </a>
  );
}

export default Link;
