import { IProject } from '@/interfaces/projects';
import Citas_React from '../public/images/Citas_React.png';
import Control_Gastos from '../public/images/Control_Gastos.png';
import Cotizador_Criptos from '../public/images/Cotizador_Criptos.png';
import CRM_Clientes from '../public/images/CRM_Clientes.png';
import Clima_React from '../public/images/Clima-React.png';
import Bebidas_app from '../public/images/Bebidas_app.png';
import Noticias_app from '../public/images/Noticias_app.png';
import Agencia_Digital from '../public/images/Agencia Digital.png';
import NFT_Website from '../public/images/NtfAgencia.png';
import Movie_App from '../public/images/Moviex.png';
import Nike_App from '../public/images/Nike.png';
import Travel_App from '../public/images/Travigo.png';

interface ProjectsContent {
	en: IProject[];
	es: IProject[];
}

export const projects: ProjectsContent = {
	en: [
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
			url: 'https://listado-pacientes.netlify.app/',
			repository: 'https://github.com/martincamer/citas_react',
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
			url: 'https://listado-pacientes.netlify.app/',
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
			url: 'https://control-gastos-v3.netlify.app/',
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
			url: 'https://cotizador-app-v3.netlify.app/',
			repository: 'https://github.com/martincamer/cripto_api',
		},
		{
			slug: 'crm-clientes',
			title: 'CRM Clientes',
			brief: 'Una App sobre clientes, proyectos, etc.',
			image: CRM_Clientes,
			description:
				'Una app donde fue creada para tener una lista de clientes con información de las mismas Pensada unicamente para los Empresarios',
			stack: ['React js', 'Json-Server', 'Html', 'Css', 'Talwind Css', 'Api'],
			url: 'https://crm-clientes-v3.netlify.app/',
			repository: 'https://github.com/martincamer/crm_clientes',
		},
		{
			slug: 'clima-app',
			title: 'Aplicacion del Clima',
			brief:
				'Una Aplicación para personas que quieren saber sobre el clima, la aplicacion fue realizada con una API del clima',
			image: Clima_React,
			description:
				'Esta aplicación fue realizada para saber el clima de cualquier ciudad escogida',
			stack: [
				'React js',
				'Styled Components',
				'Html',
				'Css',
				'Talwind Css',
				'Api',
				'Context',
				'Hooks',
			],
			url: 'https://clima-app-v3.vercel.app/',
			repository: 'https://github.com/martincamer/clima-app',
		},
		{
			slug: 'bebidas-app',
			title: 'Aplicacion Sobre Bebidas',
			brief:
				'Una Aplicación para personas que quieren saber sobre bebidas, tragos, etc. Fue realizada con una API de bebidas',
			image: Bebidas_app,
			description:
				'Esta aplicación fue realizada para cualquier persona que quiera saber sobre bebidas, tragos y preparacion de ellos',
			stack: ['React js', 'Bootstrap React', 'Html', 'Css', 'Context', 'Hooks'],
			url: 'https://bebidas-app-v3.vercel.app/',
			repository: 'https://github.com/martincamer/bebidas-app',
		},
		{
			slug: 'noticias-app',
			title: 'Aplicacion Sobre Noticias',
			brief:
				'Una Aplicación para personas que quieren saber sobre noticias. Fue realizada con una API de bebidas',
			image: Noticias_app,
			description:
				'Esta aplicación fue realizada para cualquier persona que quiera saber sobre noticias',
			stack: [
				'React js',
				'Material UI',
				'Html',
				'Css',
				'Context',
				'Hooks',
				'Styled Components',
			],
			url: 'https://noticias-app-v3.vercel.app/',
			repository: 'https://github.com/martincamer/noticias-app',
		},
		{
			slug: 'agencia-app',
			title: 'Agency-Creative',
			brief:
				'Una pagina web interactiva sobre una agencia creativa de desarrollo web y diseño',
			image: Agencia_Digital,
			description: 'Esta aplicación fue realizada para una agencia creativa',
			stack: ['Html', 'Css', 'Sass', 'Javascript'],
			url: 'https://agencysite2023.netlify.app/',
			repository: 'https://github.com/martincamer/Agencia-Digital',
		},
		{
			slug: 'NFTAgency-app',
			title: 'Agencia sobre NFTS',
			brief: 'Una pagina web interactiva sobre una agencia de venta de NFTS',
			image: NFT_Website,
			description: 'Esta aplicación fue realizada para una agencia de NFTS',
			stack: ['Html', 'Css', 'Sass'],
			url: 'https://ntfsite.netlify.app/',
			repository: 'https://github.com/martincamer/NFT-Proyecto',
		},
		{
			slug: 'movie-app',
			title: 'Agencia sobre Peliculas y Series',
			brief:
				'Una pagina realizada consumiendo una api mediante javascript, proyecto donde podes buscar series y peliculas.',
			image: Movie_App,
			description:
				'Esta aplicación fue realizada consumiendo una api de peliculas y series',
			stack: ['Html', 'Css', 'Sass', 'Javascript', 'Api'],
			url: 'https://movixsite.netlify.app/',
			repository: 'https://github.com/martincamer/Moviex-Movies',
		},
		{
			slug: 'nike-store-app',
			title: 'Store Nike ShoesApp',
			brief: 'Una pagina realizada con react sobre zapatillas nike populares.',
			image: Nike_App,
			description: 'Esta aplicacion es sobre zapatillas nike',
			stack: ['Html', 'Css', 'React', 'Javascript', 'Hooks'],
			url: 'https://nikesitereact.netlify.app/',
			repository: 'https://github.com/martincamer/Nike-Shoes',
		},
		{
			slug: 'travigo-app',
			title: 'Travigo App',
			brief:
				'Una pagina realizada para una agencia sobre lugares, para viajar, etc.',
			image: Travel_App,
			description: 'Esta aplicacion es lugares para viajar',
			stack: ['Html', 'Css', 'React', 'Javascript', 'Hooks'],
			url: 'https://travelagencyreact.netlify.app/',
			repository: 'https://github.com/martincamer/TravelAgency',
		},
	],
};
