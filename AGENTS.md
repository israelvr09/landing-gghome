# Repository Guidelines

## Project Structure & Module Organization

This is a small Next.js App Router project. Application routes and shared UI live in `app/`; the current entry points are `app/layout.tsx`, `app/page.tsx`, and global styles in `app/globals.css`. Static assets belong in `public/`. Project configuration is at the repository root: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, and `package.json`.

Use the `@/*` TypeScript path alias for imports from the repository root when it improves readability. Keep route-specific components close to the route that owns them unless they are reused across pages.

## Build, Test, and Development Commands

- `npm run dev` starts the Next.js development server, usually at `http://localhost:3000`.
- `npm run build` creates a production build and catches compile-time Next.js and TypeScript issues.
- `npm run start` runs the production build locally after `npm run build`.
- `npm run lint` runs ESLint using the Next core web vitals and TypeScript configs.

Use `npm install` to restore dependencies from `package-lock.json`.

## Coding Style & Naming Conventions

Write TypeScript and React components with strict type checking in mind. Use PascalCase for components, camelCase for functions and variables, and lowercase route segment folders under `app/`. Keep JSX readable with small components and clear prop names.

Follow the existing formatting style: two-space indentation, double quotes in TypeScript config files where already used, and semicolons in TypeScript/JavaScript modules. Prefer CSS in `app/globals.css` for global styles and Tailwind-compatible utilities when adding component styling.

## Testing Guidelines

No test framework is configured yet. For now, validate changes with `npm run lint` and `npm run build`. If tests are added, place them near the code they cover or in a clear `__tests__/` directory, and document the new test command in `package.json` and this guide.

## Commit & Pull Request Guidelines

No project-specific commit convention is documented. Use short, imperative commit messages, such as `Add landing page layout` or `Fix navigation spacing`. Pull requests should include a clear description, mention any linked issue, list validation commands run, and include screenshots for visible UI changes.

## Agent-Specific Instructions

This project uses Next.js `16.3.5`, which may differ from older Next.js APIs. Before changing Next.js behavior, routes, config, or framework APIs, consult the relevant local docs under `node_modules/next/dist/docs/`.
