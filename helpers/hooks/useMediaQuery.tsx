import React, { createContext, useContext, useMemo } from "react";
import useMedia from "use-media";

import { sizes } from "constants/media";

export interface MediaQueryProviderProps {
    /** Pass any React.Node to render inside this component */
    children?: React.ReactNode;
}

const mediaQueries = {
    desktop: `(min-width: ${sizes.lg}px)`,
    mobile: `(max-width: ${sizes.md - 1}px)`,
    tablet: `(min-width: ${sizes.md}px) and (max-width: ${sizes.lg - 1}px)`,
    tabletAndLarger: `(min-width: ${sizes.md}px)`,
    xlDesktop: `(min-width: ${sizes.xl}px)`
};

interface MediaQueryProps {
    isXlDesktopView: boolean;
    isMobileView: boolean;
    isDesktopView: boolean;
    isTabletView: boolean;
    isTabletViewOrLarger: boolean;
}

const MediaQueryContext = createContext({} as MediaQueryProps);

export function useMediaQueryContext(): MediaQueryProps {
    return useContext(MediaQueryContext);
}

export function MediaQueryProvider({
    children
}: MediaQueryProviderProps): JSX.Element {
    {
        const isMobileView = useMedia(mediaQueries.mobile);
        const isTabletView = useMedia(mediaQueries.tablet);
        const isTabletViewOrLarger = useMedia(mediaQueries.tabletAndLarger);
        const isDesktopView = useMedia(mediaQueries.desktop);
        const isXlDesktopView = useMedia(mediaQueries.xlDesktop);

        const value = useMemo(
            () => ({
                isDesktopView,
                isMobileView,
                isTabletView,
                isTabletViewOrLarger,
                isXlDesktopView
            }),
            [
                isMobileView,
                isDesktopView,
                isTabletView,
                isTabletViewOrLarger,
                isXlDesktopView
            ]
        );

        return (
            <MediaQueryContext.Provider value={value}>
                {children}
            </MediaQueryContext.Provider>
        );
    }
}
