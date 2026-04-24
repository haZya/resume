# AGENTS.md

## Purpose

- This repository is a single-page resume site built with React 19, TypeScript, Vite 8, and Tailwind CSS 4.
- Use this file as the operating guide for coding agents working in this repo.
- Prefer small, focused edits that preserve the current print-style resume presentation.
- Preserve both resume modes: the designed visual resume and the ATS-optimized one-page format.
- Keep changes aligned with the existing stack instead of introducing new tools casually.

## Agent Rules Audit

- Checked `.cursor/rules/`: none found.
- Checked `.cursorrules`: none found.
- Checked `.github/copilot-instructions.md`: none found.
- There are no repo-specific agent rules besides this document.

## Project Layout

- `src/main.tsx` mounts the app and loads fonts and global CSS.
- `src/App.tsx` contains the main resume page markup, top-level UI state, and ATS-specific section ordering.
- `src/components/` contains small presentational components, including `Options.tsx` for the print-hidden controls.
- `src/lib/resumeOptions.ts` contains the gradient option values and helpers used by the options UI.
- `src/index.css` is the Tailwind entrypoint and global token file.
- `src/App.css` contains the page-level gradient variables, ATS layout rules, and print-specific A4 styling.
- `src/env.d.ts` defines typed Vite env variables.
- `vite.config.ts` wires up Tailwind, React, and the React Compiler preset.

## Package Manager

- Use `npm` for installs and scripts.
- Keep `package-lock.json`; do not switch to `pnpm`, `yarn`, or `bun` unless explicitly requested.

## Setup

- Install dependencies with `npm install`.
- Copy `.env.example` to `.env.local` for local contact values.
- Supported env vars today: `VITE_PHONE`, `VITE_EMAIL`.
- Client code must use `import.meta.env`; `process.env` is lint-blocked.

## Build, Lint, Test, and Preview Commands

- `npm run dev` - start the Vite dev server.
- `npm run build` - run `tsc -b` and create a production bundle.
- `npm run lint` - run ESLint across the repo, including this `AGENTS.md` file.
- `npm run preview` - preview the production build locally.
- `npm exec -- eslint . --fix` - apply safe lint autofixes repo-wide.
- `npm exec -- eslint src/App.tsx --fix` - lint and autofix a single file.

## Test Status

- There is no test framework configured in `package.json`.
- There is no `test` script.
- No `vitest`, `jest`, or `playwright` config files are present.
- No `*.test.*` or `*.spec.*` files exist in the repo.

## Single-Test Guidance

- There is currently no supported single-test command because no test runner exists.
- Do not invent `npm run test`, `npx vitest`, or similar commands in automation.
- Until a test runner is added, use `npm run lint` and `npm run build` for verification.
- If tests are added later, update this file with the exact full-suite and single-test commands.

## Verified Commands

- `npm run build` succeeds on the current codebase.
- `npm run lint` succeeds when repository files, including `AGENTS.md`, match the formatter and lint rules.
- The production build emits a large chunk warning from Vite; this is only a warning.

## Tech Stack Notes

- React 19 uses the automatic JSX runtime.
- TypeScript is in strict mode.
- Vite uses ESM and bundler module resolution.
- Tailwind CSS 4 is enabled through `@tailwindcss/vite` and `@import "tailwindcss"`.
- ESLint is driven by `@antfu/eslint-config` and `eslint-plugin-better-tailwindcss`.

## Formatting Rules

- Use 2-space indentation.
- Use semicolons.
- Use double quotes.
- Prefer ASCII unless a file already requires non-ASCII characters.
- Let ESLint own formatting; formatting checks include Markdown content such as `AGENTS.md`.
- VS Code in this repo is configured to use ESLint fixes instead of Prettier.

## Import Rules

- Use ESM imports only.
- Use `import type` for type-only imports.
- Group imports cleanly: external first, local next, side-effect CSS imports last when practical.
- Let ESLint sort imports instead of hand-tuning order.
- Preserve required side-effect imports such as font and stylesheet imports.
- Avoid unused imports; TypeScript and ESLint are strict here.

## TypeScript Rules

- Write new app code in TypeScript.
- Assume `strict: true` at all times.
- Prefer `type` aliases over `interface`; ESLint enforces this.
- Keep `src/env.d.ts` in sync when adding new `VITE_*` keys.
- Avoid `any`; use explicit props and return types when inference is not enough.
- Do not leave unused locals or parameters.
- Prefer narrow unions and literal types where they improve clarity.

## React and Component Conventions

- Use function components.
- Prefer plain function declarations for components.
- Match the existing convention of default-exporting single-component files.
- Keep components presentational unless state or effects are truly needed.
- Extract repeated markup into small local components when it improves readability.
- Prefer straightforward JSX over clever abstractions.
- When exporting non-component helpers for UI state or options, keep them outside component files to avoid React refresh lint issues.

## Naming Conventions

- Use `PascalCase` for component names and component file names.
- Use `camelCase` for variables, props, functions, and helpers.
- Use `UPPER_SNAKE_CASE` only for real constants and env variable names.
- Name files after their default export when a file contains one component.
- Prefer descriptive names over short names unless the scope is tiny.

## Styling Conventions

- Prefer Tailwind utility classes in TSX for component styling.
- Keep shared tokens and CSS custom properties in `src/index.css`.
- Use plain CSS files only for truly global or page-level styling.
- Reuse the current font variables and visual direction unless a redesign is requested.
- Keep the resume's print-like dimensions and layout intact unless asked to change them.
- Be careful with spacing and overflow changes that affect PDF-like sizing.
- Reuse `--resume-gradient-active` for gradient-driven accents so controls and page details stay visually consistent.

## Resume Modes and Print Behavior

- The visual resume uses gradients, optional photo display, and theme controls.
- The ATS format is toggled from `Options.tsx` and should remain one-column, text-first, and print-friendly.
- In ATS mode, contact details appear before `SUMMARY`, and `TOP SKILLS` appears after `PROJECTS`.
- In ATS mode, `Photo` and `Theme` controls are hidden because they do not affect the ATS layout.
- The `Print / Download` button calls `window.print()`; browsers still control the print dialog and PDF destination.
- Do not introduce client-side PDF rasterization libraries for ATS output unless explicitly requested; they can reduce selectable text and parsing quality.
- If direct PDF download is needed later, prefer server-side generation with Playwright/Puppeteer over browser-only PDF libraries.
- For print-impacting changes, check both screen preview and browser print preview when feasible.

## Tailwind Rules

- The Tailwind lint plugin reads `src/index.css` as the entrypoint.
- Favor existing utility patterns over one-off arbitrary styling.
- The repo allows unknown classes and disables one wrapping rule, so review utility strings manually.
- Keep long class lists readable and avoid obvious duplication.

## Environment and Config Rules

- Only expose browser-safe variables with the `VITE_` prefix.
- Treat env values as optional unless a feature truly requires them.
- The current app uses empty-string fallbacks for missing contact values.
- Update `.env.example` when adding or renaming env vars.

## Error Handling Guidance

- Fail build-time and lint-time checks early; do not suppress errors without a reason.
- In UI code, prefer safe fallbacks over runtime crashes for optional content.
- Avoid broad `try/catch` blocks unless there is a real recoverable path.
- If logging is needed, only `console.info`, `console.warn`, and `console.error` are allowed.
- Prefer types and conditional rendering over defensive noise.

## Editing Guidance for Agents

- Read the surrounding file before changing style or structure.
- Keep edits minimal and consistent with nearby code.
- Avoid large refactors unless explicitly requested.
- Do not add new dependencies for minor tasks.
- Do not add a formatter, router, state library, or test framework unless requested.
- If you introduce a new script or tool, document it in this file.

## Verification Checklist

- Run `npm run lint` after non-trivial code changes.
- Run `npm run build` after non-trivial UI or config changes.
- If you only changed copy, build verification is still preferred because the app is small.
- If a future change adds tests, run the narrowest relevant test first and then the full suite.

## What To Avoid

- Do not switch package managers.
- Do not replace ESLint formatting with Prettier.
- Do not use `process.env` in frontend code.
- Do not introduce CommonJS syntax.
- Do not bypass strict typing with `any` or blanket casts.
- Do not change the resume layout dimensions casually.

## When Updating This File

- Keep this document current with actual repo behavior.
- Update command examples whenever scripts or tooling change.
- Add any future Cursor or Copilot rule files to the audit section.
- If tests are added, document both the suite command and the exact single-test command.
