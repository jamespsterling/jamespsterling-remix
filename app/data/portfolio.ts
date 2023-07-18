import { CSSProperties } from 'react';

export const data = {
  jobs: [
    {
      employer: 'Lattice',
      title: 'Staff Software Engineer',
      time: 'May 2022 - Present',
      icon: 'fab fa-react',
      description: [
        'Full stack development focused engineering empowering experiences using React, Nextjs, Relay, & GraphQL.',
      ],
      link: 'https://lattice.com/',
    },
    {
      employer: 'Nortal',
      title: 'Lead Software Development Engineer',
      time: 'October 2020 - May 2022',
      icon: 'fab fa-angular',
      description: [
        'Front-end & Microservice focused engineering of enterprise web experiences using Angular 12+, Nx, NgRx (Angular Redux), RxJs, Jest, Spectator, HAPI, and Adobe Adobe Experience Manager.',
        'Leads teams in technology best practices with Angular, TypeScript, NodeJs, Git, Material UI, and others with in-depth code reviews, coaching, and pair programming.',
        'Works closely with Product, Architecture, Backend, Security, and UI/UX teams to ensure delivery of highly usable customer-facing experiences across desktop and mobile.',
      ],
      link: 'https://nortal.com/',
    },
    {
      employer: 'Extreme Arts + Sciences',
      title: 'Senior Full Stack Developer',
      time: 'October 2018 - October 2020',
      icon: 'fab fa-node-js',
      description: [
        'Full-stack development focused on building unique solutions for our clients that includes PHP (Laravel & custom), HTML5, CSS/Sass, Front-end/Back-end Node/JS (Ractive.js, React-native, jQuery, Typescript, HapiJs, Joi, ExpressJs, ES6, and more), Build & Task runners (Grunt, Webpack), UI Unit and Automation testing (PHPUnit, Ruby, Cucumber, Selenium), Ionic (Angular 7/8) Mobile App Development, and Sitecore (C# XP 9) development and support, containerization using Docker/Docker-compose, cloud platform operations support and configuration (Azure, AWS, & Google Cloud Platform).',
        'Encourages test-driven development by leveraging Unit testing as well as QA Automation testing with Ruby, Cucumber and Selenium.',
      ],
      link: 'https://easci.com/',
    },
    {
      employer: 'York Risk Services Group, Inc.',
      title: 'Full Stack Developer',
      time: 'January 2014 - October 2018',
      icon: 'fas fa-laptop-code',
      description: [
        'Works with web technologies such as HTML5, CSS3, Responsive Web Design, PHP (Laravel, Joomla, Wordpress), JavaScript (AngularJS, jQuery, RivetsJS, MVVM), LAMP Stack/Administration, MySQL/MSSQL, MongoDB, Apache Solr, Task Runners (Grunt, Gulp, Yarn), ASP.Net Webforms/MVC/Entity Framework and processes such as user experience design (UXD) and user interface design (UID), web presence, web mastery.',
        'Leads colleagues in best practices for Web design, Software Architecture, and Continuous Integration technologies.',
        'Leading expert in configuration of Continuous Integration workflows to improve DevOps practices, working with TeamCity, Octopus Deploy, and Jenkins in both Linux and Windows environments.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
    },
    {
      employer: 'MEDTRON Software Intelligence Corporation',
      title: 'Application Programmer / Analyst',
      time: 'April 2013 - January 2014',
      icon: 'fab fa-php',
      description: [
        'Works with leading edge web technologies such as HTML5, CSS3, PHP, Zend MVC, PDO DB Abstraction with Doctrine 2 ORM/DBAL.',
        "Works to improve MEDTRON's Electronic Health Record System (EHR).",
      ],
      link: 'https://www.medtronsoftware.com/',
    },
    {
      employer: 'York Risk Services Group, Inc.',
      title: 'Software Engineer I & II',
      time: 'February 2009 - April 2013',
      icon: 'fas fa-code',
      description: [
        'Progress 4GL - OpenEdge Advanced Business Language, or OpenEdge ABL for short, is a business application development language created and maintained by Progress Software Corporation (PSC).',
        'Open Source - JavaScript, jQuery, jQueryUI, PHP, MySQL, Perl, XML, HTML, CSS. Server Configuration/Administration – SuSE Linux Enterprise, Apache 2.x, Apache Tomcat 5.x/6, Apache Solr, Apache Lucene, Secure FTP.',
        'Adobe LiveCycle - Trained in Adobe LiveCycle ES2 Process Development, LiveCycle ES2 Server Configuration and Management, Adobe ES2 Form Design and Implementation.',
        'Web Services - Familiar with many web service protocols, including SOAP and REST endpoint configurations in Progress and Java environments.',
        'Web Design (HCI) - Implementation of existing and new HCI (Human-Computer Interaction) interface design and development. Self-taught graphics design and implementation in web and desktop environments; including Progress SpeedScript, PHP, HTML, and JavaScript and JavaScript frameworks as well as using graphics design tools such as Adobe Fireworks, Illustrator, and Photoshop.',
      ],
      link: 'https://www.sedgwick.com/acquisition-news',
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
