import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://johanfuertv.github.io/PortafolioOssa/',
  base: 'https://github.com/johanfuertv/PortafolioOssa',
})