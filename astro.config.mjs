import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import tailwind from '@astrojs/tailwind';
import staticAdapter from '@astrojs/static';

export default defineConfig({
	site: 'https://johanfuertv.github.io/PortafolioOssa', // 👈 Tu URL de GitHub Pages
	base: '/PortafolioOssa', // 👈 Carpeta base del repositorio
	integrations: [
		mdx(),
		sitemap(),
		partytown(),
		robotsTxt(),
		tailwind({ applyBaseStyles: false })
	],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'johanfuertv.github.io'
				}
			]
		]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	output: 'static',
	adapter: staticAdapter()
});
