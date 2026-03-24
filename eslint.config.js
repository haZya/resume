import antfu from "@antfu/eslint-config";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

export default antfu(
  {
    ignores: ["dist"],
    react: true,
    typescript: true,
    formatters: true,
    isInEditor: false,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...betterTailwindcss.configs.recommended,
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/index.css",
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "warn",
        {
          tsconfig: { rootDir: "." },
        },
      ],
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unknown-classes": "off",
    },
  },
);
