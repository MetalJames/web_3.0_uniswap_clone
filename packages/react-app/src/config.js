import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf0038576DeCaB0F1d85Edda6b0F0581fbbc24A32"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/-NwF1Ymt60a7kjdolWWZna-HF261LX2U",
  },
};