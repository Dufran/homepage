import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    author: z.string().default('Oleksandr Korol'),
    created: z.coerce.date().optional(),
    description: z.string(),
    draft: z.boolean().default(false),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    title: z.string(),
  }),
})

export const collections = { posts }
