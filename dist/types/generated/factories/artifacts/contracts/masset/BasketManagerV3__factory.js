"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketManagerV3__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
        ],
        name: "BassetAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
        ],
        name: "BassetRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "bridge",
                type: "address",
            },
        ],
        name: "BridgeChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "factor",
                type: "int256",
            },
        ],
        name: "FactorChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
        ],
        name: "PausedChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "basset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "min",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "max",
                type: "uint256",
            },
        ],
        name: "RangeChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "int256",
                name: "_factor",
                type: "int256",
            },
            {
                internalType: "address",
                name: "_bridge",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_min",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_max",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_paused",
                type: "bool",
            },
        ],
        name: "addBasset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_bassets",
                type: "address[]",
            },
            {
                internalType: "int256[]",
                name: "_factors",
                type: "int256[]",
            },
            {
                internalType: "address[]",
                name: "_bridges",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_mins",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "_maxs",
                type: "uint256[]",
            },
            {
                internalType: "bool[]",
                name: "_pausedFlags",
                type: "bool[]",
            },
        ],
        name: "addBassets",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_bassetQuantity",
                type: "uint256",
            },
        ],
        name: "checkBasketBalanceForDeposit",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_bassetQuantity",
                type: "uint256",
            },
        ],
        name: "checkBasketBalanceForWithdrawal",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_bassetQuantity",
                type: "uint256",
            },
        ],
        name: "convertBassetToMassetQuantity",
        outputs: [
            {
                internalType: "uint256",
                name: "massetQuantity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bassetQuantity",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_massetQuantity",
                type: "uint256",
            },
        ],
        name: "convertMassetToBassetQuantity",
        outputs: [
            {
                internalType: "uint256",
                name: "bassetQuantity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "massetQuantity",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "getBassetBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBassets",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "getBridge",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "getFactor",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "getPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getProxyImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "getRange",
        outputs: [
            {
                internalType: "uint256",
                name: "min",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "max",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTotalMassetBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "total",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getVersion",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_massetManager",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "x",
                type: "int256",
            },
        ],
        name: "isPowerOfTen",
        outputs: [
            {
                internalType: "bool",
                name: "result",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "isValidBasset",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
        ],
        name: "removeBasset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_bridge",
                type: "address",
            },
        ],
        name: "setBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "int256",
                name: "_factor",
                type: "int256",
            },
        ],
        name: "setFactor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_flag",
                type: "bool",
            },
        ],
        name: "setPaused",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_basset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_min",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_max",
                type: "uint256",
            },
        ],
        name: "setRange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611e0c806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639bf761b7116100de578063c7bbc86511610097578063f24947dc11610071578063f24947dc14610380578063f2fde38b14610393578063f44c7c8f146103a6578063f5bffc35146103b957600080fd5b8063c7bbc8651461033a578063d80f5a871461034d578063eb72ccd51461037857600080fd5b80639bf761b7146102c85780639d22ae8c146102db578063a3781495146102ee578063a9f02efe14610301578063b55d990414610314578063c4d66de81461032757600080fd5b8063620611c31161014b578063715018a611610125578063715018a61461028057806389eba0d2146102885780638da5cb5b1461029b57806390e4b720146102c057600080fd5b8063620611c314610229578063623a564b1461024c578063689418691461025f57600080fd5b806309f2a983146101935780630d8e6e2c146101a85780631af327bd146101c65780631d3ce398146101ee5780635521c653146102035780635ac9946114610216575b600080fd5b6101a66101a1366004611701565b6103cc565b005b6101b06105a3565b6040516101bd919061171c565b60405180910390f35b6101d96101d436600461176a565b610635565b604080519283526020830191909152016101bd565b6101f66106a3565b6040516101bd9190611794565b6101d9610211366004611701565b610704565b6101d961022436600461176a565b61073c565b61023c6102373660046117e1565b6107b3565b60405190151581526020016101bd565b6101a661025a3660046117fa565b610804565b61027261026d366004611701565b610949565b6040519081526020016101bd565b6101a6610977565b6101a661029636600461183d565b61098b565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016101bd565b6102a86109f9565b6101a66102d636600461176a565b610a31565b6101a66102e9366004611870565b610b32565b6101a66102fc366004611a34565b610ba8565b61023c61030f36600461176a565b610cef565b61023c610322366004611701565b610dff565b6101a6610335366004611701565b610e2b565b61023c61034836600461176a565b610fcb565b61023c61035b366004611701565b6001600160a01b03166000908152609a6020526040902054151590565b61027261113c565b6101a661038e366004611b29565b611211565b6101a66103a1366004611701565b6113bf565b6102a86103b4366004611701565b611438565b6102726103c7366004611701565b611464565b806103d6816114da565b6103de611532565b6103e782611464565b1561042c5760405162461bcd60e51b815260206004820152601060248201526f62616c616e6365206e6f74207a65726f60801b60448201526064015b60405180910390fd5b6001600160a01b0382166000908152609a60205260408120819055805b60995461045890600190611b9e565b8110156104b057836001600160a01b03166099828154811061047c5761047c611bb1565b6000918252602090912001546001600160a01b03160361049e578091506104b0565b806104a881611bc7565b915050610449565b50609980546104c190600190611b9e565b815481106104d1576104d1611bb1565b600091825260209091200154609980546001600160a01b0390921691839081106104fd576104fd611bb1565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550609980548061053c5761053c611be0565b6000828152602090819020600019908301810180546001600160a01b03191690559091019091556040516001600160a01b03851681527f1e5281bbecf5c15104f9e35265dbe738c1cd2597613cbf4a0a51713448bc13b991015b60405180910390a1505050565b6060609780546105b290611bf6565b80601f01602080910402602001604051908101604052809291908181526020018280546105de90611bf6565b801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b5050505050905090565b60008083610642816114da565b6001600160a01b0385166000908152609a6020526040812054908113156106815761066d858261158c565b9350610679848261159f565b92505061069b565b61069461068d82611c2a565b869061159f565b9350849250505b509250929050565b6060609980548060200260200160405190810160405280929190818152602001828054801561062b57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106dd575050505050905090565b60008082610711816114da565b5050506001600160a01b03166000908152609c6020908152604080832054609d909252909120549091565b60008083610749816114da565b6001600160a01b0385166000908152609a60205260408120549081131561078057610774858261159f565b935084925061069b9050565b61079361078c82611c2a565b869061158c565b93506107a86107a182611c2a565b859061159f565b925050509250929050565b60008060008312156107cf576107c883611c2a565b90506107d2565b50815b600a81101580156107eb57506107e9600a82611c5c565b155b156107fb576107c8600a82611c70565b60011492915050565b8261080e816114da565b610816611532565b6103e883111561085a5760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206d696e696d756d60881b6044820152606401610423565b6103e882111561089e5760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206d6178696d756d60881b6044820152606401610423565b828210156108de5760405162461bcd60e51b815260206004820152600d60248201526c696e76616c69642072616e676560981b6044820152606401610423565b6001600160a01b0384166000818152609c60209081526040808320879055609d8252918290208590558151928352820185905281018390527fe3b935f735d8a72a31934e03fd96d995c5b3096c7362bc7e8796ab9e1ffe668c9060600160405180910390a150505050565b600081610955816114da565b6001600160a01b0383166000908152609a602052604090205491505b50919050565b61097f611532565b61098960006115ab565b565b81610995816114da565b61099d611532565b6001600160a01b0383166000818152609e6020908152604091829020805460ff19168615159081179091558251938452908301527f6567e54649bc4d1136cad0f12cfc472ef5c8255ad12c3e46ecf4ef245f06c6cc9101610596565b6000610a2c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b610a39611532565b80600003610a7a5760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b2103330b1ba37b960911b6044820152606401610423565b8060011480610a8d5750610a8d816107b3565b610ad95760405162461bcd60e51b815260206004820152601a60248201527f666163746f72206d75737420626520706f776572206f662031300000000000006044820152606401610423565b6001600160a01b0382166000818152609a6020908152604091829020849055815192835282018390527fbd9d78e6bf6327f299e2cc40ef087c54546ef9ac6bea857cdc90b57270bbb58991015b60405180910390a15050565b81610b3c816114da565b610b44611532565b6001600160a01b038381166000818152609b602090815260409182902080546001600160a01b031916948716948517905581519283528201929092527fd565484d693f5157abcceb853139678038bc740991b0a4dc3baa2426325bb3c09101610596565b610bb0611532565b8551855181148015610bc25750808551145b8015610bce5750808451145b8015610bda5750808351145b8015610be65750808251145b610c245760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206c656e6774687360881b6044820152606401610423565b60005b81811015610ce557610cd3888281518110610c4457610c44611bb1565b6020026020010151888381518110610c5e57610c5e611bb1565b6020026020010151888481518110610c7857610c78611bb1565b6020026020010151888581518110610c9257610c92611bb1565b6020026020010151888681518110610cac57610cac611bb1565b6020026020010151888781518110610cc657610cc6611bb1565b6020026020010151611211565b80610cdd81611bc7565b915050610c27565b5050505050505050565b600082610cfb816114da565b83610d05816115fd565b6000610d118686610635565b506098546040516370a0823160e01b81526001600160a01b039182166004820152919250600091908816906370a0823190602401602060405180830381865afa158015610d62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d869190611c84565b90506000610d948883610635565b5090506000610da38285611659565b90506000610db985610db361113c565b90611659565b90506000610dd382610dcd856103e861159f565b9061158c565b6001600160a01b038c166000908152609d6020526040902054101598505050505050505b505092915050565b600081610e0b816114da565b50506001600160a01b03166000908152609e602052604090205460ff1690565b600054610100900460ff1615808015610e4b5750600054600160ff909116105b80610e655750303b158015610e65575060005460ff166001145b610ec85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610423565b6000805460ff191660011790558015610eeb576000805461ff0019166101001790555b6098546001600160a01b031615610f3a5760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606401610423565b609880546001600160a01b0319166001600160a01b0384161790556040805180820190915260038152620332e360ec1b6020820152609790610f7c9082611cec565b50610f85611665565b8015610fc7576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610b26565b5050565b600082610fd7816114da565b83610fe1816115fd565b6000610fed8686610635565b506098546040516370a0823160e01b81526001600160a01b039182166004820152919250600091908816906370a0823190602401602060405180830381865afa15801561103e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110629190611c84565b905060006110708883610635565b509050828110156110c35760405162461bcd60e51b815260206004820181905260248201527f6261737365742062616c616e6365206973206e6f742073756666696369656e746044820152606401610423565b60006110cf82856116d9565b905060006110e5856110df61113c565b906116d9565b6001600160a01b038b166000908152609c602052604081205491925082900361111657159750610df7945050505050565b600061112883610dcd866103e861159f565b91909110159b9a5050505050505050505050565b6000805b60995481101561120d5760006099828154811061115f5761115f611bb1565b60009182526020822001546098546040516370a0823160e01b81526001600160a01b0391821660048201529116925082906370a0823190602401602060405180830381865afa1580156111b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111da9190611c84565b905060006111e88383610635565b5090506111f58186611dac565b9450505050808061120590611bc7565b915050611140565b5090565b611219611532565b6001600160a01b0386166112685760405162461bcd60e51b8152602060048201526016602482015275696e76616c696420626173736574206164647265737360501b6044820152606401610423565b6001600160a01b0386166000908152609a6020526040902054156112c65760405162461bcd60e51b815260206004820152601560248201527462617373657420616c72656164792065786973747360581b6044820152606401610423565b846000036113075760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b2103330b1ba37b960911b6044820152606401610423565b609980546001810182556000919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000180546001600160a01b0319166001600160a01b03881617905561135c8686610a31565b611367868484610804565b6113718685610b32565b61137b868261098b565b6040516001600160a01b03871681527fa83f9302fa4684335dd26b1bdd925929618565fa0f22bd9e91ab01753d8bf13c9060200160405180910390a1505050505050565b6113c7611532565b6001600160a01b03811661142c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610423565b611435816115ab565b50565b600081611444816114da565b50506001600160a01b039081166000908152609b60205260409020541690565b6098546040516370a0823160e01b81526001600160a01b0391821660048201526000918316906370a0823190602401602060405180830381865afa1580156114b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d49190611c84565b92915050565b6001600160a01b0381166000908152609a602052604081205490036114355760405162461bcd60e51b815260206004820152600e60248201526d1a5b9d985b1a590818985cdcd95d60921b6044820152606401610423565b6033546001600160a01b031633146109895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610423565b60006115988284611c70565b9392505050565b60006115988284611dbf565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381166000908152609e602052604090205460ff16156114355760405162461bcd60e51b815260206004820152601060248201526f18985cdcd95d081a5cc81c185d5cd95960821b6044820152606401610423565b60006115988284611dac565b600054610100900460ff166116d05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610423565b610989336115ab565b60006115988284611b9e565b80356001600160a01b03811681146116fc57600080fd5b919050565b60006020828403121561171357600080fd5b611598826116e5565b600060208083528351808285015260005b818110156117495785810183015185820160400152820161172d565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561177d57600080fd5b611786836116e5565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156117d55783516001600160a01b0316835292840192918401916001016117b0565b50909695505050505050565b6000602082840312156117f357600080fd5b5035919050565b60008060006060848603121561180f57600080fd5b611818846116e5565b95602085013595506040909401359392505050565b803580151581146116fc57600080fd5b6000806040838503121561185057600080fd5b611859836116e5565b91506118676020840161182d565b90509250929050565b6000806040838503121561188357600080fd5b61188c836116e5565b9150611867602084016116e5565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118d9576118d961189a565b604052919050565b600067ffffffffffffffff8211156118fb576118fb61189a565b5060051b60200190565b600082601f83011261191657600080fd5b8135602061192b611926836118e1565b6118b0565b82815260059290921b8401810191818101908684111561194a57600080fd5b8286015b8481101561196c5761195f816116e5565b835291830191830161194e565b509695505050505050565b600082601f83011261198857600080fd5b81356020611998611926836118e1565b82815260059290921b840181019181810190868411156119b757600080fd5b8286015b8481101561196c57803583529183019183016119bb565b600082601f8301126119e357600080fd5b813560206119f3611926836118e1565b82815260059290921b84018101918181019086841115611a1257600080fd5b8286015b8481101561196c57611a278161182d565b8352918301918301611a16565b60008060008060008060c08789031215611a4d57600080fd5b863567ffffffffffffffff80821115611a6557600080fd5b611a718a838b01611905565b97506020890135915080821115611a8757600080fd5b611a938a838b01611977565b96506040890135915080821115611aa957600080fd5b611ab58a838b01611905565b95506060890135915080821115611acb57600080fd5b611ad78a838b01611977565b94506080890135915080821115611aed57600080fd5b611af98a838b01611977565b935060a0890135915080821115611b0f57600080fd5b50611b1c89828a016119d2565b9150509295509295509295565b60008060008060008060c08789031215611b4257600080fd5b611b4b876116e5565b955060208701359450611b60604088016116e5565b93506060870135925060808701359150611b7c60a0880161182d565b90509295509295509295565b634e487b7160e01b600052601160045260246000fd5b818103818111156114d4576114d4611b88565b634e487b7160e01b600052603260045260246000fd5b600060018201611bd957611bd9611b88565b5060010190565b634e487b7160e01b600052603160045260246000fd5b600181811c90821680611c0a57607f821691505b60208210810361097157634e487b7160e01b600052602260045260246000fd5b6000600160ff1b8201611c3f57611c3f611b88565b5060000390565b634e487b7160e01b600052601260045260246000fd5b600082611c6b57611c6b611c46565b500690565b600082611c7f57611c7f611c46565b500490565b600060208284031215611c9657600080fd5b5051919050565b601f821115611ce757600081815260208120601f850160051c81016020861015611cc45750805b601f850160051c820191505b81811015611ce357828155600101611cd0565b5050505b505050565b815167ffffffffffffffff811115611d0657611d0661189a565b611d1a81611d148454611bf6565b84611c9d565b602080601f831160018114611d4f5760008415611d375750858301515b600019600386901b1c1916600185901b178555611ce3565b600085815260208120601f198616915b82811015611d7e57888601518255948401946001909101908401611d5f565b5085821015611d9c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156114d4576114d4611b88565b80820281158282048414176114d4576114d4611b8856fea2646970667358221220858298d495281c91785d03c008eeb8af44a2e51aa79e694ba587a8f16923815e64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class BasketManagerV3__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BasketManagerV3__factory = BasketManagerV3__factory;
BasketManagerV3__factory.bytecode = _bytecode;
BasketManagerV3__factory.abi = _abi;
//# sourceMappingURL=BasketManagerV3__factory.js.map