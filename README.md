# Resume

A single-page resume site built with React 19, TypeScript, Vite 8, and Tailwind CSS 4.

## Features

- Visual A4 resume layout with configurable gradient theme.
- Optional photo toggle for the visual resume.
- ATS-optimized format with a one-column, text-first layout.
- ATS-specific section order: contact details, summary, education, experience, projects, skills.
- Print-specific CSS for A4 PDF output.
- `Print / Download` button that opens the browser print dialog for saving as PDF.

## Setup

Install dependencies:

```sh
npm install
```

Copy the example environment file for local contact values:

```sh
cp .env.example .env.local
```

Supported environment variables:

- `VITE_PHONE`
- `VITE_EMAIL`

## Scripts

Start the development server:

```sh
npm run dev
```

Run lint checks:

```sh
npm run lint
```

Build the production bundle:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Resume Controls

- `ATS Format` switches between the visual resume and ATS-optimized layout.
- `Print / Download` opens the browser print dialog.
- `Photo` controls the visual resume photo and is hidden in ATS mode.
- `Theme` controls the visual resume gradient and is hidden in ATS mode.

## Printing

Use `Print / Download` and choose `Save as PDF` in the browser print dialog.

Recommended print settings:

- Paper size: A4
- Scale: 100%
- Background graphics: enabled if available

Browsers do not allow websites to set `Save as PDF` as the default printer destination. For true direct PDF download, use server-side generation with Playwright or Puppeteer.

## Project Layout

- `src/App.tsx` contains the resume content, UI state, and ATS-specific section ordering.
- `src/components/Options.tsx` contains the print-hidden controls.
- `src/components/Title.tsx` renders visual and ATS section headings.
- `src/lib/resumeOptions.ts` contains gradient options and helpers.
- `src/App.css` contains gradient variables, ATS layout rules, and A4 print styles.
- `src/index.css` contains global tokens and print setup.

## Testing

There is no test runner configured yet. Use `npm run lint` and `npm run build` for verification.
