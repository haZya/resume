import type { GradientValue } from "../lib/resumeOptions";

import { cn } from "../lib/cn";
import { gradientOptions } from "../lib/resumeOptions";
import Toggle from "./Toggle";

type OptionsProps = {
  atsOptimized: boolean;
  displayPhoto: boolean;
  selectedGradient: GradientValue;
  setAtsOptimized: (value: boolean) => void;
  setDisplayPhoto: (value: boolean) => void;
  setSelectedGradient: (value: GradientValue) => void;
};

function Options({
  atsOptimized,
  displayPhoto,
  selectedGradient,
  setAtsOptimized,
  setDisplayPhoto,
  setSelectedGradient,
}: OptionsProps) {
  return (
    <section id="options" className="m-12 flex flex-col gap-10 print:hidden">
      <div className="flex flex-wrap items-end gap-12">
        <Toggle id="ats-optimized" label="ATS Format" value={atsOptimized} toggle={() => setAtsOptimized(!atsOptimized)} />
        <button
          type="button"
          className="cursor-pointer rounded-md border border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs tracking-wide text-white transition-colors hover:bg-slate-800"
          onClick={() => window.print()}
        >
          Print / Download
        </button>
      </div>
      {!atsOptimized && (
        <div className="flex flex-wrap gap-12">
          <Toggle id="display-photo" label="Photo" value={displayPhoto} toggle={() => setDisplayPhoto(!displayPhoto)} />
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
        </div>
      )}
    </section>
  );
}

export default Options;
