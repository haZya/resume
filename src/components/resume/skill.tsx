import type { ReactNode } from "react";

function Skill({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border bg-white/20 px-1.25 py-px">
      {children}
    </p>
  );
}

export default Skill;
