/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Dungeon } from "../Dungeon";

export class Dungeon__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    squadNFTAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Dungeon> {
    return super.deploy(squadNFTAddress, overrides || {}) as Promise<Dungeon>;
  }
  getDeployTransaction(
    squadNFTAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(squadNFTAddress, overrides || {});
  }
  attach(address: string): Dungeon {
    return super.attach(address) as Dungeon;
  }
  connect(signer: Signer): Dungeon__factory {
    return super.connect(signer) as Dungeon__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Dungeon {
    return new Contract(address, _abi, signerOrProvider) as Dungeon;
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
        internalType: "bytes32",
        name: "newDungeonSquadCommitment",
        type: "bytes32",
      },
    ],
    name: "createQuest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getQuestStage",
    outputs: [
      {
        internalType: "enum Dungeon.Stage",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "uint8",
        name: "squadUnit1",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "squadUnit2",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "squadUnit3",
        type: "uint8",
      },
    ],
    name: "playQuest",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "bytes4",
        name: "dungeonSquad",
        type: "bytes4",
      },
      {
        internalType: "bytes32",
        name: "blindingFactor",
        type: "bytes32",
      },
    ],
    name: "resolveQuest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "terminateQuestForInactivity",
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
  "0x6080604052674c53ecdc18a600006004556706f05b59d3b20000600555678ac7230489e80000600655620151806007553480156200003c57600080fd5b506040516200221a3803806200221a8339818101604052810190620000629190620001c9565b600062000074620001aa60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506000600360086101000a81548160ff021916908360028111156200013b576200013a6200022f565b5b02179055506000600360046101000a81548163ffffffff021916908363ffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200027d565b600033905090565b600081519050620001c38162000263565b92915050565b600060208284031215620001e257620001e16200025e565b5b6000620001f284828501620001b2565b91505092915050565b600062000208826200020f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600080fd5b6200026e81620001fb565b81146200027a57600080fd5b50565b611f8d806200028d6000396000f3fe6080604052600436106100915760003560e01c8063d087d28811610059578063d087d28814610136578063e92a21e714610161578063efb98bcf1461017d578063f2fde38b146101a8578063f6cb841e146101d157610091565b80635bcaa96e146100965780635c0e8c43146100c1578063715018a6146100dd5780638da5cb5b146100f45780639c4617b31461011f575b600080fd5b3480156100a257600080fd5b506100ab6101fa565b6040516100b8919061173e565b60405180910390f35b6100db60048036038101906100d6919061138d565b610211565b005b3480156100e957600080fd5b506100f261031a565b005b34801561010057600080fd5b50610109610454565b60405161011691906116d1565b60405180910390f35b34801561012b57600080fd5b5061013461047d565b005b34801561014257600080fd5b5061014b6105a6565b6040516101589190611854565b60405180910390f35b61017b60048036038101906101769190611427565b6105c0565b005b34801561018957600080fd5b50610192610906565b60405161019f9190611839565b60405180910390f35b3480156101b457600080fd5b506101cf60048036038101906101ca9190611360565b610967565b005b3480156101dd57600080fd5b506101f860048036038101906101f391906113ba565b610b10565b005b6000600360089054906101000a900460ff16905090565b6000600281111561022557610224611c54565b5b600360089054906101000a900460ff16600281111561024757610246611c54565b5b1461025157600080fd5b6004543414610295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028c90611799565b60405180910390fd5b61029d610454565b73ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f193505050501580156102e4573d6000803e3d6000fd5b50806002819055506001600360086101000a81548160ff0219169083600281111561031257610311611c54565b5b021790555050565b610322610d8e565b73ffffffffffffffffffffffffffffffffffffffff16610340610454565b73ffffffffffffffffffffffffffffffffffffffff1614610396576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038d906117d9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6002808111156104905761048f611c54565b5b600360089054906101000a900460ff1660028111156104b2576104b1611c54565b5b146104bc57600080fd5b426007546009546104cd91906118d2565b111561050e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050590611819565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f19350505050158015610578573d6000803e3d6000fd5b506000600360086101000a81548160ff0219169083600281111561059f5761059e611c54565b5b0217905550565b6000600360049054906101000a900463ffffffff16905090565b82828260058360ff161080156105d9575060058260ff16105b80156105e8575060058160ff16105b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061e906117b9565b60405180910390fd5b8160ff168360ff161415801561064357508060ff168360ff1614155b801561065557508060ff168260ff1614155b610694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068b90611759565b60405180910390fd5b600160028111156106a8576106a7611c54565b5b600360089054906101000a900460ff1660028111156106ca576106c9611c54565b5b146106d457600080fd5b6004543414610718576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070f90611799565b60405180910390fd5b610720610454565b73ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f19350505050158015610767573d6000803e3d6000fd5b5033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631ef71481336040518263ffffffff1660e01b815260040161080691906116d1565b60206040518083038186803b15801561081e57600080fd5b505afa158015610832573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085691906113fa565b90506108ae818860ff166008811061087157610870611c83565b5b1a60f81b828860ff166008811061088b5761088a611c83565b5b1a60f81b838860ff16600881106108a5576108a4611c83565b5b1a60f81b610d96565b600360006101000a81548163ffffffff021916908360e01c02179055506002600360086101000a81548160ff021916908360028111156108f1576108f0611c54565b5b02179055504260098190555050505050505050565b600060028081111561091b5761091a611c54565b5b600360089054906101000a900460ff16600281111561093d5761093c611c54565b5b1461094757600080fd5b4260075460095461095891906118d2565b610962919061195f565b905090565b61096f610d8e565b73ffffffffffffffffffffffffffffffffffffffff1661098d610454565b73ffffffffffffffffffffffffffffffffffffffff16146109e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109da906117d9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4a90611779565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b81816000600360049054906101000a900463ffffffff16604051602001610b3791906116b6565b604051602081830303815290604052610b4f90611aa1565b9050600033848385604051602001610b6a949392919061163c565b6040516020818303038152906040528051906020012090506002548114610bc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbd906117f9565b60405180910390fd5b600280811115610bd957610bd8611c54565b5b600360089054906101000a900460ff166002811115610bfb57610bfa611c54565b5b14610c0557600080fd5b6000610c20600360009054906101000a900460e01b88610e52565b90507fab5fda8d28b81e41cb665f537f0471ff8d001afb182f4e8d62b5d6ba42e85d4c81604051610c5191906116ec565b60405180910390a16003600481819054906101000a900463ffffffff1680929190610c7b90611b1a565b91906101000a81548163ffffffff021916908363ffffffff160217905550508015610d1057600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f19350505050158015610d0a573d6000803e3d6000fd5b50610d5a565b3373ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f19350505050158015610d58573d6000803e3d6000fd5b505b6000600360086101000a81548160ff02191690836002811115610d8057610d7f611c54565b5b021790555050505050505050565b600033905090565b60006010827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c6008847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916171790509392505050565b6000610e5c6112b3565b610e646112d5565b610e6c611097565b84600060038110610e8057610e7f611c83565b5b6020020185600160038110610e9857610e97611c83565b5b6020020186600260038110610eb057610eaf611c83565b5b602002018360ff1660ff168152508360ff1660ff168152508360ff1660ff1681525050505060005b60038160ff161015610f7a57610f20868260ff1660048110610efd57610efc611c83565b5b1a60f81b868360ff1660048110610f1757610f16611c83565b5b1a60f81b611224565b60ff16838260ff1660038110610f3957610f38611c83565b5b602002015160ff1610828260ff1660038110610f5857610f57611c83565b5b6020020190151590811515815250508080610f7290611b47565b915050610ed8565b507fcbb51db3b31cba7ea5c0f1534b651fee139185a9d8858e4b99e8b046ba0be4a081600060038110610fb057610faf611c83565b5b602002015182600160038110610fc957610fc8611c83565b5b602002015183600260038110610fe257610fe1611c83565b5b6020020151604051610ff693929190611707565b60405180910390a160018160026003811061101457611013611c83565b5b6020020151611024576000611027565b60015b8260016003811061103b5761103a611c83565b5b602002015161104b57600061104e565b60015b8360006003811061106257611061611c83565b5b6020020151611072576000611075565b60015b61107f9190611928565b6110899190611928565b60ff16119250505092915050565b60008060006110a46112b3565b60006064905060005b60038160ff161015611148578160ff164260018360ff16436110cf919061195f565b6110d9919061195f565b406040516020016110eb92919061168a565b6040516020818303038152906040528051906020012060001c61110e9190611bc5565b838260ff166003811061112457611123611c83565b5b602002019060ff16908160ff1681525050808061114090611b47565b9150506110ad565b507fdd3fbd088ea743fc1cb5d059304e8374d91f556c2325b5841d43e60f4860c4228260006003811061117e5761117d611c83565b5b60200201518360016003811061119757611196611c83565b5b6020020151846002600381106111b0576111af611c83565b5b60200201516040516111c49392919061186f565b60405180910390a1816000600381106111e0576111df611c83565b5b6020020151826001600381106111f9576111f8611c83565b5b60200201518360026003811061121257611211611c83565b5b60200201519450945094505050909192565b600080603290506000604690506000601e905060008660f81c905060008660f81c90508060ff168260ff161015611265576003826112629190611928565b91505b8060ff168260ff1614156112805784955050505050506112ad565b6001818361128e9190611993565b60ff1614156112a45782955050505050506112ad565b83955050505050505b92915050565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060600160405280600390602082028036833780820191505090505090565b60008135905061130681611ee4565b92915050565b60008135905061131b81611efb565b92915050565b60008135905061133081611f12565b92915050565b60008151905061134581611f29565b92915050565b60008135905061135a81611f40565b92915050565b60006020828403121561137657611375611cc7565b5b6000611384848285016112f7565b91505092915050565b6000602082840312156113a3576113a2611cc7565b5b60006113b18482850161130c565b91505092915050565b600080604083850312156113d1576113d0611cc7565b5b60006113df85828601611321565b92505060206113f08582860161130c565b9150509250929050565b6000602082840312156114105761140f611cc7565b5b600061141e84828501611336565b91505092915050565b6000806000606084860312156114405761143f611cc7565b5b600061144e8682870161134b565b935050602061145f8682870161134b565b92505060406114708682870161134b565b9150509250925092565b611483816119c7565b82525050565b61149a611495826119c7565b611b71565b82525050565b6114a9816119d9565b82525050565b6114c06114bb826119e5565b611b83565b82525050565b6114d76114d2826119ef565b611b8d565b82525050565b6114e681611b08565b82525050565b60006114f96023836118c1565b915061150482611cf3565b604082019050919050565b600061151c6026836118c1565b915061152782611d42565b604082019050919050565b600061153f6018836118c1565b915061154a82611d91565b602082019050919050565b60006115626038836118c1565b915061156d82611dba565b604082019050919050565b60006115856020836118c1565b915061159082611e09565b602082019050919050565b60006115a86031836118c1565b91506115b382611e32565b604082019050919050565b60006115cb6024836118c1565b91506115d682611e81565b604082019050919050565b6115ea81611a7a565b82525050565b6116016115fc82611a7a565b611ba9565b82525050565b61161081611a84565b82525050565b61162761162282611a84565b611bb3565b82525050565b61163681611a94565b82525050565b60006116488287611489565b60148201915061165882866114c6565b60048201915061166882856114c6565b60048201915061167882846114af565b60208201915081905095945050505050565b600061169682856115f0565b6020820191506116a682846114af565b6020820191508190509392505050565b60006116c28284611616565b60048201915081905092915050565b60006020820190506116e6600083018461147a565b92915050565b600060208201905061170160008301846114a0565b92915050565b600060608201905061171c60008301866114a0565b61172960208301856114a0565b61173660408301846114a0565b949350505050565b600060208201905061175360008301846114dd565b92915050565b60006020820190508181036000830152611772816114ec565b9050919050565b600060208201905081810360008301526117928161150f565b9050919050565b600060208201905081810360008301526117b281611532565b9050919050565b600060208201905081810360008301526117d281611555565b9050919050565b600060208201905081810360008301526117f281611578565b9050919050565b600060208201905081810360008301526118128161159b565b9050919050565b60006020820190508181036000830152611832816115be565b9050919050565b600060208201905061184e60008301846115e1565b92915050565b60006020820190506118696000830184611607565b92915050565b6000606082019050611884600083018661162d565b611891602083018561162d565b61189e604083018461162d565b949350505050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60006118dd82611a7a565b91506118e883611a7a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561191d5761191c611bf6565b5b828201905092915050565b600061193382611a94565b915061193e83611a94565b92508260ff0382111561195457611953611bf6565b5b828201905092915050565b600061196a82611a7a565b915061197583611a7a565b92508282101561198857611987611bf6565b5b828203905092915050565b600061199e82611a94565b91506119a983611a94565b9250828210156119bc576119bb611bf6565b5b828203905092915050565b60006119d282611a5a565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000819050611a5582611ed0565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b6000611aac826118b6565b82611ab6846118a6565b9050611ac181611cb2565b92506004821015611b0157611afc7fffffffff0000000000000000000000000000000000000000000000000000000083600403600802611ce6565b831692505b5050919050565b6000611b1382611a47565b9050919050565b6000611b2582611a84565b915063ffffffff821415611b3c57611b3b611bf6565b5b600182019050919050565b6000611b5282611a94565b915060ff821415611b6657611b65611bf6565b5b600182019050919050565b6000611b7c82611b97565b9050919050565b6000819050919050565b6000819050919050565b6000611ba282611cd9565b9050919050565b6000819050919050565b6000611bbe82611ccc565b9050919050565b6000611bd082611a7a565b9150611bdb83611a7a565b925082611beb57611bea611c25565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611cbe82516119ef565b80915050919050565b600080fd5b60008160e01b9050919050565b60008160601b9050919050565b600082821b905092915050565b7f4572726f722c2073656c6563746564207468652073616d6520756e697420747760008201527f6963650000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4572726f723a205072696365206e6f7420636f72726563740000000000000000600082015250565b7f4572726f722c20756e6974206e756d626572206f7574206f6620626f756e647360008201527f2c2073686f756c64206265206c6f776572207468616e20350000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4572726f722c20717565737420737175616420697320646966666572656e742060008201527f66726f6d2074686520636f6d6d69746564000000000000000000000000000000602082015250565b7f4572726f723a2051756573742063616e2774206265207465726d696e6174656460008201527f2079657400000000000000000000000000000000000000000000000000000000602082015250565b60038110611ee157611ee0611c54565b5b50565b611eed816119c7565b8114611ef857600080fd5b50565b611f04816119e5565b8114611f0f57600080fd5b50565b611f1b816119ef565b8114611f2657600080fd5b50565b611f3281611a1b565b8114611f3d57600080fd5b50565b611f4981611a94565b8114611f5457600080fd5b5056fea2646970667358221220c981e6ea9347d203b94b8acbbfbed9589e0cb5850b09e83fe0e5c424fd2ff6ea64736f6c63430008070033";
