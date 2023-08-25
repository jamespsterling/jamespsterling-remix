import { linkStyles } from '~/styles/constants';

export default function Portfolio() {
  // https://tailwind-elements.com/docs/standard/designblocks/content
  return (
    <article className="max-w-1xl px-6 py-6 mx-auto space-y-16 dark:text-gray-50">
      <div className="md:container my-2 mx-auto md:px-6">
        <section className="mb-8 md:mb-32">
          <div className="mx-auto text-left lg:text-left xl:px-32 text-neutral-700">
            <h1 className="mb-4 text-4xl font-bold">Case Study</h1>

            <p className="mb-6">
              Version 1 of my portfolio site was built on traditional{' '}
              <a
                href="https://github.com/jamespsterling/jamespsterling.github.io/blob/master/index.html"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                HTML, JavaScript, & CSS
              </a>{' '}
              with{' '}
              <a
                href="https://github.com/jamespsterling/jamespsterling.github.io/blob/master/gulpfile.js"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                Grunt
              </a>{' '}
              building SASS and minifying JS & CSS. While the norm for a long time in the 2010s,
              this felt dated and was difficult to maintain and update from a content perspective.
              It is also not optimized to use the latest and greatest of hosting platforms such as
              Cloudflare and the Edge Network.
            </p>

            <h1 className="mb-4 text-3xl font-bold">Refactor</h1>

            <p className="mb-6">
              Wanting to use my recent admiration for React frameworks and recalling a colleague
              suggest{' '}
              <a href="https://remix.run/" rel="noreferrer" target="_blank" className={linkStyles}>
                Remix
              </a>
              , I took to diving head deep into seeing what performance optimizations it might
              afford over a vanilla React or Next.js content site.
            </p>

            <p className="mb-6">
              Getting up and running with Cloudflare Pages takes just a couple minutes–cloudflare
              publishes some{' '}
              <a
                href="ttps://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                excellent documentation{' '}
              </a>{' '}
              on setting up a new Remix app ready for Cloudflare Pages.
            </p>

            <h1 className="mb-4 text-3xl font-bold">Setup</h1>

            <p className="mb-6">
              Since version 1 was built on mostly HTML & CSS, migrating the bulk of the content was
              simple using Remix. After creating a new repo and linking that repo to Cloudflare via
              Github, CI/CD is basically setup thereafter and by default will auto-deploy anything
              pushed to <span className="font-mono text-orange-700 dark:text-orange-500">main</span>
              .
            </p>

            <h1 className="mb-4 text-3xl font-bold">Optimization</h1>

            <h1 className="mb-4 text-2xl font-bold">Styles</h1>

            <p className="mb-6">
              Since most of my styles were written in a single SASS file, I wanted to leverage
              better organization by modularizing my SASS. Doing this helps tremendously with the
              cognitive load of find and updating styles that apply to only a single component or
              page of my app.
            </p>

            <h1 className="mb-4 text-2xl font-bold">Assets</h1>

            <p className="mb-6">
              Asset loading has long been something you might link out to as a 3rd-party CDN host
              which comes with security concerns and risk for downtime. Asset loading fonts & icons
              can be greatly improved by self-hosting said assets. By moving assets like fonts local
              to your application, not only can this help reduce external requests during or after
              rendering, it can aid in eliminating{' '}
              <a
                href="https://www.afasterweb.com/2015/08/29/what-the-jank/"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                "screen jank"
              </a>
              .
            </p>

            <p className="mb-6">
              Traditionally, Google Fonts support using the CSS descriptor{' '}
              <span className="font-mono text-orange-700 dark:text-orange-500">
                {`{ font-display: swap }`}
              </span>{' '}
              can help with render-blocking font loading, however the swap process still means there
              is a noticeable render "pop" after font assets are loaded for the first time.
            </p>

            <p>
              Fontsource is paving the way for{' '}
              <a
                href="https://fontsource.org/docs/getting-started/introduction#1-performance"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                optimization with self-hosting fonts
              </a>
              .
            </p>

            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-zinc-500 dark:bg-zinc-800">
              <p className="italic font-medium leading-relaxed text-gray-900 dark:text-white">
                "Self-hosting fonts can significantly improve website performance by eliminating the
                extra latency caused by additional DNS resolution and TCP connection establishment
                that is required when using a CDN like Google Fonts. This can help to prevent
                doubled visual load times for simple websites, as benchmarked here and here."
              </p>
            </blockquote>

            <h1 className="mb-4 text-2xl font-bold">Bundling</h1>

            <p className="mb-6">
              Many front-end engineers understanding the importance of reducing the number and size
              of final compiled bundles in a modern web app. Webpack is often the goto bundler
              shipped with most modern front-end frameworks. Ensuring we leverage aspects such as
              "tree-shaking", minification, or lazy-loading are critical to ensuring your bundle(s)
              are <span className="font-mono text-blue-700 dark:text-blue-500">kilobytes</span>{' '}
              instead of{' '}
              <span className="font-mono text-blue-700 dark:text-blue-500">megabytes</span> when our
              app is deployed in production.
            </p>

            <h1 className="mb-4 text-1xl font-bold">Webpack compilation</h1>

            <p className="mb-6">
              Using{' '}
              <a
                href="https://esbuild.github.io/analyze/"
                rel="noreferrer"
                target="_blank"
                className={linkStyles}
              >
                esbuild Bundle Size Analyzer
              </a>{' '}
              we can see where the largest modules might be impacting the overall bundle size. One
              notable issue is importing all of{' '}
              <span className="font-mono text-orange-700 dark:text-orange-500">
                @fortawesome/fontawesome-svg-core
              </span>{' '}
              instead of manually importing only our used icons.
            </p>

            <img
              src="/img/projects/portfolio/optimization-before.png"
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />
            <p className="mb-6">
              Optimizing we can save upwards of{' '}
              <span className="font-mono text-orange-700 dark:text-orange-500">~845 kb</span>.
            </p>

            <img
              src="/img/projects/portfolio/optimization-after.png"
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />

            <h1 className="mb-4 text-2xl font-bold">Wrapping up</h1>

            <p className="mb-6">
              Testing with lighthouse shows eliminating render-blocking requests, improved bundling,
              and reducing the number of network requests has a very real impact on scoring, which
              has a user perceived impact on performance as well as weighing heavily on how search
              engines rank your site.
            </p>

            <img
              src="/img/projects/portfolio/optimization.png"
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />

            <h1 className="mb-4 text-3xl font-bold">Closing</h1>
            <p>
              Overall the initial migration to Remix, self-hosted assets, and the Cloudflare Pages
              platform makes maintaining my portfolio a positive practice and treating the project
              as I would any other web application means I can continue to iterate with the latest
              technology & optimizations while learning new skills and techniques.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
