require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */

const { GOERLI_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 5,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};
