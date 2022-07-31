/* eslint-disable react/no-danger */
import { css } from "styled-components";
import NextHead from "next/head";

export function BaseHead(): JSX.Element {
    const googleSiteVerificationToken = "##";
    const themeColor = "#FFFFFF";
    const applicationName = "Location/Weather/Pokemon";

    return (
        <NextHead>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
            />
            <meta
                name="google-site-verification"
                content={googleSiteVerificationToken}
            />
            <link
                rel="dns-prefetch preconnect"
                as="script"
                href="https://www.googletagmanager.com/"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Boston-Regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Outfit-Regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Outfit-Medium.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/Outfit-Bold.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
            <link
                rel="icon"
                type="image/png"
                sizes="196x196"
                href="/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="160x160"
                href="/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="64x64"
                href="/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-192.png"
            />
            <link rel="apple-touch-icon" href="/favicon-57.png" />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/favicon-192.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon-192.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
            />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="format-detection" content="telephone=no" />

            <meta name="msapplication-TileImage" content="/favicon-192.png" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content={themeColor} />
            <meta name="application-name" content={applicationName} />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta name="apple-mobile-web-app-title" content={applicationName} />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="msapplication-TileColor" content={themeColor} />

            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="twitter:card" content="summary_large_image" />
            <style
                /* prettier-ignore */
                dangerouslySetInnerHTML={{__html: css`
                        @font-face {
                            font-display: swap;
                            font-family: "Boston";
                            font-style: normal;
                            font-weight: normal;
                            src: local("Boston-Regular"), url("/fonts/Boston-Regular.woff2") format("woff2");
                        }
                        @font-face {
                            font-display: swap;
                            font-family: "Outfit";
                            font-style: normal;
                            font-weight: 400;
                            src: local("Outfit-Regular"), url("/fonts/Outfit-Regular.woff2") format("woff2");
                        }
                        @font-face {
                            font-display: swap;
                            font-family: "Outfit";
                            font-style: normal;
                            font-weight: 500;
                            src: local("Outfit-Medium"), url("/fonts/Outfit-Medium.woff2") format("woff2");
                        }
                        @font-face {
                            font-display: swap;
                            font-family: "Outfit";
                            font-style: normal;
                            font-weight: 600;
                            src: local("Outfit-Bold"), url("/fonts/Outfit-Bold.woff2") format("woff2");
                        }
                        /* css function of styled-components returns a FlattenSimpleInterpolation type,
                        which does not completely overlap with the type string expected by dangerouslySetInnerHTML */
                    ` as unknown as string
                }}
            />
        </NextHead>
    );
}
