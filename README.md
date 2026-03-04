# Moms Website

Next.js + TypeScript static site for GitHub Pages.

## Stack
- Next.js App Router
- TypeScript
- Static export (`output: "export"`)
- GitHub Pages Actions deploy

## Development
```bash
bun install
bun run dev
```

## Build for Pages
```bash
bun run build:pages
```

## Deployment
Push to `main` and GitHub Actions deploys `./out` to Pages.
The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically.
