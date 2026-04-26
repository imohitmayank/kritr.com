# Kritr Web Platform

Static-export Next.js website for Kritr and MyLabStory, built to deploy cleanly on GitHub Pages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub Actions for Pages deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages notes

This project is configured for static hosting with:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- a Webpack production build for reliable CI output
- local font stacks so builds do not depend on Google Fonts availability

By default, the build infers the correct `basePath` for a GitHub Pages project site when it runs inside GitHub Actions.

Examples:

- User or org site repo: `username.github.io` -> deploys at `/`
- Project site repo: `kritr-web` -> deploys at `/kritr-web`

If you later attach a custom domain or want to force a different base path, set `PAGES_BASE_PATH` in the workflow:

```yaml
env:
  PAGES_BASE_PATH: ""
```

You can also set `NEXT_PUBLIC_SITE_URL` if you want fully qualified metadata URLs later.
