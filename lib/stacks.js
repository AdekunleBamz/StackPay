import { StacksNetwork } from "@stacks/network";

// Determine network from environment
const networkEnv = process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() || "testnet";

export const network = new StacksNetwork({
  coreApiUrl:
    networkEnv === "mainnet"
      ? "https://stacks-node-api.mainnet.stacks.co"
      : "https://stacks-node-api.testnet.stacks.co",
});