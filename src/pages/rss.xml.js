import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const SITE_TITLE = 'Johan Ossa | Desarrollador Backend Java';
const SITE_DESCRIPTION =
	'¡Bienvenido a mi portafolio! Descubre mis últimos proyectos, habilidades y experiencia como desarrollador backend especializado en Java con Spring Boot.';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug ?? post.id ?? ''}/`,
			guid: `https://johanfuertv.github.io/${post.slug ?? post.id ?? ''}/`
		}))
	});
}
