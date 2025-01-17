"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MocIntegration__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_moc",
                type: "address",
            },
            {
                internalType: "address",
                name: "_doc",
                type: "address",
            },
            {
                internalType: "address",
                name: "_dllr",
                type: "address",
            },
            {
                internalType: "address",
                name: "_massetManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "_permit2",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromDLLR",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toRBTC",
                type: "uint256",
            },
        ],
        name: "GetDocFromDllrAndRedeemRBTC",
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
                indexed: false,
                internalType: "address",
                name: "newMocVendorAccount",
                type: "address",
            },
        ],
        name: "MocVendorAccountSet",
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
        inputs: [],
        name: "dllr",
        outputs: [
            {
                internalType: "contract IDLLR",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "doc",
        outputs: [
            {
                internalType: "contract IERC20",
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
                internalType: "uint256",
                name: "_dllrAmount",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32",
                    },
                ],
                internalType: "struct PermitParams",
                name: "_permitParams",
                type: "tuple",
            },
        ],
        name: "getDocFromDllrAndRedeemRBTC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct ISignatureTransfer.TokenPermissions",
                        name: "permitted",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                ],
                internalType: "struct ISignatureTransfer.PermitTransferFrom",
                name: "permit",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "getDocFromDllrAndRedeemRbtcWithPermit2",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "address payable",
                name: "_mocVendorAccount",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "massetManager",
        outputs: [
            {
                internalType: "contract IMassetManager",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "moc",
        outputs: [
            {
                internalType: "contract IMocMintRedeemDoc",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mocVendorAccount",
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
        inputs: [],
        name: "permit2",
        outputs: [
            {
                internalType: "contract IPermit2",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
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
                internalType: "address payable",
                name: "newMocVedorAccount",
                type: "address",
            },
        ],
        name: "setMocVendorAccount",
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
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x6101206040523480156200001257600080fd5b50604051620012cd380380620012cd833981016040819052620000359162000140565b6001600160a01b038516158015906200005657506001600160a01b03841615155b80156200006b57506001600160a01b03831615155b80156200008057506001600160a01b03821615155b80156200009557506001600160a01b03811615155b620000f95760405162461bcd60e51b815260206004820152602a60248201527f4d6f63496e746567726174696f6e3a3a206e6f206e756c6c2061646472657373604482015269195cc8185b1b1bddd95960b21b606482015260840160405180910390fd5b6001600160a01b0394851660805292841660a05290831660c052821660e0521661010052620001b0565b80516001600160a01b03811681146200013b57600080fd5b919050565b600080600080600060a086880312156200015957600080fd5b620001648662000123565b9450620001746020870162000123565b9350620001846040870162000123565b9250620001946060870162000123565b9150620001a46080870162000123565b90509295509295909350565b60805160a05160c05160e051610100516110a16200022c6000396000818160ff015261069301526000818161027501528181610435015261074f01526000818161014f01526103220152600081816101ee015281816103fb01526107150152600081816101a5015281816104f7015261080801526110a16000f3fe6080604052600436106100e15760003560e01c806390e4b7201161007f578063c4d66de811610059578063c4d66de814610297578063e5085517146102b7578063f2fde38b146102d7578063fc176819146102f757600080fd5b806390e4b7201461022e5780639b2633ae14610243578063b5c89bab1461026357600080fd5b806353428253116100bb5780635342825314610193578063715018a6146101c75780637a0a3ac5146101dc5780638da5cb5b1461021057600080fd5b806312261ee7146100ed57806333c507ae1461013d578063460f2de11461017157600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b34801561014957600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b34801561017d57600080fd5b5061019161018c366004610c64565b610317565b005b34801561019f57600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d357600080fd5b50610191610619565b3480156101e857600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b34801561021c57600080fd5b506033546001600160a01b0316610121565b34801561023a57600080fd5b5061012161062d565b34801561024f57600080fd5b5061019161025e366004610d7d565b610665565b34801561026f57600080fd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b3480156102a357600080fd5b506101916102b2366004610e40565b61092c565b3480156102c357600080fd5b506101916102d2366004610e40565b610a47565b3480156102e357600080fd5b506101916102f2366004610e40565b610a5b565b34801561030357600080fd5b50609754610121906001600160a01b031681565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663605629d6338386863561035c6040890160208a01610e64565b604080516001600160e01b031960e089901b1681526001600160a01b0396871660048201529590941660248601526044850192909252606484015260ff16608483015285013560a4820152606085013560c482015260e401600060405180830381600087803b1580156103ce57600080fd5b505af11580156103e2573d6000803e3d6000fd5b505060405163fb2c922360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820187905284811660448301528693507f000000000000000000000000000000000000000000000000000000000000000016915063fb2c9223906064016020604051808303816000875af115801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a39190610e87565b146104c95760405162461bcd60e51b81526004016104c090610ea0565b60405180910390fd5b60975460405163b7aa53e760e01b8152600481018590526001600160a01b03918216602482015282821631917f0000000000000000000000000000000000000000000000000000000000000000169063b7aa53e790604401600060405180830381600087803b15801561053b57600080fd5b505af115801561054f573d6000803e3d6000fd5b50505050600081836001600160a01b03163161056b9190610eee565b604051909150600090339083908381818185875af1925050503d80600081146105b0576040519150601f19603f3d011682016040523d82523d6000602084013e6105b5565b606091505b50509050806105d65760405162461bcd60e51b81526004016104c090610f0f565b604080518781526020810184905233917f5933f612d4a5aafda234d2ad17b54eba4187e2bb520cf7373e223c5894851ca5910160405180910390a2505050505050565b610621610ad1565b61062b6000610b2b565b565b60006106607f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b815160200151309060006106798383610b7d565b60405163187945bd60e11b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906330f28b7a906106ce908890859033908a90600401610f60565b600060405180830381600087803b1580156106e857600080fd5b505af11580156106fc573d6000803e3d6000fd5b505060405163fb2c922360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820186905286811660448301528593507f000000000000000000000000000000000000000000000000000000000000000016915063fb2c9223906064016020604051808303816000875af1158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd9190610e87565b146107da5760405162461bcd60e51b81526004016104c090610ea0565b60975460405163b7aa53e760e01b8152600481018490526001600160a01b03918216602482015284821631917f0000000000000000000000000000000000000000000000000000000000000000169063b7aa53e790604401600060405180830381600087803b15801561084c57600080fd5b505af1158015610860573d6000803e3d6000fd5b50505050600081856001600160a01b03163161087c9190610eee565b604051909150600090339083908381818185875af1925050503d80600081146108c1576040519150601f19603f3d011682016040523d82523d6000602084013e6108c6565b606091505b50509050806108e75760405162461bcd60e51b81526004016104c090610f0f565b604080518681526020810184905233917f5933f612d4a5aafda234d2ad17b54eba4187e2bb520cf7373e223c5894851ca5910160405180910390a25050505050505050565b600054610100900460ff161580801561094c5750600054600160ff909116105b806109665750303b158015610966575060005460ff166001145b6109c95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104c0565b6000805460ff1916600117905580156109ec576000805461ff0019166101001790555b6109f4610bb1565b6109fd82610be0565b8015610a43576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b610a4f610ad1565b610a5881610be0565b50565b610a63610ad1565b6001600160a01b038116610ac85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c0565b610a5881610b2b565b6033546001600160a01b0316331461062b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c0565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080518082018252600080825260209182015281518083019092526001600160a01b038416825281018290525b92915050565b600054610100900460ff16610bd85760405162461bcd60e51b81526004016104c090611020565b61062b610c34565b609780546001600160a01b0319166001600160a01b0383169081179091556040519081527fc2a1feb9d65ecb31b0e93a520a66d19319929a2bf58046d92d762c04e7dd06c99060200160405180910390a150565b600054610100900460ff16610c5b5760405162461bcd60e51b81526004016104c090611020565b61062b33610b2b565b60008082840360a0811215610c7857600080fd5b833592506080601f1982011215610c8e57600080fd5b506020830190509250929050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610cd557610cd5610c9c565b60405290565b6001600160a01b0381168114610a5857600080fd5b600082601f830112610d0157600080fd5b813567ffffffffffffffff80821115610d1c57610d1c610c9c565b604051601f8301601f19908116603f01168101908282118183101715610d4457610d44610c9c565b81604052838152866020858801011115610d5d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008082840360a0811215610d9157600080fd5b6080811215610d9f57600080fd5b6040516060810167ffffffffffffffff8282108183111715610dc357610dc3610c9c565b816040526040841215610dd557600080fd5b610ddd610cb2565b935086359150610dec82610cdb565b8184526020870135602085015283835260408701356020840152606087013560408401528295506080870135935080841115610e2757600080fd5b505050610e3685828601610cf0565b9150509250929050565b600060208284031215610e5257600080fd5b8135610e5d81610cdb565b9392505050565b600060208284031215610e7657600080fd5b813560ff81168114610e5d57600080fd5b600060208284031215610e9957600080fd5b5051919050565b6020808252602e908201527f4d6f63496e746567726174696f6e3a3a2072656465656d656420696e636f727260408201526d1958dd08111bd0c8185b5bdd5b9d60921b606082015260800190565b81810381811115610bab57634e487b7160e01b600052601160045260246000fd5b60208082526031908201527f4d6f63496e746567726174696f6e3a3a206572726f72207472616e7366657272604082015270696e672072656465656d6564205242544360781b606082015260800190565b6000610100610f8383885180516001600160a01b03168252602090810151910152565b602080880151604085015260408801516060850152610fb8608085018880516001600160a01b03168252602090810151910152565b6001600160a01b03861660c085015260e0840182905284519184018290526000915b80831015610ff957858301820151858401610120015291810191610fda565b6101209250600083828701015282601f19601f830116860101935050505095945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220d0fcc7c15da2d0cf8a6f0df865b7535edea2c45483b951fb883a7a57908c9d0764736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class MocIntegration__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_moc, _doc, _dllr, _massetManager, _permit2, overrides) {
        return super.deploy(_moc, _doc, _dllr, _massetManager, _permit2, overrides || {});
    }
    getDeployTransaction(_moc, _doc, _dllr, _massetManager, _permit2, overrides) {
        return super.getDeployTransaction(_moc, _doc, _dllr, _massetManager, _permit2, overrides || {});
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
exports.MocIntegration__factory = MocIntegration__factory;
MocIntegration__factory.bytecode = _bytecode;
MocIntegration__factory.abi = _abi;
//# sourceMappingURL=MocIntegration__factory.js.map