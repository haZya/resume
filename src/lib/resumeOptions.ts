export const gradientOptions = [
  { label: "Slate Gray", value: "slate-gray", cssVar: "--resume-gradient-slate-gray" },
  { label: "Cobalt", value: "cobalt", cssVar: "--resume-gradient-cobalt" },
  { label: "Midnight", value: "midnight", cssVar: "--resume-gradient-midnight" },
  { label: "Night Petal", value: "night-petal", cssVar: "--resume-gradient-night-petal" },
  { label: "Ocean Mint", value: "ocean-mint", cssVar: "--resume-gradient-ocean-mint" },
  { label: "Plum", value: "plum", cssVar: "--resume-gradient-plum" },
] as const;

export type GradientValue = (typeof gradientOptions)[number]["value"];

export const DEFAULT_GRADIENT: GradientValue = "cobalt";

export function getGradientCssVar(selectedGradient: GradientValue): string {
  return gradientOptions.find(option => option.value === selectedGradient)?.cssVar ?? "--resume-gradient-cobalt";
}
