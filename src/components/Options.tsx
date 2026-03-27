import type { GradientValue } from "../lib/resumeOptions";

import { cn } from "../lib/cn";
import { gradientOptions } from "../lib/resumeOptions";
import Toggle from "./Toggle";

type OptionsProps = {
  displayPhoto: boolean;
  selectedGradient: GradientValue;
  setDisplayPhoto: (value: boolean) => void;
  setSelectedGradient: (value: GradientValue) => void;
};

function Options({
  displayPhoto,
  selectedGradient,
  setDisplayPhoto,
  setSelectedGradient,
}: OptionsProps) {
  return (
    <section id="options" className="m-12 flex flex-wrap items-center gap-12 print:hidden">
      <Toggle label="Photo" value={displayPhoto} toggle={() => setDisplayPhoto(!displayPhoto)} />
      <div className="flex flex-col justify-center gap-2">
        <span className="font-mono text-sm">Theme</span>
        <div className="flex gap-2">
          {gradientOptions.map(option => (
            <button
              key={option.value}
              type="button"
              className={cn(
                "rounded-md border px-3 py-1.5 font-mono text-xs tracking-wide transition-colors",
                selectedGradient === option.value
                  ? "border-slate-800 bg-slate-900 text-white"
                  : "cursor-pointer border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
              )}
              onClick={() => setSelectedGradient(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Options;
