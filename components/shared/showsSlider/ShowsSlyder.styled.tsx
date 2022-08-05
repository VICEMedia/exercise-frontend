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

export const ShowTitle = styled.h2`
    font-size: 22px;
    text-transform: uppercase;
`;

export const ImageContainer = styled.div`
    display: block;
    width: 100%;
`;

export const EpisodesQuantity = styled.span`
    color: var(--color-light-grey);
    flex: 1 0 100%;
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
`;
