// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: set site to https://<org>.github.io
  // and, unless the repo is named <org>.github.io, base to '/<repo-name>'.
  site: 'https://bsg-lab.github.io', // 임시값 — 실제 GitHub Pages 주소로 바꿀 것 (sitemap·OG 이미지 주소에 사용)
  // base: '/<repo-name>',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});