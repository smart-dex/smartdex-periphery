require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const URL = process.env.FULLNODE;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: 'localhost',
  solidity: {
    version: '0.6.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      accounts: [privateKey]
    },
    mainnet: {
      url: ``,
      accounts: [],
    },
    bsc_testnet: {
      url: URL,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: BSCSCAN_KEY
  }
};