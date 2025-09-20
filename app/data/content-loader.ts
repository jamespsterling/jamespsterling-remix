// Cloudflare Pages compatible content loader
// Replaces portfolio.ts with markdown + YAML content

// FontAwesome icons mapping (keeping the original icon system)
import {
	faAndroid,
	faAngular,
	faAws,
	faBootstrap,
	faCloudflare,
	faCss3,
	faDocker,
	faEarlybirds,
	faFontAwesome,
	faGitAlt,
	faGoogle,
	faHtml5,
	faJs,
	faLaravel,
	faLinux,
	faMicrosoft,
	faNodeJs,
	faOctopusDeploy,
	faPhp,
	faReact,
	faSass,
	faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
	faAlignLeft,
	faArrowUpRightDots,
	faBell,
	faBorderNone,
	faBoxesStacked,
	faCamera,
	faCheckCircle,
	faCircleNodes,
	faCircleNotch,
	faClock,
	faCode,
	faCodeCompare,
	faCube,
	faCubes,
	faDatabase,
	faDiagramProject,
	faDisplay,
	faFishFins,
	faFont,
	faGem,
	faHexagonNodes,
	faHippo,
	faLayerGroup,
	faLinesLeaning,
	faMemory,
	faMobileScreenButton,
	faPepperHot,
	faPlay,
	faRoute,
	faSearch,
	faServer,
	faShapes,
	faSquareCaretUp,
	faTerminal,
	faUmbrellaBeach,
	faUsersRectangle,
	faVial,
	faWandMagicSparkles,
	faWandSparkles,
	faWind,
} from "@fortawesome/free-solid-svg-icons";
import { parseContentMarkdown } from "~/utils/content-loader";
import {
	aboutContent,
	certificationsContent,
	certificationsIndex,
	educationContent,
	experienceContent,
	experienceIndex,
	projectsContent,
	projectsIndex,
} from "./content-data";

// Icon mapping
const iconMap: Record<string, unknown> = {
	"cloudflare-pages": faCloudflare,
	html5: faHtml5,
	css3: faCss3,
	react: faReact,
	"react-router": faRoute,
	relay: faDiagramProject,
	nextjs: faShapes,
	remix: faReact,
	graphql: faCircleNodes,
	"angular-js": faAngular,
	"chakra-ui": faWandSparkles,
	"material-ui": faWandMagicSparkles,
	tailwindcss: faWind,
	rxjs: faJs,
	ngrx: faMemory,
	nx: faTerminal,
	typescript: faJs,
	javascript: faJs,
	php: faPhp,
	"c#": faCode,
	"node-js": faNodeJs,
	"express-js": faServer,
	"ionic-framework": faMobileScreenButton,
	jquery: faDisplay,
	"jquery-ui": faUsersRectangle,
	"ractive-js": faJs,
	hapi: faNodeJs,
	bootstrap: faBootstrap,
	"zurb-foundation": faDisplay,
	laravel: faLaravel,
	"zend-framework": faPhp,
	"asp-net-mvc": faCode,
	"rivets-js": faJs,
	mysql: faDatabase,
	postgres: faHippo,
	mssql: faCubes,
	mongodb: faBoxesStacked,
	"entity-framework": faBorderNone,
	orm: faLayerGroup,
	"nightwatch-js": faEarlybirds,
	cypress: faCircleNotch,
	cucumber: faPepperHot,
	selenium: faVial,
	ruby: faGem,
	aws: faAws,
	"google-cloud": faGoogle,
	azure: faMicrosoft,
	linux: faLinux,
	"apache-httpd": faServer,
	"apache-solr": faSearch,
	iis: faWindows,
	"octopus-deploy": faOctopusDeploy,
	teamcity: faCodeCompare,
	docker: faDocker,
	"font-awesome": faFontAwesome,
	"tw-elements": faCss3,
	twilio: faBell,
	fontsource: faFont,
	ocr: faCamera,
	sass: faSass,
	android: faAndroid,
	"mermaid-js": faFishFins,
	git: faGitAlt,
	temporal: faClock,
	tanstack: faUmbrellaBeach,
	render: faCube,
	vercel: faPlay,
	prisma: faSquareCaretUp,
	jest: faCheckCircle,
	eslint: faHexagonNodes,
	prettier: faAlignLeft,
	biomejs: faArrowUpRightDots,
	swc: faLinesLeaning,
};

// Load all content
const about = parseContentMarkdown(aboutContent);
const education = parseContentMarkdown(educationContent);
const certifications = Object.fromEntries(
	Object.entries(certificationsContent).map(([key, content]) => [
		key,
		parseContentMarkdown(content),
	])
);
const experience = Object.fromEntries(
	Object.entries(experienceContent).map(([key, content]) => [key, parseContentMarkdown(content)])
);
const projects = Object.fromEntries(
	Object.entries(projectsContent).map(([key, content]) => [key, parseContentMarkdown(content)])
);

// Technologies data (keeping the original structure for now)
const technologies = [
	{
		id: "cloudflare-pages",
		label: "Cloudflare Pages",
		link: "https://pages.cloudflare.com/",
		icon: faCloudflare,
	},
	{
		id: "html5",
		label: "HTML5",
		link: "https://html.spec.whatwg.org/",
		icon: faHtml5,
	},
	{
		id: "css3",
		label: "CSS3",
		link: "https://www.w3.org/Style/CSS/#specs",
		icon: faCss3,
	},
	{
		id: "react",
		label: "React",
		link: "https://react.dev/",
		icon: faReact,
	},
	{
		id: "react-router",
		label: "React Router",
		link: "https://reactrouter.com/",
		icon: faRoute,
	},
	{
		id: "relay",
		label: "Relay",
		link: "https://relay.dev/",
		icon: faDiagramProject,
	},
	{
		id: "nextjs",
		label: "NextJS",
		link: "https://nextjs.org/",
		icon: faShapes,
	},
	{
		id: "remix",
		label: "Remix",
		link: "https://remix.run/",
		icon: faReact,
	},
	{
		id: "graphql",
		label: "GraphQL",
		link: "https://graphql.org/",
		icon: faCircleNodes,
	},
	{
		id: "angular-js",
		label: "AngularJs",
		link: "https://angularjs.org/",
		icon: faAngular,
	},
	{
		id: "chakra-ui",
		label: "Chakra UI",
		link: "https://chakra-ui.com/",
		icon: faWandSparkles,
	},
	{
		id: "material-ui",
		label: "Material UI",
		link: "https://mui.com/",
		icon: faWandMagicSparkles,
	},
	{
		id: "tailwindcss",
		label: "tailwindcss",
		link: "https://tailwindcss.com/",
		icon: faWind,
	},
	{
		id: "rxjs",
		label: "RxJs",
		link: "https://rxjs.dev/",
		icon: faJs,
	},
	{
		id: "ngrx",
		label: "NgRx",
		link: "https://ngrx.io/",
		icon: faMemory,
	},
	{
		id: "nx",
		label: "Nx",
		link: "https://nx.dev/",
		icon: faTerminal,
	},
	{
		id: "typescript",
		label: "Typescript",
		link: "https://www.typescriptlang.org/",
		icon: faJs,
	},
	{
		id: "javascript",
		label: "JavaScript",
		link: "https://tc39.es/ecma262/",
		icon: faJs,
	},
	{
		id: "php",
		label: "PHP",
		link: "https://www.php.net/",
		icon: faPhp,
	},
	{
		id: "c#",
		label: "C#",
		link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
		icon: faCode,
	},
	{
		id: "node-js",
		label: "Node.js",
		link: "https://nodejs.org/en",
		icon: faNodeJs,
	},
	{
		id: "express-js",
		label: "Express.js",
		link: "https://expressjs.com/",
		icon: faServer,
	},
	{
		id: "ionic-framework",
		label: "Ionic Framework",
		link: "https://ionicframework.com/",
		icon: faMobileScreenButton,
	},
	{
		id: "jquery",
		label: "jQuery",
		link: "https://jquery.com/",
		icon: faDisplay,
	},
	{
		id: "jquery-ui",
		label: "jQuery UI",
		link: "https://jqueryui.com/",
		icon: faUsersRectangle,
	},
	{
		id: "ractive-js",
		label: "Ractive.js",
		link: "https://ractive.js.org/",
		icon: faJs,
	},
	{
		id: "hapi",
		label: "hapi",
		link: "https://hapi.dev/",
		icon: faNodeJs,
	},
	{
		id: "bootstrap",
		label: "Bootstrap",
		link: "https://getbootstrap.com/",
		icon: faBootstrap,
	},
	{
		id: "zurb-foundation",
		label: "Zurb Foundation",
		link: "https://get.foundation/",
		icon: faDisplay,
	},
	{
		id: "laravel",
		label: "Laravel",
		link: "https://laravel.com/",
		icon: faLaravel,
	},
	{
		id: "zend-framework",
		label: "Zend Framework",
		link: "https://framework.zend.com/",
		icon: faPhp,
	},
	{
		id: "asp-net-mvc",
		label: "ASP.Net MVC",
		link: "https://dotnet.microsoft.com/en-us/apps/aspnet/mvc",
		icon: faCode,
	},
	{
		id: "rivets-js",
		label: "RivetsJs",
		link: "http://rivetsjs.com/",
		icon: faJs,
	},
	{
		id: "mysql",
		label: "MySQL",
		link: "https://www.mysql.com/",
		icon: faDatabase,
	},
	{
		id: "postgres",
		label: "PostgreSQL",
		link: "https://www.postgresql.org/",
		icon: faHippo,
	},
	{
		id: "mssql",
		label: "MSSQL",
		link: "https://www.microsoft.com/en-us/sql-server",
		icon: faCubes,
	},
	{
		id: "mongodb",
		label: "MongoDB",
		link: "https://www.mongodb.com/",
		icon: faBoxesStacked,
	},
	{
		id: "entity-framework",
		label: "Entity Framework",
		link: "https://learn.microsoft.com/en-us/aspnet/entity-framework",
		icon: faBorderNone,
	},
	{
		id: "orm",
		label: "ORM",
		link: "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping",
		icon: faLayerGroup,
	},
	{
		id: "nightwatch-js",
		label: "Nightwatch.js",
		link: "https://nightwatchjs.org/",
		icon: faEarlybirds,
	},
	{
		id: "cypress",
		label: "Cypress",
		link: "https://www.cypress.io/",
		icon: faCircleNotch,
	},
	{
		id: "cucumber",
		label: "Cucumber",
		link: "https://cucumber.io/",
		icon: faPepperHot,
	},
	{
		id: "selenium",
		label: "Selenium",
		link: "https://www.selenium.dev/",
		icon: faVial,
	},
	{
		id: "ruby",
		label: "Ruby",
		link: "https://www.ruby-lang.org/en/",
		icon: faGem,
	},
	{
		id: "aws",
		label: "AWS",
		link: "https://aws.amazon.com/",
		icon: faAws,
	},
	{
		id: "google-cloud",
		label: "Google Cloud",
		link: "https://cloud.google.com/",
		icon: faGoogle,
	},
	{
		id: "azure",
		label: "Azure",
		link: "https://azure.microsoft.com/en-us",
		icon: faMicrosoft,
	},
	{
		id: "linux",
		label: "Linux",
		link: "https://www.linux.org/",
		icon: faLinux,
	},
	{
		id: "apache-httpd",
		label: "Apache HTTPd",
		link: "https://httpd.apache.org/",
		icon: faServer,
	},
	{
		id: "apache-solr",
		label: "Apache Solr",
		link: "https://solr.apache.org/",
		icon: faSearch,
	},
	{
		id: "iis",
		label: "IIS",
		link: "https://www.iis.net/",
		icon: faWindows,
	},
	{
		id: "octopus-deploy",
		label: "Octopus Deploy",
		link: "https://octopus.com/",
		icon: faOctopusDeploy,
	},
	{
		id: "teamcity",
		label: "TeamCity",
		link: "https://www.jetbrains.com/teamcity/",
		icon: faCodeCompare,
	},
	{
		id: "docker",
		label: "Docker",
		link: "https://www.docker.com/",
		icon: faDocker,
	},
	{
		id: "font-awesome",
		label: "Font Awesome",
		link: "https://fontawesome.com/",
		icon: faFontAwesome,
	},
	{
		id: "tw-elements",
		label: "Tailwind Elements",
		link: "https://tailwind-elements.com/",
		icon: faCss3,
	},
	{
		id: "twilio",
		label: "Twilio",
		link: "https://www.twilio.com/",
		icon: faBell,
	},
	{
		id: "fontsource",
		label: "Fontsource",
		link: "https://fontsource.org/",
		icon: faFont,
	},
	{
		id: "ocr",
		label: "OCR",
		link: "https://en.wikipedia.org/wiki/Optical_character_recognition",
		icon: faCamera,
	},
	{
		id: "sass",
		label: "SASS",
		link: "https://sass-lang.com/",
		icon: faSass,
	},
	{
		id: "android",
		label: "Android",
		link: "https://www.android.com/",
		icon: faAndroid,
	},
	{
		id: "mermaid-js",
		label: "Mermaid",
		link: "https://mermaid.js.org/",
		icon: faFishFins,
	},
	{
		id: "git",
		label: "Git",
		link: "https://git-scm.com/",
		icon: faGitAlt,
	},
	{
		id: "temporal",
		label: "Temporal",
		link: "https://temporal.io/",
		icon: faClock,
	},
	{
		id: "tanstack",
		label: "Tanstack",
		link: "https://tanstack.com/",
		icon: faUmbrellaBeach,
	},
	{
		id: "render",
		label: "Render",
		link: "https://render.com/",
		icon: faCube,
	},
	{
		id: "vercel",
		label: "Vercel",
		link: "https://vercel.com/",
		icon: faPlay,
	},
	{
		id: "prisma",
		label: "Prisma",
		link: "https://prisma.io/",
		icon: faSquareCaretUp,
	},
	{
		id: "jest",
		label: "Jest",
		link: "https://jestjs.io/",
		icon: faCheckCircle,
	},
	{
		id: "eslint",
		label: "ESLint",
		link: "https://eslint.org/",
		icon: faHexagonNodes,
	},
	{
		id: "prettier",
		label: "Prettier",
		link: "https://prettier.io/",
		icon: faAlignLeft,
	},
	{
		id: "biomejs",
		label: "Biome",
		link: "https://biomejs.dev/",
		icon: faArrowUpRightDots,
	},
	{
		id: "swc",
		label: "SWC",
		link: "https://swc.rs/",
		icon: faLinesLeaning,
	},
];

// Process collections to arrays in correct order
const certificationsArray = certificationsIndex.map((id: string) => {
	const cert = certifications[id];
	return {
		name: cert.frontmatter.name as string,
		link: cert.frontmatter.link as string,
		badge: cert.frontmatter.badge as { src: string; alt: string },
		issued: cert.frontmatter.issued as string,
		date: cert.frontmatter.date as string,
		description: cert.content,
	};
});

const experienceArray = experienceIndex.map((id: string) => {
	const exp = experience[id];
	const baseExp = {
		employer: exp.frontmatter.employer as string,
		title: exp.frontmatter.title as string,
		time: exp.frontmatter.time as string,
		icon: exp.frontmatter.icon as string,
		link: exp.frontmatter.link as string,
		logo: exp.frontmatter.logo as string,
		description: exp.content
			.split("\n")
			.filter((line) => line.trim().startsWith("-"))
			.map((line) => line.trim().substring(2)),
	};

	// Add optional properties if they exist
	if (exp.frontmatter.logoStyles) {
		return { ...baseExp, logoStyles: exp.frontmatter.logoStyles as string[] };
	}
	if (exp.frontmatter.clientLogos) {
		return {
			...baseExp,
			clientLogos: exp.frontmatter.clientLogos as { light: string[]; dark: string[] },
		};
	}

	return baseExp;
});

const projectsArray = projectsIndex.map((id: string) => {
	const proj = projects[id];
	return {
		id: proj.frontmatter.id as string,
		name: proj.frontmatter.name as string,
		date: proj.frontmatter.date as string,
		image: proj.frontmatter.image as {
			src: string;
			type: "image/png" | "image/jpg" | "image/svg+xml" | "image/webp";
			height?: number;
			width?: number;
			classes?: string;
			class?: string;
		},
		technologies: proj.frontmatter.technologies as string[],
		hasArticle: proj.frontmatter.hasArticle as boolean,
		description: proj.content,
		link: proj.frontmatter.link as string,
		sources: proj.frontmatter.sources as string[],
	};
});

// Skills array (keeping the original)
const skills = [
	"html5",
	"css3",
	"typescript",
	"javascript",
	"react",
	"nextjs",
	"graphql",
	"temporal",
	"tanstack",
	"react-router",
	"relay",
	"angular-js",
	"rxjs",
	"ngrx",
	"chakra-ui",
	"material-ui",
	"tailwindcss",
	"node-js",
	"php",
	"c#",
	"express-js",
	"ionic-framework",
	"nx",
	"jquery",
	"jquery-ui",
	"ractive.js",
	"hapi",
	"bootstrap",
	"zurb-foundation",
	"laravel",
	"zend-framework",
	"asp-net-mvc",
	"rivets-js",
	"mongodb",
	"mysql",
	"postgres",
	"mssql",
	"prisma",
	"entity-framework",
	"orm",
	"jest",
	"nightwatch-js",
	"cypress",
	"cucumber",
	"selenium",
	"ruby",
	"aws",
	"google-cloud",
	"azure",
	"render",
	"vercel",
	"linux",
	"apache-httpd",
	"apache-solr",
	"iis",
	"octopus-deploy",
	"teamcity",
	"docker",
	"mermaid-js",
	"git",
	"eslint",
	"prettier",
	"swc",
	"biomejs",
];

const tools = ["iTerm2", "Oh My Zsh", "DevTools", "VSCode"];

// Export the data object (maintaining the same structure as portfolio.ts)
export const data = {
	updated: "2024-12-20T14:44:10.976Z",
	about: {
		name: about.frontmatter.name as string,
		title: about.frontmatter.title as string,
		body: about.content,
	},
	education: {
		university: education.frontmatter.university as {
			name: string;
			link: string;
			logo: { src: string; alt: string };
			degree: string;
			concentration: string;
		},
		dates: education.frontmatter.dates as string,
		project: education.content,
	},
	certifications: certificationsArray,
	experience: experienceArray,
	skills,
	tools,
	technologies,
	projects: projectsArray,
};
