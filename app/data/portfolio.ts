import { CSSProperties } from 'react';

export const data = {
  jobs: [
    {
      employer: 'Lattice',
      title: 'Staff Software Engineer',
      time: 'May 2022 - Present',
      icon: 'fab fa-react',
      description: [
        'Full stack development on new product initiatives and next-gen platform engineering focused engineering empowering experiences using <b>React</b>, <b>Next.js</b>, <b>Relay</b>, & <b>GraphQL</b>.',
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
        'Front-end & Microservice focused engineering of enterprise web experiences using <b>Angular</b> 12-13, <b>Nx</b>, <b>NgRx</b> (Angular Redux), <b>RxJs</b>, <b>Jest</b>, <b>Spectator</b>, <b>HAPI</b>, and Adobe Adobe Experience Manager.',
        'Leads teams in technology best practices with Angular, TypeScript, NodeJs, Git, Material UI, and others with in-depth code reviews, coaching, and pair programming.',
        'Works closely with Product, Architecture, Backend, Security, and UI/UX teams to ensure delivery of highly usable customer-facing experiences across desktop and mobile.',
        "Partnered across teams on T-Mobile's TVision <a target='_blank' href='https://web.archive.org/web/20220604032641/https:/www.t-mobile.com/tv-streaming'>marketing and upper-funnel</a> user-facing application as well as delivering next-gen<a target='_blank' href='https://www.metrobyt-mobile.com/cart'> cart and checkout experiences</a> for Metro by T-Mobile.",
      ],
      link: 'https://nortal.com/',
      logo: '/img/companies/nortal.png',
      clientLogos: ['/img/brands/t-mobile.png', '/img/brands/metro.svg'],
    },
    {
      employer: 'Extreme Arts + Sciences',
      title: 'Senior Full Stack Developer',
      time: 'October 2018 - October 2020',
      icon: 'fab fa-node-js',
      description: [
        'Full-stack development focused on building unique solutions for our clients that includes PHP (<b>Laravel</b> & custom), HTML5, CSS/<b>SASS</b>, Front-end/Back-end Node/JS (<b>Ractive.js</b>, <b>React-native</b>, jQuery, <b>TypeScript</b>, <b>HAPI</b>, <b>Joi</b>, <b>ExpressJs</b>, ES6, and more), Build & Task runners (<b>Grunt</b>, <b>Webpack</b>), UI Unit and Automation testing (<b>PHPUnit</b>, <b>Ruby</b>, <b>Cucumber</b>, <b>Selenium</b>), <b>Ionic</b> (Angular 7/8) Mobile App Development, and Sitecore (C# XP 9) development and support, containerization using <b>Docker</b>/Docker-compose, cloud platform operations support and configuration (<b>Azure</b>, <b>AWS</b>, & Google Cloud Platform).',
        'Encourages test-driven development by leveraging Unit testing as well as QA Automation testing with Ruby, Cucumber and Selenium.',
        'Delivered experiences for Microsoft, Adobe, GoDaddy, United Federal Credit Union, and TDECU.',
      ],
      link: 'https://easci.com/',
      logo: '/img/companies/eas-logo.webp',
      clientLogos: [
        '/img/brands/microsoft.png',
        '/img/brands/bing.png',
        '/img/brands/godaddy.png',
        '/img/brands/united-fcu.svg',
        '/img/brands/tdecu.svg',
      ],
    },
    {
      employer: 'York',
      title: 'Full Stack Developer',
      time: 'January 2014 - October 2018',
      icon: 'fas fa-laptop-code',
      description: [
        'Works with web technologies such as <b>HTML5</b>, <b>CSS3</b>, Responsive Web Design, <b>PHP</b> (Laravel, Joomla, Wordpress), JavaScript (<b>AngularJS</b> 1-2, <b>jQuery</b>, <b>jQuery UI</b>,  <b>RivetsJS</b>, MVVM), <b>LAMP Stack</b> administration, <b>MySQL</b>, <b>MSSQL</b>, <b>MongoDB</b>, <b>Apache Solr</b>, Task Runners (<b>Grunt</b>, <b>Gulp</b>, <b>Yarn</b>), <b>ASP.Net</b> Webforms/MVC/Entity Framework and processes such as user experience design (UXD) and user interface design (UID), web presence, and web mastery.',
        'Leads colleagues in best practices for Web design, Software Architecture, and Continuous Integration technologies.',
        'Leading expert in configuration of Continuous Integration workflows to improve <b>DevOps</b> practices, working with <b>TeamCity</b>, <b>Octopus Deploy</b>, and Jenkins in both Linux and Windows environments.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
      logo: '/img/companies/york.png',
      clientLogos: ['/img/brands/farmers.webp', '/img/brands/lyft.png'],
    },
    {
      employer: 'MEDTRON Software Intelligence Corporation',
      title: 'Application Programmer / Analyst',
      time: 'April 2013 - January 2014',
      icon: 'fab fa-php',
      description: [
        'Works with leading edge web technologies such as <b>HTML5</b>, <b>CSS3</b>, <b>PHP</b>, <b>Zend MVC</b>, <b>MySQL</b>, PDO DB Abstraction with <b>Doctrine 2 ORM</b>/DBAL.',
        "Contributes new feature work for MEDTRON's Electronic Health Record System (EHR) with focus on HIPPA compliance and usability.",
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
        '<b>Progress 4GL</b> - OpenEdge Advanced Business Language, or OpenEdge ABL for short, is a business application development language created and maintained by Progress Software Corporation.',
        'Open Source development with <b>JavaScript</b>, <b>jQuery</b>, <b>jQueryUI</b>, <b>PHP</b>, <b>MySQL</b>, <b>XML</b>, <b>HTML</b>, <b>CSS</b>, and DX tooling & scripting with <b>Perl</b>.',
        'Server Configuration and Administration with on-prem <b>SuSE Linux Enterprise</b>, <b>Apache 2.x</b>, <b>Apache Tomcat 5.x/6</b>, <b>Apache Solr</b>, <b>Apache Lucene</b>, and Secure FTP.',
        'Trained in <b>Adobe LiveCycle ES2</b> Process Development, LiveCycle ES2 Server Configuration and Management, Adobe ES2 Form Design and Implementation.',
        'Gained strong fundamentals with many web service protocols, including <b>SOAP</b> and <b>REST</b> endpoint configurations in Progress and <b>Java</b> environments.',
        'Implementation of existing and new HCI (Human-Computer Interaction) interface design and development. Self-taught graphics design and implementation in web and desktop environments; including Progress SpeedScript, <b>PHP</b>, HTML, and <b>JavaScript</b> and JavaScript frameworks as well as using graphics design tools such as Adobe <b>Fireworks</b>, <b>Illustrator</b>, and <b>Photoshop</b>.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
      logo: '/img/companies/yorkrsg.webp',
    },
  ],
  education: [
    {
      university: 'Southeastern Louisiana University',
      degree: 'Bachelor of Science in Computer Science',
      tenure: 'Aug 2005 - Dec 2010',
      concentration: 'Scientific concentration',
      project:
        'Create a ride-sharing app to help link communities of students with others to work out riding sharing for economical purposes.',
    },
  ],
  skills: [
    'HTML5',
    'CSS3',
    'React',
    'Relay',
    'NextJS',
    'GraphQL',
    'AngularJs',
    'RxJs',
    'NgRx',
    'Nx',
    'Typescript',
    'JavaScript',
    'PHP',
    'C#',
    'Node.js',
    'Ionic',
    'JQuery',
    'JQuery UI',
    'Ractive.js',
    'HapiJs',
    'Bootstrap',
    'Zurb Foundation',
    'Laravel',
    'Zend Framework',
    'ASP.Net MVC',
    'RivetsJs',
    'MongoDB',
    'MySQL',
    'MSSQL',
    'Entity Framework',
    'DBORM',
    'Cucumber',
    'Selenium',
    'Ruby',
    'AWS',
    'Google Cloud',
    'Azure',
    'Linux',
    'LAMP',
    'Apache HTTPd',
    'Apache Solr',
    'Windows Server',
    'IIS',
    'Octopus Deploy',
    'TeamCity',
    'Docker',
  ],
  projects: [
    {
      name: 'eekä',
      image: { src: '/img/eeka-home.png', height: 300 },
      description:
        'An lightweight Angular web app to visualize "everything I care about" (eekä). Using Angular & ExpressJs along with Google Cloud Datastore this app is a passion project to put many disconnected things in one place. Aggregating data from IoT smart devices (Personal Weather Station, HVAC, etc) with GCP Cloud Functions, I am then able to retrieve and display meaningful real-time data using Apache ECharts. Integrating many other 3rd party services such as DarkSky, The Weather Channel, YouTube, Google Maps, TradingView, and many others I am able to consolidate the sheer number of apps and services all in one place–constantly evolving.',
    },
    {
      name: 'CrashCart App',
      image: { src: '/img/crash-cart-frame.png', height: 300 },
      description:
        'Another hybrid mobile app built using Ionic v4 (Angular 8, Wk WebView) built for HealthFirst to augment ordering CrashCarts by scanning medical labels and using OCR technology to extract and lookup drugs with an NDC code on the label.',
    },
    {
      name: 'IoT Events App',
      image: {
        src: '/img/iot-phone-mockup.png',
        height: 300,
      },
      description:
        'Ionic v4 Angular 8 hybrid built as a companion to iotinactionevents.com, with quick access to event details, ticket for event entry, event-centric push notifications, QR contact scan & share, and dynamic content publishing platform. This app is deployed to Android and iOS using Ionic and Apache Cordova.',
      link: 'https://web.archive.org/web/20200512091719/https://apps.apple.com/us/app/iot-in-action-events/id1478820746',
    },
    {
      name: 'IoT In Action Events',
      image: {
        src: '/img/iot-web.png',
        height: 300,
      },
      description:
        'A web-based event orchestration platform, from event registration to in-person networking using the proprietary matchmaking software, IoT in Action Events has been a staple product for Microsoft to empower industry IoT experts, students, and solution providers all in one place. Supplemented in 2019 with the IoT Event mobile app, and Video-on-demand platform, the IoT in Action experience continues to grow under partnership between EAS and Microsoft.',
      link: 'https://web.archive.org/web/20200816235044/https:/iotinactionevents.com/',
    },
    {
      name: 'IRIS',
      image: { src: '/img/iris.jpg', height: 300, width: 300 },
      description:
        'IRIS is an web-based safety library with industry and state driven content with a focus on preventing claims and offering a vast searchable library of safety and training content. Completely home-grown and built on open source technology, LAMP coupled with Apache Solr; and features a highly developed content management administrative toolset.',
      link: 'https://web.archive.org/web/20171027211006/https://iris.yorkrsg.com/gateway',
    },
    {
      name: 'York Styleguide',
      image: { src: '/img/york-styleguide.jpg', height: 300, width: 300 },
      description:
        'The York Styleguide was built to help maintain a corporate web-based styleguide govern corporate web-based application look and feel. Also provide brand guidance, resources, and code snippets to developers at York.',
    },
    {
      name: 'Monocle',
      image: { src: '/img/monocle.jpg', height: 169, width: 300 },
      description:
        'Using Google Glass, Monocle was a proof of concept project using Android Dev Studio for York Innovation to push the boundaries of the Risk Assessment process.',
    },
    {
      name: 'FOCUS Help Portal',
      image: { src: '/img/focus-help.jpg', height: 300, width: 300 },
      description:
        "Built as a companion to York's RIMS system, FOCUS Help Portal provide training material, and other useful information to help FOCUS users. It was built using a highly customized version of HTML5 Boilerplate.",
      link: 'https://help.focus.yorkrsg.com/',
    },
    {
      name: 'Email Signature Generator',
      image: { src: '/img/emailsig.jpg', height: 296, width: 300 },
      description:
        'Built with bootstrap v4, PHP, and Micro-service Offices API to assist users create their email signatures at York and helps maintain a consistent look-and-field across the organization.',
      link: 'https://emailsig.yorkrisk.com/',
    },
    {
      name: 'Provider Gateway',
      image: { src: '/img/provider.jpg', height: 300, width: 300 },
      description:
        'Provider Gateway is a self-service tool to assist providers in looking up payment statuses from claims submitted through York. Built on ASP.Net MVC, ASP.Net WebAPI, and Bootstrap v3.',
    },
    {
      name: 'DataX Cheatsheet',
      image: { src: '/img/datax.jpg', height: 300 },
      description:
        'Data X Cheatsheet is a companion tool to help educate claim system users on different areas of various claim systems. It was built using a highly customized version of HTML5 Boilerplate.',
    },
    {
      name: 'WC Payment Options',
      image: { src: '/img/wcpay.jpg', height: 300 },
      description:
        "WC Payment Options is a companion website to FARA's claim system at the time and was built in the early days before responsive web design really took a hold. It was designed to be dead simple to use for claimants to choose how they receive their Worker's Compensation benefits.",
      link: 'https://wcpaymentoptions.com/',
    },
    {
      name: 'York Loader',
      image: { src: '/img/york-loader.svg', height: 200, class: 'york-loader' },
      description:
        "York loader is a SVG animated loader created for optimized loading with some York flare. It's done using CSS stroke-dasharray and stroke-dashoffset with keyframes CSS animation.",
    },
  ],
};
