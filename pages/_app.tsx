import "normalize.css/normalize.css";
import { GlobalStyle } from "config";
import { MediaQueryProvider } from "helpers/hooks";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <MediaQueryProvider>
                <Component {...pageProps} />
            </MediaQueryProvider>
        </>
    );
}

export default MyApp;
