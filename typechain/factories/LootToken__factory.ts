/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LootToken } from "../LootToken";

export class LootToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    questManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LootToken> {
    return super.deploy(
      questManagerAddress,
      overrides || {}
    ) as Promise<LootToken>;
  }
  getDeployTransaction(
    questManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(questManagerAddress, overrides || {});
  }
  attach(address: string): LootToken {
    return super.attach(address) as LootToken;
  }
  connect(signer: Signer): LootToken__factory {
    return super.connect(signer) as LootToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LootToken {
    return new Contract(address, _abi, signerOrProvider) as LootToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "questManagerAddress",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "QuestManagerAddress",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a6538038062001a658339818101604052810190620000379190620001e6565b6040518060400160405280600981526020017f4c6f6f74546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4c544b00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb9291906200011f565b508060049080519060200190620000d49291906200011f565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002d0565b8280546200012d906200024c565b90600052602060002090601f0160209004810192826200015157600085556200019d565b82601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b5b80821115620001cb576000816000905550600101620001b1565b5090565b600081519050620001e081620002b6565b92915050565b600060208284031215620001ff57620001fe620002b1565b5b60006200020f84828501620001cf565b91505092915050565b600062000225826200022c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200026557607f821691505b602082108114156200027c576200027b62000282565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b620002c18162000218565b8114620002cd57600080fd5b50565b61178580620002e06000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d71461022a578063a9059cbb1461025a578063dd62ed3e1461028a578063f0dda65c146102ba576100cf565b806339509351146101ac57806370a08231146101dc57806395d89b411461020c576100cf565b806306fdde03146100d4578063095ea7b3146100f25780630f66f3721461012257806318160ddd1461014057806323b872dd1461015e578063313ce5671461018e575b600080fd5b6100dc6102d6565b6040516100e99190611134565b60405180910390f35b61010c60048036038101906101079190610f0e565b610368565b6040516101199190611119565b60405180910390f35b61012a610386565b60405161013791906110fe565b60405180910390f35b6101486103ac565b6040516101559190611276565b60405180910390f35b61017860048036038101906101739190610ebb565b6103b6565b6040516101859190611119565b60405180910390f35b6101966104b7565b6040516101a39190611291565b60405180910390f35b6101c660048036038101906101c19190610f0e565b6104bc565b6040516101d39190611119565b60405180910390f35b6101f660048036038101906101f19190610e4e565b610568565b6040516102039190611276565b60405180910390f35b6102146105b0565b6040516102219190611134565b60405180910390f35b610244600480360381019061023f9190610f0e565b610642565b6040516102519190611119565b60405180910390f35b610274600480360381019061026f9190610f0e565b610736565b6040516102819190611119565b60405180910390f35b6102a4600480360381019061029f9190610e7b565b610754565b6040516102b19190611276565b60405180910390f35b6102d460048036038101906102cf9190610f0e565b6107db565b005b6060600380546102e5906113da565b80601f0160208091040260200160405190810160405280929190818152602001828054610311906113da565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b600061037c610375610879565b8484610881565b6001905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b60006103c3848484610a4c565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061040e610879565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561048e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610485906111b6565b60405180910390fd5b6104ab8561049a610879565b85846104a6919061131e565b610881565b60019150509392505050565b600090565b600061055e6104c9610879565b8484600160006104d7610879565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461055991906112c8565b610881565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105bf906113da565b80601f01602080910402602001604051908101604052809291908181526020018280546105eb906113da565b80156106385780601f1061060d57610100808354040283529160200191610638565b820191906000526020600020905b81548152906001019060200180831161061b57829003601f168201915b5050505050905090565b60008060016000610651610879565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070590611236565b60405180910390fd5b61072b610719610879565b858584610726919061131e565b610881565b600191505092915050565b600061074a610743610879565b8484610a4c565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b3373ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461086b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086290611216565b60405180910390fd5b6108758282610ccb565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e8906111f6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095890611176565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a3f9190611276565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab3906111d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2390611156565b60405180910390fd5b610b37838383610e1f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb490611196565b60405180910390fd5b8181610bc9919061131e565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c5991906112c8565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cbd9190611276565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3290611256565b60405180910390fd5b610d4760008383610e1f565b8060026000828254610d5991906112c8565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dae91906112c8565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e139190611276565b60405180910390a35050565b505050565b600081359050610e3381611721565b92915050565b600081359050610e4881611738565b92915050565b600060208284031215610e6457610e6361146a565b5b6000610e7284828501610e24565b91505092915050565b60008060408385031215610e9257610e9161146a565b5b6000610ea085828601610e24565b9250506020610eb185828601610e24565b9150509250929050565b600080600060608486031215610ed457610ed361146a565b5b6000610ee286828701610e24565b9350506020610ef386828701610e24565b9250506040610f0486828701610e39565b9150509250925092565b60008060408385031215610f2557610f2461146a565b5b6000610f3385828601610e24565b9250506020610f4485828601610e39565b9150509250929050565b610f5781611352565b82525050565b610f6681611364565b82525050565b6000610f77826112ac565b610f8181856112b7565b9350610f918185602086016113a7565b610f9a8161146f565b840191505092915050565b6000610fb26023836112b7565b9150610fbd82611480565b604082019050919050565b6000610fd56022836112b7565b9150610fe0826114cf565b604082019050919050565b6000610ff86026836112b7565b91506110038261151e565b604082019050919050565b600061101b6028836112b7565b91506110268261156d565b604082019050919050565b600061103e6025836112b7565b9150611049826115bc565b604082019050919050565b60006110616024836112b7565b915061106c8261160b565b604082019050919050565b6000611084602f836112b7565b915061108f8261165a565b604082019050919050565b60006110a76025836112b7565b91506110b2826116a9565b604082019050919050565b60006110ca601f836112b7565b91506110d5826116f8565b602082019050919050565b6110e981611390565b82525050565b6110f88161139a565b82525050565b60006020820190506111136000830184610f4e565b92915050565b600060208201905061112e6000830184610f5d565b92915050565b6000602082019050818103600083015261114e8184610f6c565b905092915050565b6000602082019050818103600083015261116f81610fa5565b9050919050565b6000602082019050818103600083015261118f81610fc8565b9050919050565b600060208201905081810360008301526111af81610feb565b9050919050565b600060208201905081810360008301526111cf8161100e565b9050919050565b600060208201905081810360008301526111ef81611031565b9050919050565b6000602082019050818103600083015261120f81611054565b9050919050565b6000602082019050818103600083015261122f81611077565b9050919050565b6000602082019050818103600083015261124f8161109a565b9050919050565b6000602082019050818103600083015261126f816110bd565b9050919050565b600060208201905061128b60008301846110e0565b92915050565b60006020820190506112a660008301846110ef565b92915050565b600081519050919050565b600082825260208201905092915050565b60006112d382611390565b91506112de83611390565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113135761131261140c565b5b828201905092915050565b600061132982611390565b915061133483611390565b9250828210156113475761134661140c565b5b828203905092915050565b600061135d82611370565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156113c55780820151818401526020810190506113aa565b838111156113d4576000848401525b50505050565b600060028204905060018216806113f257607f821691505b602082108114156114065761140561143b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4572726f723a206f6e6c792051756573744d616e616765722063616e2063616c60008201527f6c20746869732066756e6374696f6e0000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61172a81611352565b811461173557600080fd5b50565b61174181611390565b811461174c57600080fd5b5056fea26469706673582212202316e681c76ea07ab1023136f547ee78dfd4848a5d0c4b1a625d46d8fe2fa7ef64736f6c63430008070033";
