# Welcome to my Portfolio

A [Remix](https://remix.run) implementation of my portfolio, using static content served using [Remix Data Loading](https://remix.run/docs/en/main/guides/data-loading).

## Setup

This project uses Node.js 18. To fix the version with [Nvm](https://github.com/nvm-sh/nvm), run:

```sh
nvm use
```

Lastly, install the dependencies:

```sh
npm install
```

## Development

Remix uses Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

### Style system

This portfolio app uses modular [SASS](https://sass-lang.com/) & [Tailwindcss](https://tailwindcss.com/).

Tailwind is the new kid on the block, bringing utility-focused class styling which I believe compliments the composition-focus of React. While tailwind does not recommend using a preprocessor in tandem, it is not generally destructive to do so and only means a small detriment to developer experience (DX). Ultimately, I plan to completely switch over to Tailwind entirely.

## Todo

- [x] Dark mode toggle with cookies
- [x] Project showcase to dedicated grid & detail views
- [x] Migration to modular SASS
- [x] Integrating tailwindcss
- [x] Case study / Blog templates to showcase project detail
- [x] Type-safety between server-side data loading & client-side components
- [ ] Server streamed Image content with React SSR
- [ ] Migration to Cloudflare KV instead of cookie for dark mode
- [ ] Dark mode driven by device with switch override

## Deployment

This app is deployed to Cloudflare Pages using the seamless integration with Github.

## Hire me

Head over to [jamespsterling.com](https://jamespsterling.com/) to see this Portfolio app in action, checkout some of the [projects](https://jamespsterling.com/projects) I've showcased.

If you think the technologies, [skills](https://jamespsterling.com/#skills), and engineering I have [experience](https://jamespsterling.com/#experience) with would compliment your engineering team please [drop me a line](https://jamespsterling.com/contact).

## Versions

Software is all about being iterative & improving over time. If you're curious how this project has evolved of the years checkout some of the original code.

Version 1 - https://github.com/jamespsterling/jamespsterling.github.io
