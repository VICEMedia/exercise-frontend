import React, { createContext, useContext, useMemo } from "react";
import useMedia from "use-media";

import { sizes } from "constants/media";

export interface MediaQueryProviderProps {
    /** Pass any React.Node to render inside this component */
    children?: React.ReactNode;
}

const mediaQueries = {
    tablet: `(min-width: ${sizes.md}px)`
};

interface MediaQueryProps {
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
        const isTabletViewOrLarger = useMedia(mediaQueries.tablet);

        const value = useMemo(
            () => ({
                isTabletViewOrLarger
            }),
            [isTabletViewOrLarger]
        );

        return (
            <MediaQueryContext.Provider value={value}>
                {children}
            </MediaQueryContext.Provider>
        );
    }
}
