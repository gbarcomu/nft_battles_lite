/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { QuestManager } from "../QuestManager";

export class QuestManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    squadNFTAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QuestManager> {
    return super.deploy(
      squadNFTAddress,
      overrides || {}
    ) as Promise<QuestManager>;
  }
  getDeployTransaction(
    squadNFTAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(squadNFTAddress, overrides || {});
  }
  attach(address: string): QuestManager {
    return super.attach(address) as QuestManager;
  }
  connect(signer: Signer): QuestManager__factory {
    return super.connect(signer) as QuestManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuestManager {
    return new Contract(address, _abi, signerOrProvider) as QuestManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "squadNFTAddress",
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
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "BattleWinners",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "EnemySquadComposition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "IsPlayerWinner",
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
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "PlayerSquadComposition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "PseudoRandomNumbers",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "playerAddress",
        type: "address",
      },
    ],
    name: "getRemainingTime",
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
    name: "playQuest",
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

const _bytecode =
  "0x60806040526729a2241af62c000060025560786003553480156200002257600080fd5b50604051620018313803806200183183398181016040528101906200004891906200015f565b60006200005a6200014060201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620001e4565b600033905090565b6000815190506200015981620001ca565b92915050565b600060208284031215620001785762000177620001c5565b5b6000620001888482850162000148565b91505092915050565b60006200019e82620001a5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001d58162000191565b8114620001e157600080fd5b50565b61163d80620001f46000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630e85117a1461005c578063715018a61461008c5780638da5cb5b14610096578063bbb219ff146100b4578063f2fde38b146100be575b600080fd5b61007660048036038101906100719190611055565b6100da565b604051610083919061127d565b60405180910390f35b6100946101e2565b005b61009e61031c565b6040516100ab91906111b5565b60405180910390f35b6100bc610345565b005b6100d860048036038101906100d39190611055565b6104fc565b005b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480610174575042600354600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461017291906112e0565b105b1561018257600090506101dd565b42600354600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101d091906112e0565b6101da919061136d565b90505b919050565b6101ea6106a5565b73ffffffffffffffffffffffffffffffffffffffff1661020861031c565b73ffffffffffffffffffffffffffffffffffffffff161461025e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102559061125d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631ef71481336040518263ffffffff1660e01b81526004016103a291906111b5565b60206040518083038186803b1580156103ba57600080fd5b505afa1580156103ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f29190611082565b905060006103fe6106ad565b90507f6022f27eb42c28206eae1702ef7f036d3f2b04c656a6ce84141221c98e9089648260405161042f9190611222565b60405180910390a17fffbef2724b93953e99b3ba7317c35532dffaf315bc407059bf1e150c823d7999816040516104669190611222565b60405180910390a1600061047a8383610936565b90507fab5fda8d28b81e41cb665f537f0471ff8d001afb182f4e8d62b5d6ba42e85d4c816040516104ab91906111d0565b60405180910390a142600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b6105046106a5565b73ffffffffffffffffffffffffffffffffffffffff1661052261031c565b73ffffffffffffffffffffffffffffffffffffffff1614610578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056f9061125d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105df9061123d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600080600390506106bc610f81565b6106c4610fa3565b4243406040516020016106d8929190611189565b60405160208183030381529060405280519060200120826000600481106107025761070161152d565b5b6020020181815250508260ff16826000600481106107235761072261152d565b5b602002015160001c610735919061149e565b60f81b8160006004811061074c5761074b61152d565b5b60200201907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815250506000600190505b60048160ff1610156108c157826001826107bc91906113a1565b60ff16600481106107d0576107cf61152d565b5b60200201516040516020016107e5919061116e565b60405160208183030381529060405280519060200120838260ff16600481106108115761081061152d565b5b6020020181815250508360ff16838260ff16600481106108345761083361152d565b5b602002015160001c610846919061149e565b60f81b828260ff166004811061085f5761085e61152d565b5b60200201907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505080806108b990611460565b9150506107a2565b5061092e816000600481106108d9576108d861152d565b5b6020020151826001600481106108f2576108f161152d565b5b60200201518360026004811061090b5761090a61152d565b5b6020020151846003600481106109245761092361152d565b5b6020020151610b7b565b935050505090565b6000610940610fc5565b610948610fe7565b610950610c7f565b846000600381106109645761096361152d565b5b602002018560016003811061097c5761097b61152d565b5b60200201866002600381106109945761099361152d565b5b602002018360ff1660ff168152508360ff1660ff168152508360ff1660ff1681525050505060005b60038160ff161015610a5e57610a04868260ff16600481106109e1576109e061152d565b5b1a60f81b868360ff16600481106109fb576109fa61152d565b5b1a60f81b610ef2565b60ff16838260ff1660038110610a1d57610a1c61152d565b5b602002015160ff1610828260ff1660038110610a3c57610a3b61152d565b5b6020020190151590811515815250508080610a5690611460565b9150506109bc565b507fcbb51db3b31cba7ea5c0f1534b651fee139185a9d8858e4b99e8b046ba0be4a081600060038110610a9457610a9361152d565b5b602002015182600160038110610aad57610aac61152d565b5b602002015183600260038110610ac657610ac561152d565b5b6020020151604051610ada939291906111eb565b60405180910390a1600181600260038110610af857610af761152d565b5b6020020151610b08576000610b0b565b60015b82600160038110610b1f57610b1e61152d565b5b6020020151610b2f576000610b32565b60015b83600060038110610b4657610b4561152d565b5b6020020151610b56576000610b59565b60015b610b639190611336565b610b6d9190611336565b60ff16119250505092915050565b60006018827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c6010847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c6008867effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c877effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161717179050949350505050565b6000806000610c8c611009565b610c94610fc5565b600060649050424340604051602001610cae929190611189565b6040516020818303038152906040528051906020012083600060038110610cd857610cd761152d565b5b6020020181815250508060ff1683600060038110610cf957610cf861152d565b5b602002015160001c610d0b919061149e565b82600060038110610d1f57610d1e61152d565b5b602002019060ff16908160ff16815250506000600190505b60038160ff161015610e155783600182610d5191906113a1565b60ff1660038110610d6557610d6461152d565b5b6020020151604051602001610d7a919061116e565b60405160208183030381529060405280519060200120848260ff1660038110610da657610da561152d565b5b6020020181815250508160ff16848260ff1660038110610dc957610dc861152d565b5b602002015160001c610ddb919061149e565b838260ff1660038110610df157610df061152d565b5b602002019060ff16908160ff16815250508080610e0d90611460565b915050610d37565b507fdd3fbd088ea743fc1cb5d059304e8374d91f556c2325b5841d43e60f4860c42282600060038110610e4b57610e4a61152d565b5b602002015183600160038110610e6457610e6361152d565b5b602002015184600260038110610e7d57610e7c61152d565b5b6020020151604051610e9193929190611298565b60405180910390a181600060038110610ead57610eac61152d565b5b602002015182600160038110610ec657610ec561152d565b5b602002015183600260038110610edf57610ede61152d565b5b6020020151955095509550505050909192565b600080603290506000604690506000601e905060008660f81c905060008660f81c90508060ff168260ff161015610f3357600382610f309190611336565b91505b8060ff168260ff161415610f4e578495505050505050610f7b565b60018183610f5c91906113a1565b60ff161415610f72578295505050505050610f7b565b83955050505050505b92915050565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b60008135905061103a816115d9565b92915050565b60008151905061104f816115f0565b92915050565b60006020828403121561106b5761106a61155c565b5b60006110798482850161102b565b91505092915050565b6000602082840312156110985761109761155c565b5b60006110a684828501611040565b91505092915050565b6110b8816113d5565b82525050565b6110c7816113e7565b82525050565b6110de6110d9826113f3565b61148a565b82525050565b6110ed816113fd565b82525050565b60006111006026836112cf565b915061110b82611561565b604082019050919050565b60006111236020836112cf565b915061112e826115b0565b602082019050919050565b61114281611449565b82525050565b61115961115482611449565b611494565b82525050565b61116881611453565b82525050565b600061117a82846110cd565b60208201915081905092915050565b60006111958285611148565b6020820191506111a582846110cd565b6020820191508190509392505050565b60006020820190506111ca60008301846110af565b92915050565b60006020820190506111e560008301846110be565b92915050565b600060608201905061120060008301866110be565b61120d60208301856110be565b61121a60408301846110be565b949350505050565b600060208201905061123760008301846110e4565b92915050565b60006020820190508181036000830152611256816110f3565b9050919050565b6000602082019050818103600083015261127681611116565b9050919050565b60006020820190506112926000830184611139565b92915050565b60006060820190506112ad600083018661115f565b6112ba602083018561115f565b6112c7604083018461115f565b949350505050565b600082825260208201905092915050565b60006112eb82611449565b91506112f683611449565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561132b5761132a6114cf565b5b828201905092915050565b600061134182611453565b915061134c83611453565b92508260ff03821115611362576113616114cf565b5b828201905092915050565b600061137882611449565b915061138383611449565b925082821015611396576113956114cf565b5b828203905092915050565b60006113ac82611453565b91506113b783611453565b9250828210156113ca576113c96114cf565b5b828203905092915050565b60006113e082611429565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061146b82611453565b915060ff82141561147f5761147e6114cf565b5b600182019050919050565b6000819050919050565b6000819050919050565b60006114a982611449565b91506114b483611449565b9250826114c4576114c36114fe565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6115e2816113d5565b81146115ed57600080fd5b50565b6115f9816113fd565b811461160457600080fd5b5056fea2646970667358221220e8d45cd913a4ff132f9712818965e8bbd4626d19bcf9948f3b1cae75069f284c64736f6c63430008070033";
