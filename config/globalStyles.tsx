import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {

        /* ===== Theme colors ====== */
        
        --color-black: #000;
        --color-grey: #aaa;
        --color-light-grey: #e5e5e5;
        --color-white: #fff;

        /* Transition duration variable */
        --quick-transition-duration: 150ms;
        --default-transition-duration: 250ms;
        --slow-transition-duration: 500ms;

        /* Typography */

        --font-primary: "Open Sans";

        --font-weight-normal: 400;
        --font-weight-bold: 700;

        --type-heading-1-font-size: 22px;
        --type-heading-1-line-height: 22px;

        --type-label-font-size: 28px;
        --type-label-line-height: 64px;

        --type-sub-text-font-size: 12px;
        --type-sub-text-line-height: 14px;

        /* Smooth scroll behavior for scrolling to ID'ed elements on static pages */

        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
    }

    /* Headers */

    h1 {
        font-size: var(--type-heading-1-font-size);
        line-height: var(--type-heading-1-line-height);
    }

    h2 {
        font-size: var(--type-heading-2-font-size);
        line-height: var(--type-heading-2-line-height);
    }

    h3 {
        font-size: var(--type-heading-3-font-size);
        line-height: var(--type-heading-3-line-height);
    }

    h4 {
        font-size: var(--type-heading-4-font-size);
        line-height: var(--type-heading-4-line-height);
    }

    h5 {
        font-size: var(--type-heading-5-font-size);
        line-height: var(--type-heading-5-line-height);
    }

    h6 {
        font-size: var(--type-heading-6-font-size);
        line-height: var(--type-heading-6-line-height);
    }

    p {
        font-size: var(--type-paragraph-font-size);
        line-height: var(--type-paragraph-line-height);
    }


    /* General components */

    label {
        font-size: var(--type-label-font-size);
        line-height: var(--type-label-line-height);
    }

    /*  General styling */

    html,
    body,
    button,
    input,
    select,
    textarea {
        font-family: var(--font-primary), sans-serif;
    }

    input,
    textarea {
        font-size: var(--type-paragraph-font-size);
    }

    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol {
        margin: 0;
        padding: 0;
    }
`;
