import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'

export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [mermaid({ autoTheme: true, enableLog: false }), sitemap()],
  output: 'static',
  server: {
    host: 'localhost',
    port: 3000,
  },
  site: 'https://dufran.org',
})
