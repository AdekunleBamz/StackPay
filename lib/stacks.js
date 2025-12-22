import { StacksNetwork } from "@stacks/network";

// Read network type from environment variable
const networkEnv = process.env.NEXT_PUBLIC_NETWORK || "testnet";

// Create a StacksNetwork instance based on the environment
export const network = new StacksNetwork({
  coreApiUrl:
    networkEnv.toLowerCase() === "mainnet"
      ? "https://stacks-node-api.mainnet.stacks.co"
      : "https://stacks-node-api.testnet.stacks.co",
});