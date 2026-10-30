import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE?.trim() || 'https://plazasotomayor.com';

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare({ configPath: './wrangler.jsonc' }),
  integrations: [sitemap({ filter: (url) => !new URL(url).pathname.startsWith('/404') && !new URL(url).pathname.startsWith('/en/404') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
