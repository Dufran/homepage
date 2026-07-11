import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft)

  return rss({
    description: 'Articles by Oleksandr Korol about software engineering and technology.',
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        description: post.data.description,
        link: `/posts/${post.id}/`,
        pubDate: post.data.pubDate,
        title: post.data.title,
      })),
    site: context.site ?? 'https://oleksandr-korol.dev',
    title: 'Oleksandr Korol',
  })
}
