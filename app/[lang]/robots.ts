import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: [
			'https://portfolio-2024-ten.vercel.app/es/sitemap.xml',
			'https://portfolio-2024-ten.vercel.app/en/sitemap.xml',
		],
	};
}
