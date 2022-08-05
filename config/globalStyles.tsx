import { createGlobalStyle } from "styled-components";

import { media } from "constants/media";

export const GlobalStyle = createGlobalStyle`
    html {

        /* ===== Theme colors ====== */
        
        --color-white: #fff;
        --color-black: #000;
        --color-light-grey: #aaa;

        /* Transition duration variable */
        --quick-transition-duration: 150ms;
        --default-transition-duration: 250ms;
        --slow-transition-duration: 500ms;

        /* Typography */

        --font-primary: "Open Sans";

        --font-weight-normal: 400;
        --font-weight-bold: 700;

        --type-heading-1-font-size: 32px;
        --type-heading-1-line-height: 48px;
        --type-heading-2-font-size: 30px;
        --type-heading-2-line-height: 40px;
        --type-heading-3-font-size: 25px;
        --type-heading-3-line-height: 40px;
        --type-heading-4-font-size: 24px;
        --type-heading-4-line-height: 32px;
        --type-heading-5-font-size: 16px;
        --type-heading-5-line-height: 28px;
        --type-heading-6-font-size: 14px;
        --type-heading-6-line-height: 24px;

        --type-paragraph-font-size: 13px;
        --type-paragraph-line-height: 24px;

        --type-label-font-size: 14px;
        --type-label-line-height: 24px;

        --type-sub-text-font-size-sub-text: 12px;
        --type-sub-text-line-height: 24px;

        /* Smooth scroll behavior for scrolling to ID'ed elements on static pages */

        scroll-behavior: smooth;

        ${media.mdUp} {
            --type-heading-1-font-size: 55px;
            --type-heading-1-line-height: 64px;
            --type-heading-2-font-size: 45px;
            --type-heading-2-line-height: 64px;
            --type-heading-3-font-size: 40px;
            --type-heading-3-line-height: 56px;
            --type-heading-4-font-size: 35px;
            --type-heading-4-line-height: 48px;
            --type-heading-5-font-size: 20px;
            --type-heading-5-line-height: 32px;
            --type-heading-6-font-size: 15px;
            --type-heading-6-line-height: 32px;

            --type-paragraph-font-size: 15px;
            --type-paragraph-line-height: 32px;

            --type-sub-text-font-size-sub-text: 14px;
        }
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
