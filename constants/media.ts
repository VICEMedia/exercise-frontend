const customMediaQuery = (width: number, bound = "min") =>
    `@media (${bound}-width: ${width}px)`;

export const sizes = {
    md: 980
};

export const media = {
    mdUp: customMediaQuery(sizes.md)
};
