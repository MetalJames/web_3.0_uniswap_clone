import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import { useCall } from "@usedapp/core";
import { parseUnits } from "ethers/lib/utils";

import { ROUTER_ADDRESS } from "../config";

export const useAmountsOut = (pairAddress, amountIn, fromToken, toToken) => {
    const isValidAmountIn = amountIn.gt(parseUnits("0"));
    const areParamsValid = !!(pairAddress && isValidAmountIn && fromToken && toToken);

    const { error, value } =
        useCall(
        areParamsValid && {
            contract: new Contract(ROUTER_ADDRESS, abis.router02),
            method: "getAmountsOut",
            args: [amountIn, [fromToken, toToken]],
        }
        ) || {};
    // return error ? parseUnits("0") : value?.amounts[1];
    return error ? parseUnits("0") : value;
}