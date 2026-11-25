// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: set site to https://<org>.github.io
  // and, unless the repo is named <org>.github.io, base to '/<repo-name>'.
  site: 'https://batterysoftwaregroup.github.io',
  // BASE is set by the deploy workflow when building the v3 draft into /bsg-preview/v3.
  base: process.env.BASE ?? '/bsg-preview', // 정식 저장소(<org>.github.io)로 옮기면 이 줄 삭제

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});