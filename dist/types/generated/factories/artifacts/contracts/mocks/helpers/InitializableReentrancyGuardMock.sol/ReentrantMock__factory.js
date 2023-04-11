"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrantMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_contractAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "clientMethod",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161017538038061017583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b60e3806100926000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063848d0bd414602d575b600080fd5b60336047565b604051901515815260200160405180910390f35b60008054604051635594bcfb60e01b81523060048201526001600160a01b03909116908190635594bcfb90602401600060405180830381600087803b158015608e57600080fd5b505af115801560a1573d6000803e3d6000fd5b5050505060019150509056fea264697066735822122032d4617a869b60b14b6a43b1f4eedc350606f3c1ae02ef5a9362d88e09df893564736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class ReentrantMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_contractAddress, overrides) {
        return super.deploy(_contractAddress, overrides || {});
    }
    getDeployTransaction(_contractAddress, overrides) {
        return super.getDeployTransaction(_contractAddress, overrides || {});
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
exports.ReentrantMock__factory = ReentrantMock__factory;
ReentrantMock__factory.bytecode = _bytecode;
ReentrantMock__factory.abi = _abi;
//# sourceMappingURL=ReentrantMock__factory.js.map