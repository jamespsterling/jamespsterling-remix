import {
  faAndroid,
  faAngular,
  faAws,
  faBootstrap,
  faCloudflare,
  faCss3,
  faDocker,
  faFontAwesome,
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
} from '@fortawesome/free-brands-svg-icons';
import {
  faBell,
  faCamera,
  faCircleNodes,
  faCode,
  faCodeCompare,
  faDatabase,
  faDisplay,
  faFont,
  faGem,
  faLayerGroup,
  faMemory,
  faMobileScreenButton,
  faRoute,
  faSearch,
  faServer,
  faTerminal,
  faVial,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { lazy } from 'react';

export const data = {
  updated: '2023-08-15T13:44:06.871Z',
  about: {
    name: 'James Sterling',
    title: 'Fullstack Software Engineer',
    body: 'Full-stack software engineer with 14+ years of experience crafting software for SaaS platforms, enterprise deployments, and everything in between. My focus is to leverage the entire stack, back-end, middleware, and front-end to deliver thoughtful UI/UX experiences. My passion for self-documenting, scalable, and robust software orchestrations drives me to learn from and coach other engineers in best practices, refine developer experience (DX) tooling, and continuously hone my craft as a curious engineer.',
  },
  education: {
    university: {
      name: 'Southeastern Louisiana University',
      degree: 'Bachelor of Science in Computer Science',
      concentration: 'Scientific Concentration',
    },
    dates: 'Aug 2005 - Dec 2010',
    project:
      'Create a ride-sharing app to help link communities of students with others to work out riding sharing for economical purposes.',
  },
  experience: [
    {
      employer: 'Lattice',
      title: 'Staff Software Engineer',
      time: 'May 2022 - Present',
      icon: 'fab fa-react',
      description: [
        'Full stack development on new product initiatives and next-gen platform focused engineering empowering experiences using <b>React</b>, <b>Next.js</b>, <b>Chakra UI</b>, <b>Zod</b>, <b>Relay</b>, <b>GraphQL</b>, <b>NestJS</b>, <b>Sequelize</b>, <b>gRPC</b>, & <b>Node.js</b>.',
        'Leads effort to establish patterns for internationalization and localization (i18n) using <b>react-intl</b> as well as improving DX tooling by leveraging custom linting configuration.',
        'Plays a key role in delivering new features by working closely with Product & Design–translating requirements into technical specifications, atomic tasks, and organizing the effort for large epics.',
        'Champions <b>type-safety</b> and data-model simplicity across the stack to help reduce cognitive load, mitigate tech debt, and minimize issues in production.',
        'Leads the effort to merge two disparate software orchestrations by working closely with DX colleagues–delivering cost reduction and helping to standardize DX tooling.',
        'Authors technical specifications, participates in technical RFCs, and architecture round-table reviews.',
      ],
      link: 'https://lattice.com/',
      logo: '/img/companies/lattice.webp',
    },
    {
      employer: 'Nortal',
      title: 'Lead Software Development Engineer',
      time: 'October 2020 - May 2022',
      icon: 'fab fa-angular',
      description: [
        'Front-end & Microservice focused engineering of enterprise web experiences using <b>Angular</b> 12-13, <b>Nx</b>, <b>NgRx</b> (Angular Redux), <b>RxJs</b>, <b>Jest</b>, <b>Spectator</b>, <b>HAPI</b>, and Adobe Adobe Experience Manager (AEM).',
        'Leads colleagues in technology best practices for core technologies & processes with in-depth code reviews, coaching, and pair programming.',
        'Works closely with Product, Architecture, Backend, Security, and UI/UX teams to ensure delivery of highly usable, secure customer-facing e-commerce experiences across desktop and mobile.',
        "Partners across teams to deliver T-Mobile's TVision <a class='external-link' target='_blank' rel='noopener noreferrer' href='https://web.archive.org/web/20220604032641/https:/www.t-mobile.com/tv-streaming'>marketing and upper-funnel</a> user-facing application.",
        "Partners across teams to deliver T-Mobile's TVision marketing and upper-funnel e-commerce experience.",
        "Leads the development effort for migration to next-gen <a class='external-link' target='_blank' rel='noopener noreferrer' href='https://www.metrobyt-mobile.com/cart'>cart and checkout experiences</a> for Metro by T-Mobile.",
        'Leads the team development effort to migration of cart and checkout experiences on next-gen platform for Metro by T-Mobile.',
      ],
      link: 'https://nortal.com/',
      logo: '/img/companies/nortal.png',
      clientLogos: {
        light: ['/img/brands/tmobile.png', '/img/brands/tvision.png', '/img/brands/metro.png'],
        dark: ['/img/brands/tmobile.png', '/img/brands/tvision.png', '/img/brands/metro-dark.png'],
      },
    },
    {
      employer: 'Extreme Arts + Sciences',
      title: 'Senior Full Stack Developer',
      time: 'October 2018 - October 2020',
      icon: 'fab fa-node-js',
      description: [
        'Full-stack development focused on building unique solutions for our clients that includes PHP (<b>Laravel</b> & custom), HTML5, CSS Preprocessors (<b>SASS</b>), Front-end/Back-end Node/JS (<b>Ractive.js</b>, <b>React-native</b>, jQuery, <b>TypeScript</b>, <b>HAPI</b>, <b>Joi</b>, <b>ExpressJs</b>, ES6, and more), Build & Task runners (<b>Grunt</b>, <b>Webpack</b>), UI Unit and Automation testing (<b>PHPUnit</b>, <b>Ruby</b>, <b>Cucumber</b>, <b>Selenium</b>), <b>Ionic</b> (Angular 7/8) hybrid mobile app development, and Sitecore (C# XP 9) development and support, containerization using <b>Docker</b>/Docker-compose, cloud platform operations support and configuration on <b>Azure</b> and <b>AWS</b>.',
        'Spearheads <b>test-driven development</b> configuration and paved roads by leveraging Unit testing as well as QA Automation testing with Ruby, Cucumber and Selenium.',
        "Played a key role in advancing <a class='external-link' target='_blank' rel='noopener noreferrer' href='https://web.archive.org/web/20200816235044/https:/iotinactionevents.com'>Microsoft's Iot in Action Events</a> technology orchestration including Matchmaking platform, <a class='external-link' target='_blank' rel='noopener noreferrer' href='https://easci.com/case-study/microsoft-iot/'>Electron based check-in app</a>, and high-volume email campaigns. ",
        "Designed, built, and deployed <a class='external-link' target='_blank' rel='noopener noreferrer' href='https://steprimo.com/iphone/br/app/1478820746/IoT-in-Action-Events/'>Ionic (AngularJS) hybrid mobile app</a> from the ground up for Microsoft as a companion for IoT in Action Event conference series.",
        'Maintained and updated web-based presentation platform for Bing using reveal.js and Ractive.js.',
        'Designed, built, and deployed web-based Email platform-agnostic signature generator for GoDaddy and GoDaddy Guides.',
      ],
      link: 'https://easci.com/',
      logo: '/img/companies/eas-logo.webp',
      clientLogos: {
        light: [
          '/img/brands/microsoft.png',
          '/img/brands/bing.png',
          '/img/brands/godaddy.png',
          '/img/brands/united-fcu.svg',
          '/img/brands/tdecu.svg',
        ],
        dark: [
          '/img/brands/microsoft-dark.png',
          '/img/brands/bing.png',
          '/img/brands/godaddy.png',
          '/img/brands/united-fcu.svg',
          '/img/brands/tdecu.svg',
        ],
      },
    },
    {
      employer: 'York',
      title: 'Full Stack Developer',
      time: 'January 2014 - October 2018',
      icon: 'fas fa-laptop-code',
      description: [
        'Works with web technologies such as <b>HTML5</b>, <b>CSS3</b>, Responsive Web Design, <b>PHP</b> (Laravel, Joomla, Wordpress), JavaScript (<b>AngularJS</b> 1-2, <b>jQuery</b>, <b>jQuery UI</b>,  <b>RivetsJS</b>, MVVM concepts), <b>LAMP Stack</b> administration, <b>MySQL</b>, <b>MSSQL</b>, <b>MongoDB</b>, <b>Apache Solr</b>, Task Runners (<b>Grunt</b>, <b>Gulp</b>, <b>Yarn</b>), <b>ASP.Net</b> Webforms, MVC, & <b>Entity Framework</b>.',
        'Champions best practices and new processes to improve user experience & user interface design (UI/UX), web presence, and software architecture principals such as service-oriented architecture (SoA).',
        'Migrates manual deployment processes using configuration of continuous integration & delivery (CI/CD) pipelines using <b>TeamCity</b> and <b>Octopus Deploy</b> to improve <b>DevOps</b> practices in both Linux and Windows server environments.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
      logo: '/img/companies/york.png',
      clientLogos: {
        light: ['/img/brands/farmers.webp', '/img/brands/walmart.png', '/img/brands/lyft.png'],
        dark: ['/img/brands/farmers-dark.png', '/img/brands/walmart.png', '/img/brands/lyft.png'],
      },
    },
    {
      employer: 'MEDTRON Software Intelligence Corporation',
      title: 'Application Programmer / Analyst',
      time: 'April 2013 - January 2014',
      icon: 'fab fa-php',
      description: [
        'Works with leading edge web technologies such as <b>HTML5</b>, <b>CSS3</b>, <b>PHP</b>, <b>Zend MVC</b>, <b>MySQL</b>, PDO DB Abstraction with <b>Doctrine 2 ORM</b>/DBAL.',
        "Contributes new feature work and tech debt refinement for MEDTRON's Electronic Health Record System (EHR) with focus on HIPPA compliance and usability.",
      ],
      link: 'https://www.medtronsoftware.com/',
      logo: '/img/companies/medtron.png',
    },
    {
      employer: 'York Risk Services Group, Inc.',
      title: 'Software Engineer I & II',
      time: 'February 2009 - April 2013',
      icon: 'fas fa-code',
      description: [
        'Works with Open Source technologies such as <b>JavaScript</b>, <b>jQuery</b>, <b>jQueryUI</b>, <b>PHP</b>, <b>MySQL</b>, <b>XML</b>, <b>HTML</b>, <b>CSS</b>, and champions DX command-line tooling & scripting with <b>Perl</b>.',
        'Gained strong fundamentals with many web service protocols, including <b>SOAP</b> and <b>REST</b> endpoint configurations in Progress 4GL and <b>Java</b> environments.',
        'Configures, deploys, and maintains administration with on-prem <b>SuSE Linux Enterprise</b>, <b>Apache 2.x</b>, <b>Apache Tomcat 5.x/6</b>, <b>Apache Solr</b>, <b>Apache Lucene</b>, and Secure FTP orchestrations.',
        'Trained in <b>Adobe LiveCycle ES2</b> Process Development, LiveCycle ES2 Server Configuration and Management, Adobe ES2 Form Design and Implementation.',
        'Implementation of refined HCI (Human-Computer Interaction) interface design and development using self-taught graphics design and implementation in web and desktop environments using graphics design tools such as Adobe <b>Fireworks</b>, <b>Illustrator</b>, and <b>Photoshop</b>.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
      logo: '/img/companies/yorkrsg.webp',
    },
  ],
  skills: [
    'html5',
    'css3',
    'react',
    'react-router',
    'relay',
    'nextjs',
    'react-router',
    'graphql',
    'angularjs',
    'chakra-ui',
    'material-ui',
    'tailwindcss',
    'rxjs',
    'ngrx',
    'nx',
    'typescript',
    'javascript',
    'php',
    'c#',
    'node-js',
    'express-js',
    'ionic-framework',
    'jquery',
    'jquery-ui',
    'ractive.js',
    'hapi',
    'bootstrap',
    'zurb-foundation',
    'laravel',
    'zend-framework',
    'asp.net-mvc',
    'rivets-js',
    'mongodb',
    'mysql',
    'mssql',
    'entity-framework',
    'orm',
    'nightwatch-js',
    'cypress',
    'cucumber',
    'selenium',
    'ruby',
    'aws',
    'google-cloud',
    'azure',
    'linux',
    'apache-httpd',
    'apache-solr',
    'iis',
    'octopus-deploy',
    'teamcity',
    'docker',
  ],
  technologies: [
    {
      id: 'cloudflare-pages',
      label: 'Cloudflare Pages',
      link: 'https://pages.cloudflare.com/',
      icon: faCloudflare,
    },
    {
      id: 'html5',
      label: 'HTML5',
      link: 'https://html.spec.whatwg.org/',
      icon: faHtml5,
    },
    {
      id: 'css3',
      label: 'CSS3',
      link: 'https://www.w3.org/Style/CSS/#specs',
      icon: faCss3,
    },
    {
      id: 'react',
      label: 'React',
      link: 'https://react.dev/',
      icon: faReact,
    },
    {
      id: 'react-router',
      label: 'React Router',
      link: 'https://reactrouter.com/',
      icon: faRoute,
    },
    {
      id: 'relay',
      label: 'React Relay',
      link: 'https://relay.dev/',
      icon: faMemory,
    },
    {
      id: 'nextjs',
      label: 'NextJS',
      link: 'https://nextjs.org/',
      icon: faReact,
    },
    {
      id: 'remix',
      label: 'Remix',
      link: 'https://remix.run/',
      icon: faReact,
    },
    {
      id: 'graphql',
      label: 'GraphQL',
      link: 'https://graphql.org/',
      icon: faCircleNodes,
    },
    {
      id: 'angular-js',
      label: 'AngularJs',
      link: 'https://angularjs.org/',
      icon: faAngular,
    },
    {
      id: 'chakra-ui',
      label: 'Chakra UI',
      link: 'https://chakra-ui.com/',
      icon: faWandMagicSparkles,
    },
    {
      id: 'material-ui',
      label: 'Material UI',
      link: 'https://mui.com/',
      icon: faWandMagicSparkles,
    },
    {
      id: 'tailwindcss',
      label: 'tailwindcss',
      link: 'https://tailwindcss.com/',
      icon: faWandMagicSparkles,
    },
    {
      id: 'rxjs',
      label: 'RxJs',
      link: 'https://rxjs.dev/',
      icon: faJs,
    },
    {
      id: 'ngrx',
      label: 'NgRx',
      link: 'https://ngrx.io/',
      icon: faMemory,
    },
    {
      id: 'nx',
      label: 'Nx',
      link: 'https://nx.dev/',
      icon: faTerminal,
    },
    {
      id: 'typescript',
      label: 'Typescript',
      link: 'https://www.typescriptlang.org/',
      icon: faJs,
    },
    {
      id: 'javascript',
      label: 'JavaScript',
      link: 'https://tc39.es/ecma262/',
      icon: faJs,
    },
    {
      id: 'php',
      label: 'PHP',
      link: 'https://www.php.net/',
      icon: faPhp,
    },
    {
      id: 'c#',
      label: 'C#',
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      icon: faCode,
    },
    {
      id: 'node-js',
      label: 'Node.js',
      link: 'https://nodejs.org/en',
      icon: faNodeJs,
    },
    {
      id: 'express-js',
      label: 'Express.js',
      link: 'https://expressjs.com/',
      icon: faServer,
    },
    {
      id: 'ionic-framework',
      label: 'Ionic Framework',
      link: 'https://ionicframework.com/',
      icon: faMobileScreenButton,
    },
    {
      id: 'jquery',
      label: 'JQuery',
      link: 'https://jquery.com/',
      icon: faDisplay,
    },
    {
      id: 'jquery-ui',
      label: 'JQuery UI',
      link: 'https://jqueryui.com/',
      icon: faDisplay,
    },
    {
      id: 'ractive-js',
      label: 'Ractive.js',
      link: 'https://ractive.js.org/',
      icon: faJs,
    },
    {
      id: 'hapi',
      label: 'hapi',
      link: 'https://hapi.dev/',
      icon: faNodeJs,
    },
    {
      id: 'bootstrap',
      label: 'Bootstrap',
      link: 'https://getbootstrap.com/',
      icon: faBootstrap,
    },
    {
      id: 'zurb-foundation',
      label: 'Zurb Foundation',
      link: 'https://get.foundation/',
      icon: faDisplay,
    },
    {
      id: 'laravel',
      label: 'Laravel',
      link: 'https://laravel.com/',
      icon: faLaravel,
    },
    {
      id: 'zend-framework',
      label: 'Zend Framework',
      link: 'https://framework.zend.com/',
      icon: faPhp,
    },
    {
      id: 'asp-net-mvc',
      label: 'ASP.Net MVC',
      link: 'https://dotnet.microsoft.com/en-us/apps/aspnet/mvc',
      icon: faCode,
    },
    {
      id: 'rivets-js',
      label: 'RivetsJs',
      link: 'http://rivetsjs.com/',
      icon: faJs,
    },
    {
      id: 'mongodb',
      label: 'MongoDB',
      link: 'https://www.mongodb.com/',
      icon: faDatabase,
    },
    {
      id: 'mysql',
      label: 'MySQL',
      link: 'https://www.mysql.com/',
      icon: faDatabase,
    },
    {
      id: 'mssql',
      label: 'MSSQL',
      link: 'https://www.microsoft.com/en-us/sql-server',
      icon: faDatabase,
    },
    {
      id: 'entity-framework',
      label: 'Entity Framework',
      link: 'https://learn.microsoft.com/en-us/aspnet/entity-framework',
      icon: faDatabase,
    },
    {
      id: 'orm',
      label: 'ORM',
      link: 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping',
      icon: faLayerGroup,
    },
    {
      id: 'nightwatch-js',
      label: 'Nightwatch.js',
      link: 'https://nightwatchjs.org/',
      icon: faVial,
    },
    {
      id: 'cypress',
      label: 'Cypress',
      link: 'https://www.cypress.io/',
      icon: faVial,
    },
    {
      id: 'cucumber',
      label: 'Cucumber',
      link: 'https://cucumber.io/',
      icon: faVial,
    },
    {
      id: 'selenium',
      label: 'Selenium',
      link: 'https://www.selenium.dev/',
      icon: faVial,
    },
    {
      id: 'ruby',
      label: 'Ruby',
      link: 'https://www.ruby-lang.org/en/',
      icon: faGem,
    },
    {
      id: 'aws',
      label: 'AWS',
      link: 'https://aws.amazon.com/',
      icon: faAws,
    },
    {
      id: 'google-cloud',
      label: 'Google Cloud',
      link: 'https://cloud.google.com/',
      icon: faGoogle,
    },
    {
      id: 'azure',
      label: 'Azure',
      link: 'https://azure.microsoft.com/en-us',
      icon: faMicrosoft,
    },
    {
      id: 'linux',
      label: 'Linux',
      link: 'https://www.linux.org/',
      icon: faLinux,
    },
    {
      id: 'apache-httpd',
      label: 'Apache HTTPd',
      link: 'https://httpd.apache.org/',
      icon: faServer,
    },
    {
      id: 'apache-solr',
      label: 'Apache Solr',
      link: 'https://solr.apache.org/',
      icon: faSearch,
    },
    {
      id: 'iis',
      label: 'IIS',
      link: 'https://www.iis.net/',
      icon: faServer,
    },
    {
      id: 'octopus-deploy',
      label: 'Octopus Deploy',
      link: 'https://octopus.com/',
      icon: faOctopusDeploy,
    },
    {
      id: 'teamcity',
      label: 'TeamCity',
      link: 'https://www.jetbrains.com/teamcity/',
      icon: faCodeCompare,
    },
    {
      id: 'docker',
      label: 'Docker',
      link: 'https://www.docker.com/',
      icon: faDocker,
    },
    {
      id: 'font-awesome',
      label: 'Font Awesome',
      link: 'https://fontawesome.com/',
      icon: faFontAwesome,
    },
    {
      id: 'tw-elements',
      label: 'Tailwind Elements',
      link: 'https://tailwind-elements.com/',
      icon: faCss3,
    },
    {
      id: 'twilio',
      label: 'Twilio',
      link: 'https://www.twilio.com/',
      icon: faBell,
    },
    {
      id: 'fontsource',
      label: 'Fontsource',
      link: 'https://fontsource.org/',
      icon: faFont,
    },
    {
      id: 'ocr',
      label: 'OCR',
      link: 'https://en.wikipedia.org/wiki/Optical_character_recognition',
      icon: faCamera,
    },
    {
      id: 'sass',
      label: 'SASS',
      link: 'https://sass-lang.com/',
      icon: faSass,
    },
    {
      id: 'android',
      label: 'Android',
      link: 'https://www.android.com/',
      icon: faAndroid,
    },
  ],
  projects: [
    {
      id: 'portfolio',
      name: 'Portfolio',
      date: new Date('Aug, 2023'),
      image: { src: '/img/projects/portfolio.png', type: 'image/png', height: 300 },
      technologies: [
        'remix',
        'cloudflare-pages',
        'fontsource',
        'tailwindcss',
        'font-awesome',
        'tw-elements',
      ],
      hasArticle: true,
      description:
        "Portfolio re-imagined with Remix using data-driven SSR, continuously deployed to Cloudflare Pages. Optimized with self-hosted Fontsource fonts & Font-awesome icons and Remix's SSR functionality leveraging the lightning fast Cloudflare Edge network.",
    },
    {
      id: 'eeka',
      name: 'eekä',
      date: new Date('Dec, 2019'),
      image: { src: '/img/projects/eeka-home.png', type: 'image/png', height: 300 },
      technologies: ['angular-js', 'express-js', 'rxjs', 'google-cloud'],
      description:
        'An lightweight Angular web app to visualize "everything I care about" (eekä). Using Angular & ExpressJs along with Google Cloud Datastore this app is a passion project to put many disconnected things in one place. Aggregating data from IoT smart devices (Personal Weather Station, HVAC, etc) with GCP Cloud Functions, I am then able to retrieve and display meaningful real-time data using Apache ECharts. Integrating many other 3rd party services such as DarkSky, The Weather Channel, YouTube, Google Maps, TradingView, and many others I am able to consolidate the sheer number of apps and services all in one place–constantly evolving.',
    },
    {
      id: 'crash-cart-app',
      name: 'CrashCart App',
      date: new Date('Nov, 2019'),
      image: {
        src: '/img/projects/crash-cart-frame.png',
        type: 'image/png',
        height: 300,
        classes: 'mx-auto max-w-sm shadow-none',
      },
      technologies: ['angular-js', 'ionic-framework', 'ocr'],
      description:
        'Another hybrid mobile app built using Ionic v4 (Angular 8, Wk WebView) built for HealthFirst to augment ordering CrashCarts by scanning medical labels and using OCR technology to extract and lookup drugs with an NDC code on the label.',
    },
    {
      id: 'iot-events-app',
      name: 'IoT Events App',
      date: new Date('Jan, 2020'),
      image: {
        src: '/img/projects/iot-mobile-app.png',
        type: 'image/png',
        height: 300,
        classes: 'mx-auto max-w-sm shadow-none',
      },
      technologies: ['angular-js', 'ionic-framework', 'twilio'],
      description:
        'Ionic v4 Angular 8 hybrid built as a companion to iotinactionevents.com, with quick access to event details, ticket for event entry, event-centric push notifications, QR contact scan & share, and dynamic content publishing platform. This app is deployed to Android and iOS using Ionic and Apache Cordova.',
      // link: 'https://web.archive.org/web/20200512091719/https://apps.apple.com/us/app/iot-in-action-events/id1478820746',
      link: 'https://easci.com/case-study/microsoft-iot/',
    },
    {
      id: 'iot-in-action-events',
      name: 'IoT In Action Events',
      date: new Date('Oct, 2018'),
      image: {
        src: '/img/projects/iot-web.png',
        type: 'image/png',
        height: 300,
      },
      technologies: ['php', 'ractive-js', 'javascript', 'mysql'],

      description:
        'A web-based event orchestration platform, from event registration to in-person networking using the proprietary matchmaking software, IoT in Action Events has been a staple product for Microsoft to empower industry IoT experts, students, and solution providers all in one place. Supplemented in 2019 with the IoT Event mobile app, and Video-on-demand platform, the IoT in Action experience continues to grow under partnership between EAS and Microsoft.',
      link: 'https://web.archive.org/web/20200816235044/https:/iotinactionevents.com/',
    },
    {
      id: 'godaddy-signature',
      name: 'GoDaddy Email Signature Generator',
      date: new Date('Dec, 2018'),
      image: {
        src: '/img/projects/godaddy-email-sig/main.png',
        type: 'image/png',
        height: 300,
        width: 300,
      },
      technologies: ['php', 'bootstrap', 'javascript', 'css3'],
      description:
        'Built with Bootstrap v4 & PHP to help aid GoDaddy Guides, Registry, and Corporate employees to create their email signatures and help maintain a consistent look and feel across the organization.',
    },
    {
      id: 'easci-signature',
      name: 'EASCI Email Signature Generator',
      date: new Date('Dec, 2018'),
      image: {
        src: '/img/projects/easci-email-sig/signature-fold.png',
        type: 'image/png',
        height: 300,
      },
      technologies: ['php', 'bootstrap', 'javascript', 'css3'],
      description:
        'Built with Bootstrap v4 & PHP to help users create their email signatures at Extreme Arts + Sciences and helps maintain a consistent look and feel across the organization.',
    },
    {
      id: 'iris',
      name: 'IRIS',
      date: new Date('Sep, 2016'),
      image: { src: '/img/projects/iris.jpg', type: 'image/jpg', height: 300, width: 300 },
      technologies: ['php', 'jquery', 'jquery-ui', 'javascript', 'apache-solr', 'mysql'],
      description:
        'IRIS is an web-based safety library with industry and state driven content with a focus on preventing claims and offering a vast searchable library of safety and training content. Completely home-grown and built on open source technology, LAMP coupled with Apache Solr; and features a highly developed content management administrative toolset.',
      link: 'https://web.archive.org/web/20171027211006/https://iris.yorkrsg.com/gateway',
    },
    {
      id: 'york-styleguide',
      name: 'York Styleguide',
      date: new Date('Jun, 2015'),
      image: {
        src: '/img/projects/york-styleguide.jpg',
        type: 'image/jpg',
        height: 300,
        width: 300,
      },
      technologies: ['html5', 'php', 'javascript', 'sass'],
      sources: ['https://github.com/adactio/Pattern-Primer'],
      description:
        'The York Styleguide was built to help maintain a corporate web-based styleguide govern corporate web-based application look and feel. Also provide brand guidance, resources, and code snippets to developers at York.',
    },
    {
      id: 'careworks-styleguide',
      name: 'Careworks Styleguide',
      date: new Date('Jun, 2015'),
      image: {
        src: '/img/projects/careworks-styleguide/primary.png',
        type: 'image/png',
        height: 300,
        width: 300,
      },
      technologies: ['html5', 'php', 'javascript', 'sass'],
      sources: ['https://github.com/adactio/Pattern-Primer'],
      description:
        'The Careworks Styleguide was built to help maintain a corporate web-based styleguide govern corporate web-based application look and feel. Also provide brand guidance, resources, and code snippets to developers at York.',
    },
    {
      id: 'monocle',
      name: 'Monocle',
      date: new Date('Sep, 2016'),
      image: { src: '/img/projects/monocle.jpg', type: 'image/jpg', height: 169, width: 300 },
      technologies: ['android'],
      description:
        'Using Google Glass, Monocle was a proof of concept project using Android Dev Studio for York Innovation to push the boundaries of the Risk Assessment process.',
    },
    {
      id: 'focus-help-portal',
      name: 'FOCUS Help Portal',
      date: new Date('Jun, 2015'),
      image: { src: '/img/projects/focus-help.jpg', type: 'image/jpg', height: 300, width: 300 },
      technologies: ['html5', 'css3', 'php', 'javascript', 'sass'],
      description:
        "Built as a companion to York's RIMS system, FOCUS Help Portal provide training material, and other useful information to help FOCUS users. It was built using a highly customized version of HTML5 Boilerplate.",
      link: 'https://help.focus.yorkrsg.com/',
    },
    {
      id: 'email-signature-generator',
      name: 'Email Signature Generator',
      date: new Date('Aug, 2016'),
      image: { src: '/img/projects/emailsig.jpg', type: 'image/jpg', height: 296, width: 300 },
      technologies: ['php', 'bootstrap', 'javascript', 'css3'],
      description:
        'Built with Bootstrap v4, PHP, and Micro-service Offices API to assist users create their email signatures at York and helps maintain a consistent look and feel across the organization.',
      // link: 'https://emailsig.yorkrisk.com/',
    },
    {
      id: 'provider-gateway',
      name: 'Provider Gateway',
      date: new Date('Jul, 2017'),
      image: { src: '/img/projects/provider.jpg', type: 'image/jpg', height: 300, width: 300 },
      description:
        'Provider Gateway is a self-service tool to assist providers in looking up payment statuses from claims submitted through York. Built on ASP.Net MVC, ASP.Net WebAPI, and Bootstrap v3.',
    },
    {
      id: 'wc-payment-options',
      name: 'WC Payment Options',
      date: new Date('Mar, 2014'),
      image: { src: '/img/projects/wcpay.jpg', type: 'image/jpg', height: 300 },
      technologies: ['javascript', 'html5', 'css3'],
      description:
        "WC Payment Options is a companion website to FARA's claim system at the time and was built in the early days before responsive web design really took a hold. It was designed to be dead simple to use for claimants to choose how they receive their Worker's Compensation benefits.",
      link: 'https://wcpaymentoptions.com/',
    },
    {
      id: 'york-loader',
      name: 'York Loader',
      date: new Date('Apr, 2017'),
      image: {
        src: '/img/projects/york-loader.svg',
        type: 'image/svg+xml',
        height: 200,
        class: 'york-loader',
      },
      description:
        'York loader is a SVG animated loader created for optimized loading with some York flare. It\'s done using CSS <span class="font-mono text-orange-700 dark:text-orange-500">stroke-dasharray</span> and <span class="font-mono text-orange-700 dark:text-orange-500">stroke-dashoffset</span> with keyframes CSS animation.',
    },
  ],
};
