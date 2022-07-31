const customMediaQuery = (width: number, bound = "min") =>
    `@media (${bound}-width: ${width}px)`;

export const sizes = {
    lg: 992,
    md: 768,
    sm: 320,
    xl: 1270
};

export const media = {
    lgUp: customMediaQuery(sizes.lg),
    mdUp: customMediaQuery(sizes.md),
    smUp: customMediaQuery(sizes.sm),
    xlDown: customMediaQuery(sizes.xl, "max"),
    xlUp: customMediaQuery(sizes.xl)
};
