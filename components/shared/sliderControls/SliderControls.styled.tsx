import styled, { css } from "styled-components";

import { media } from "constants/media";

export const StyledSliderControls = styled.div`
    align-items: center;
    border-top: 1px solid var(--color-light-grey);
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    margin-top: 212px;
    overflow: hidden;
    padding: 66px 0;

    ${media.mdUp} {
        border-bottom: 1px solid var(--color-light-grey);
        border-top: 0;
        margin: 0 0 182px;
        padding: 34px 0;
    }
`;

export const Dots = styled.ul`
    align-items: center;
    display: flex;
    gap: 98px;
    height: 100%;
    list-style: none;
    overflow-y: auto;
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
    line-height: var(--type-sub-text-line-height);
`;
