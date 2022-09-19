import { HardhatUserConfig } from "hardhat/types";

import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-truffle5";
import "@tenderly/hardhat-tenderly";
import "hardhat-deploy";
import "ts-node/register";
import "tsconfig-paths/register";
import "hardhat-typechain";
import "hardhat-docgen";
import "hardhat-contract-sizer";

import "scripts/tasks/transferOwnership";
import "scripts/tasks/transferAdmin";

const config: HardhatUserConfig = {
    networks: {
        development: {
            url: "http://127.0.0.1:7545",
            saveDeployments: false
        },
        hardhat: {
            live: false,
            blockGasLimit: 6800000
        },
        rskDev: {
            from: "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
            url: 'http://localhost:4444',
            chainId: 33,
            gasPrice: 2,
            timeout: 1e9,
            gas: 6800000
        },
        fork: {
            url: "http://127.0.0.1:7545",
            gas: 8000000
        },
        coverage: {
            url: "http://127.0.0.1:7546",
            gas: 0xfffffffffff, // <-- Use this high gas value
            gasPrice: 0x01      // <-- Use this low gas price
        },
        ropsten: {
            accounts: {
                mnemonic: "seek danger physical menu pen arrest clutch blade weird detect digital frog",
                initialIndex: 0,
                count: 3
            },
            url: `https://ropsten.infura.io/v3/42af85fbc97845a0974cbbf003834c28`,
            chainId: 3,
            gasPrice: 1000000000, // 100 GWei,
            gas: 70000000,
            timeout: 160000
        },
        rinkeby: {
            accounts: {
                mnemonic: "seek danger physical menu pen arrest clutch blade weird detect digital frog",
                initialIndex: 0,
                count: 3
            },
            url: "https://rinkeby.infura.io/v3/4326f844557341a89a24bdcfc571fc10",
            chainId: 4,
            gasPrice: 1000000000, // 100 GWei,
            gas: 2000000,
            timeout: 160000
        },
        kovan: {
            accounts: {
                mnemonic: "seek danger physical menu pen arrest clutch blade weird detect digital frog",
                initialIndex: 0,
                count: 42
            },
            url: "wss://kovan.infura.io/ws/v3/42af85fbc97845a0974cbbf003834c28",
            chainId: 42,
            gasPrice: 20000000000, // 20 GWei,
            gas: 2000000
        },
        rskTestnet: {
            accounts: {
                mnemonic: "chimney toss kit now firm true scan laundry hazard buffalo tiny west",
                initialIndex: 0,
                count: 31
            },
            url: 'https://testnet.sovryn.app/rpc',
            chainId: 31,
            gasPrice: 71680400, // 71GWei,
            timeout: 1e9
        },
        rsk: {
            accounts: {
                mnemonic: "chimney toss kit now firm true scan laundry hazard buffalo tiny west",
                initialIndex: 0,
                count: 30
            },
            url: 'wss://mainnet.sovryn.app/ws',
            chainId: 30,
            gasPrice: 71680400, // 71GWei,
            timeout: 1e9
        }
    },
    solidity: {
        version: "0.5.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        artifacts: "./build/contracts",
        deploy: "./migrations",
        deployments: "./deployments",
        sources: './contracts'
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 30,
    },
    mocha: {
        timeout: 240000, // 4 min timeout
    },
    typechain: {
        outDir: "types/generated",
        target: "truffle-v5",
    },
    tenderly: {
        username: "mStable",
        project: "mStable-contracts",
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
    },
    docgen: {
        path: './docs',
        clear: true,
        runOnCompile: true,
    }
};

export default config;
