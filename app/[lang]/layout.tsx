import { i18n } from '@/i18n-config';
import { Metadata } from 'next';
import { calSans, inter } from '../fonts';
import og from '@/public/og.png';
import '../../globals.css';
export const metadata: Metadata = {
	metadataBase: new URL('https://martincamer.vercel.app'),
	title: 'Martín Camer | Portfolio',
	description: 'Desarrollador Frontend con conocimientos Full-Stack',
	openGraph: {
		title: 'Martín Camer | Portfolio',
		description: 'Desarrollador Frontend con conocimientos Full-Stack',
		url: 'https://martincamer.vercel.app',
		siteName: 'martincamer.vercel.app',
		type: 'website',
		images: [
			{
				url: og.src,
				width: 1920,
				height: 1080,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Martín Camer',
		card: 'summary_large_image',
	},
	alternates: {
		canonical: 'https://martincamer.vercel.app',
		languages: {
			es: 'https://martincamer.vercel.app/es',
			en: 'https://martincamer.vercel.app/en',
		},
	},
	category: 'programming',
};
export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html
			lang={params.lang}
			className={[inter.variable, calSans.variable].join(' ')}
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
