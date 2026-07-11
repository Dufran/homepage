# Oleksandr Korol — homepage and blog

A fully static, native [Astro](https://astro.build/) portfolio inspired by [AstroPaper](https://github.com/satnaing/astro-paper). Astro renders every page; accessible vanilla TypeScript provides the small interactive enhancements. The project has no React or UI-framework runtime.

## Routes and features

- `/` — profile, social links, searchable/selectable skills, and work timeline
- `/projects` — domain and technology filters (selected technologies use AND matching)
- `/hobbies` — keyboard-accessible hobby tabs, audiobook progress, and coding playlist
- `/posts` — Markdown blog index
- `/posts/<slug>` — statically generated post pages
- Persistent system-aware light/dark theme, responsive navigation, SEO metadata, and sitemap

Portfolio content is maintained in `src/data/portfolio.ts`. Shared layout, navigation, and styles live in `src/layouts`, `src/components`, and `src/styles`.

## Development

This project uses Yarn 4 and the Node version declared in `.nvmrc`.

```sh
yarn install
yarn dev
```

Open `http://localhost:4321`. Production checks and build:

```sh
yarn check
yarn build
yarn preview
```

`yarn check` runs Astro TypeScript/content validation and Biome across Astro, TypeScript, and JSON. `yarn lint:fix` applies Biome fixes, and `yarn format` formats supported files.

## Writing posts

Create a `.md` or `.mdx` file in `src/content/posts`:

```md
---
title: A useful title
description: A concise summary used on the posts page and in metadata.
pubDate: 2026-07-11
author: Oleksandr Korol
tags:
  - engineering
draft: false
---

Write the post in Markdown here.
```

The schema lives in `src/content.config.ts`. Draft posts are excluded from routes and listings.

## Deployment

The site builds to `dist/` for Cloudflare Pages:

```sh
yarn deploy
```

`wrangler.toml` points Cloudflare Pages to the static Astro output directory.
