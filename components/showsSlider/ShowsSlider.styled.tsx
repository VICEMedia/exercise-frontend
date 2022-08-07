import styled from "styled-components";

export const SliderItem = styled.div`
    align-items: center;
    color: var(--color-black);
    cursor: grab;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin: auto;
    max-width: 290px;
    text-decoration: none;
`;

export const ShowTitle = styled.h1`
    text-transform: uppercase;
`;

export const ImageContainer = styled.div`
    display: block;
    width: 100%;
`;

export const EpisodesQuantity = styled.span`
    color: var(--color-grey);
    flex: 1 0 100%;
    font-family: var(--font-primary), sans-serif;
    font-size: var(--type-sub-text-font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--type-sub-text-line-height);
    text-transform: uppercase;
`;
