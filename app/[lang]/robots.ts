import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: [
			'https://martincamer.vercel.app/es/sitemap.xml',
			'https://martincamer.vercel.app/en/sitemap.xml',
		],
	};
}
