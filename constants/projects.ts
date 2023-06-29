import { IProject } from '@/interfaces/projects';
import Citas_React from '../public/images/Citas_React.png';
import Control_Gastos from '../public/images/Control_Gastos.png';
import Cotizador_Criptos from '../public/images/Cotizador_Criptos.png';
import Tesla_Image from '../public/images/Tesla_Image.png';
import CRM_Clientes from '../public/images/CRM_Clientes.png';

interface ProjectsContent {
	en: IProject[];
	es: IProject[];
}

export const projects: ProjectsContent = {
	en: [
		{
			slug: 'dolar',
			title: 'CS Store',
			brief:
				'The project is based on the sale of CSGO items. I opted to use the T3 Stack focusing on simplicity, modularity and type-safe development.',
			image: Citas_React,
			description:
				"The idea of developing this store was driven to learn about several technologies that I didn't know until the moment of making the application. I used the game as a niche to avoid making a typical clothing store, besides being one of my favorite games.",
			stack: [
				'NextJS',
				'Next Auth',
				'Zustand',
				'React Table',
				'React Query',
				'TailwindCSS',
				'Radix UI',
				'AWS S3',
				'Zod',
				'TypeScript',
				'PrismaORM',
				'tRPC',
				'CockRoachDB',
			],
			url: 'https://csgostore.vercel.app/',
			repository: 'https://github.com/Santipac/CS-Store',
		},
		{
			slug: 'twitter_clone',
			title: 'Twitter UI',
			brief:
				'Twitter UI Clone with minimal functionalities such as follow users, create tweets and more.',
			image: Control_Gastos,
			description:
				'I made this project in order to learn more about technologies such as Radix UI, tRPC, react-query, and others. I liked the idea of making a Twitter Clone because I could understand how these technologies work by making minimal functionalities.',
			stack: [
				'NextJS',
				'tRPC',
				'React Query',
				'TailwindCSS',
				'Zod',
				'TypeScript',
				'Radix UI',
				'Next Auth',
				'MySQL',
				'PrismaORM',
				'Stripe',
			],
			url: 'https://twitter-clone-santipac.vercel.app/',
			repository: 'https://github.com/Santipac/twitter-clone',
		},
		{
			slug: 'kanban_board',
			title: 'Kanban Board',
			brief: 'To-Do application with Drag and Drop.',
			description: '',
			image: Cotizador_Criptos,
			stack: [
				'ReactJS',
				'ReduxJS',
				'ChakraUI',
				'Formik',
				'Yup',
				'React Router Dom',
				'Firebase',
				'TypeScript',
				'Vite',
			],
			url: 'https://kanbanclone.vercel.app/',
			repository: 'https://github.com/Santipac/KanbanBoard',
		},
		{
			slug: 'dolarizapp',
			title: 'Dolarizapp',
			brief: 'An App to convert ARS to USD',
			image: CRM_Clientes,
			description:
				'An app where you will find different quotes with information about them. Designed only for Argentines, those who suffer every day by the devaluation of our currency. You can insert the amount you want, seeing its value in dollars with the different quotes. Some quotes have additional information about them.',
			stack: [
				'React js',
				'Typescript',
				'TailwindCSS',
				'Framer Motion',
				'React Query',
				'Storybook',
				'Vite js',
				'pnpm',
				'React Router Dom',
				'Figma',
			],
			url: 'https://dolarizapp.vercel.app/',
			repository: 'https://github.com/Santipac/Dolarizapp',
		},
		{
			slug: 'tesla',
			title: 'Tesla Landing',
			brief: 'A Tesla UI clone with Astro JS',
			image: Tesla_Image,
			description:
				'I did this project to refresh my knowledge in basic web development with HTML CSS and Javascript but with productivity enhancing technologies such as Tailwind for styles and Astro for the rest.',
			stack: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'Astro JS'],
			url: 'https://tesla-landing-ui.netlify.app/',
			repository: 'https://github.com/Santipac/tesla-landing',
		},
	],
	es: [
		{
			slug: 'citas-react',
			title: 'Mascotas Citas',
			brief:
				'Proyecto basado en citas para mascotas, cualquier problema que tenga la mascota podra enviar un formulario para solicitar una fecha',
			image: Citas_React,
			description:
				'La idea fue realizar un proyecto para dominar el uso de props en react. ',
			stack: [
				'Html',
				'Css',
				'Tailwind Css',
				'React',
				'Local Storage',
				'Props',
				'Javascript',
				'Context',
			],
			url: 'https://dancing-sundae-1ac481.netlify.app',
			repository: 'https://github.com/martincamer/citas_react',
		},
		{
			slug: 'control-gastos',
			title: 'Control de Gastos',
			brief:
				'Proyecto sobre control de gastos, para llevar al dia todos tus gastos',
			image: Control_Gastos,
			description:
				'Hice este proyecto para llevar el control de gastos varios para tener un control sobre el dinero.',
			stack: [
				'React',
				'Context',
				'Props',
				'Local Storage',
				'Css',
				'Javascript',
			],
			url: 'https://649de432a05bab2db2b0ccfc--fastidious-kringle-00ed60.netlify.app/',
			repository: 'https://github.com/martincamer/Control_Gastos',
		},
		{
			slug: 'cotizador-criptos',
			title: 'Cotizador Criptomonedas',
			brief:
				'Aplicacion sobre cotizador de criptomonedas, realice este proyecto consumiendo una api',
			description: '',
			image: Cotizador_Criptos,
			stack: ['ReactJS', 'Api', 'Css', 'Styled Components'],
			url: 'https://649df0c9708a7534d10ee738--rainbow-creponne-973906.netlify.app/',
			repository: 'https://github.com/martincamer/cripto_api',
		},
		{
			slug: 'crm-clientes',
			title: 'CRM Clientes',
			brief: 'Una App sobre clientes.',
			image: CRM_Clientes,
			description:
				'Una app donde fue creada para tener una lista de clientes con información de las mismas Pensada unicamente para los Empresarios',
			stack: ['React js', 'Json-Server', 'Html', 'Css', 'Talwind Css', 'Api'],
			url: 'https://tranquil-sundae-2891f1.netlify.app/',
			repository: 'https://github.com/martincamer/crm_clientes',
		},
	],
};
