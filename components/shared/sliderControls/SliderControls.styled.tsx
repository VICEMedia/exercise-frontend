import styled, { css } from "styled-components";

import { media } from "constants/media";

export const StyledSliderControls = styled.div`
    align-items: center;
    box-shadow: -10px -10px 5px -10px var(--color-light-grey);
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    margin: 182px auto 0;
    max-width: 1550px;
    overflow: hidden;
    padding: 66px 0;
    width: 100%;

    ${media.mdUp} {
        box-shadow: -10px 10px 5px -10px var(--color-light-grey);
        margin: 0 0 182px 30%;
        padding: 34px 0;
        width: auto;
    }
`;

export const Dots = styled.ul`
    align-items: center;
    cursor: grab;
    display: flex;
    gap: 98px;
    height: 100%;
    list-style: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 24px;
    scrollbar-color: transparent transparent; // hides the scrollbar in firefox

    /* hides the scrollbar in chrome and safari */
    ::-webkit-scrollbar {
        opacity: 0;
    }
`;

export const DotWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 100%;
`;

export const Dot = styled.li<{ isSelected: boolean }>`
    background-color: var(--color-light-grey);
    cursor: pointer;
    height: 68px;
    width: 68px;

    /*stylelint-disable-next-line */
    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: var(--color-black);
        `};
`;

export const SlideNumber = styled.span`
    font-size: 28px;
    font-size: var(--type-label-font-size);
    line-height: var(--type-label-line-height);
`;
