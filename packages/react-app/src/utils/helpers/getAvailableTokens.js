export const getAvailableTokens = (pools) =>
    pools.reduce((prev, curr) => {
        prev[curr.token0Address] = curr.token0Name;
        prev[curr.token1Address] = curr.token1Name;
        return prev;
    }, {});