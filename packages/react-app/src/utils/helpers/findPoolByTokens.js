export const findPoolByTokens = (pools, fromToken, toToken) => {
    if (!Array.isArray(pools) || !fromToken || !toToken) return undefined;

    return pools.find((cur) =>
        (cur.token0Address === fromToken && cur.token1Address === toToken) ||
        (cur.token1Address === fromToken && cur.token0Address === toToken)
    );
};