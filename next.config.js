/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlugins, optional } = require("next-compose-plugins");
const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
    compiler: {
        styledComponents: true
    },
    async headers() {
        return [
            {
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=15778476, stale-while-revalidate"
                    }
                ],
                source: "/(.*).(svg|jpg|jpeg|png|webp)"
            },
            {
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31556952, stale-while-revalidate"
                    }
                ],
                source: "/fonts/.woff2"
            }
        ];
    },
    images: {
        deviceSizes: [320, 375, 768, 1024, 1296, 1440, 1920],
        domains: [],
        minimumCacheTTL: 60
    },
    productionBrowserSourceMaps: true,
    pwa: {
        buildExcludes: [
            /\/chunks\/pages\/productfeed\.xml.*/,
            /\/chunks\/.*\.js\.map/
        ],
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        publicExcludes: ["!sitemap.xml", "!robots.txt"]
    },
    reactStrictMode: true,
    webpack: (config, options) => {
        // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
        // @sentry/node will run in a Node.js environment. @sentry/node will use
        // Node.js-only APIs to catch even more unhandled exceptions.
        //
        // This works well when Next.js is SSRing your page on a server with
        // Node.js, but it is not what we want when your client-side bundle is being
        // executed by a browser.
        //
        // Luckily, Next.js will call this webpack function twice, once for the
        // server and once for the client. Read more:
        // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
        //
        // So ask Webpack to replace @sentry/node imports with @sentry/browser when
        // building the browser's bundle
        if (!options.isServer) {
            config.resolve.alias["@sentry/node"] = "@sentry/browser";
        }

        config.module.rules.push({
            exclude: /node_modules/,
            loader: "graphql-tag/loader",
            test: /\.(graphql|gql)$/
        });
        return config;
    }
};

module.exports = withPlugins(
    [
        [
            optional(() =>
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require("@next/bundle-analyzer")({
                    enabled: process.env.ANALYZE === "true"
                })
            ),
            [PHASE_PRODUCTION_BUILD]
        ],
        [withPWA]
    ],
    nextConfig
);
