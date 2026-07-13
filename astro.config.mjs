import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'

export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [mermaid({ autoTheme: true, enableLog: false }), sitemap()],
  output: 'static',
  site: 'https://dufran.org',
})
