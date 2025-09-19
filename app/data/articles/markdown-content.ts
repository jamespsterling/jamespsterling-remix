// Cloudflare Pages compatible markdown content
// Import markdown files as strings

export const portfolioMarkdown = `---
title: "Portfolio Case Study"
date: 2023-08-01T00:00:00.000Z
projectId: "portfolio"
description: "Portfolio re-imagined with Remix using data-driven SSR, continuously deployed to Cloudflare Pages. Optimized with self-hosted Fontsource fonts & Font-awesome icons and Remix's SSR functionality leveraging the lightning fast Cloudflare Edge network."
---

# Case Study

Version 1 of my portfolio site was built on traditional [HTML, JavaScript, & CSS](https://github.com/jamespsterling/jamespsterling.github.io/blob/master/index.html) with [Grunt](https://github.com/jamespsterling/jamespsterling.github.io/blob/master/gulpfile.js) building SASS and minifying JS & CSS. While the norm for a long time in the 2010s, this felt dated and was difficult to maintain and update from a content perspective. It is also not optimized to use the latest and greatest of hosting platforms such as Cloudflare and the Edge Network.

## Refactor

Wanting to use my recent admiration for React frameworks and recalling a colleague suggest [Remix](https://remix.run/), I took to diving head deep into seeing what performance optimizations it might afford over a vanilla React or Next.js content site.

Getting up and running with Cloudflare Pages takes just a couple minutes–cloudflare publishes some [excellent documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/) on setting up a new Remix app ready for Cloudflare Pages.

## Setup

Since version 1 was built on mostly HTML & CSS, migrating the bulk of the content was simple using Remix. After creating a new repo and linking that repo to Cloudflare via Github, CI/CD is basically setup thereafter and by default will auto-deploy anything pushed to \`main\`.

## Optimization

### Styles

Since most of my styles were written in a single SASS file, I wanted to leverage better organization by modularizing my SASS. Doing this helps tremendously with the cognitive load of find and updating styles that apply to only a single component or page of my app.

### Assets

Asset loading has long been something you might link out to as a 3rd-party CDN host which comes with security concerns and risk for downtime. Asset loading fonts & icons can be greatly improved by self-hosting said assets. By moving assets like fonts local to your application, not only can this help reduce external requests during or after rendering, it can aid in eliminating ["screen jank"](https://www.afasterweb.com/2015/08/29/what-the-jank/).

Traditionally, Google Fonts support using the CSS descriptor \`{ font-display: swap }\` can help with render-blocking font loading, however the swap process still means there is a noticeable render "pop" after font assets are loaded for the first time.

Fontsource is paving the way for [optimization with self-hosting fonts](https://fontsource.org/docs/getting-started/introduction#1-performance).

> "Self-hosting fonts can significantly improve website performance by eliminating the extra latency caused by additional DNS resolution and TCP connection establishment that is required when using a CDN like Google Fonts. This can help to prevent doubled visual load times for simple websites, as benchmarked here and here."

### Bundling

Many front-end engineers understanding the importance of reducing the number and size of final compiled bundles in a modern web app. Webpack is often the goto bundler shipped with most modern front-end frameworks. Ensuring we leverage aspects such as "tree-shaking", minification, or lazy-loading are critical to ensuring your bundle(s) are \`kilobytes\` instead of \`megabytes\` when our app is deployed in production.

#### Webpack compilation

Using [esbuild Bundle Size Analyzer](https://esbuild.github.io/analyze/) we can see where the largest modules might be impacting the overall bundle size. One notable issue is importing all of \`@fortawesome/fontawesome-svg-core\` instead of manually importing only our used icons.

![Optimization Before](/img/projects/portfolio/optimization-before.png)

Optimizing we can save upwards of \`~845 kb\`.

![Optimization After](/img/projects/portfolio/optimization-after.png)

### Wrapping up

Testing with lighthouse shows eliminating render-blocking requests, improved bundling, and reducing the number of network requests has a very real impact on scoring, which has a user perceived impact on performance as well as weighing heavily on how search engines rank your site.

![Optimization](/img/projects/portfolio/optimization.png)

## Closing
Overall the initial migration to Remix, self-hosted assets, and the Cloudflare Pages platform makes maintaining my portfolio a positive practice and treating the project as I would any other web application means I can continue to iterate with the latest technology & optimizations while learning new skills and techniques.`;

export const iotEventsMarkdown = `---
title: "IoT Events App"
date: 2020-01-01T00:00:00.000Z
projectId: "iot-events-app"
description: "Ionic v4 Angular 8 hybrid built as a companion to iotinactionevents.com, with quick access to event details, ticket for event entry, event-centric push notifications, QR contact scan & share, and dynamic content publishing platform. This app is deployed to Android and iOS using Ionic and Apache Cordova."
---

![IoT Events App Splash](/img/projects/iot-events-app/splash.png)
![Event Speakers](/img/projects/iot-events-app/event-speakers-sm.png)
![Notifications](/img/projects/iot-events-app/notifications-sm.png)
![Event Details](/img/projects/iot-events-app/event-sm.png)
![Event Venue](/img/projects/iot-events-app/event-venue-sm.png)
![Events List](/img/projects/iot-events-app/events.png)`;
