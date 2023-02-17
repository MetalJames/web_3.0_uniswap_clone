export const getCounterpartTokens = (pools, fromToken) => pools
    .filter((cur) => cur.token0Address === fromToken || cur.token1Address)
    .reduce((prev, curr) => {
        if (curr.token0Address === fromToken) {
            prev[curr.token1Address] = curr.token1Name;
        } else if (curr.token1Address === fromToken) {
            prev[curr.token0Address] = curr.token0Name;
        }
        return prev;
    }, {});