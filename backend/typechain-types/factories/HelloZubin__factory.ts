/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { HelloZubin, HelloZubinInterface } from "../HelloZubin";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "helloSir",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "sayHello",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040527f48656c6c6f20576f726c6421000000000000000000000000000000000000000060005561029f806100376000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c3a9b1c514610030575b600080fd5b61004a60048036038101906100459190610117565b610060565b604051610057919061017d565b60405180910390f35b60007fb1567622af692c461ed52e1a51f6195e2e4f285e6537c6da9d0fe44822534ed483833360405161009593929190610237565b60405180910390a1600054905092915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126100d7576100d66100b2565b5b8235905067ffffffffffffffff8111156100f4576100f36100b7565b5b6020830191508360018202830111156101105761010f6100bc565b5b9250929050565b6000806020838503121561012e5761012d6100a8565b5b600083013567ffffffffffffffff81111561014c5761014b6100ad565b5b610158858286016100c1565b92509250509250929050565b6000819050919050565b61017781610164565b82525050565b6000602082019050610192600083018461016e565b92915050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006101d58385610198565b93506101e28385846101a9565b6101eb836101b8565b840190509392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610221826101f6565b9050919050565b61023181610216565b82525050565b600060408201905081810360008301526102528185876101c9565b90506102616020830184610228565b94935050505056fea26469706673582212201ab3755a448344aeaa01d86098fc6f3f8327acff08e9aad115989229e71f22a764736f6c63430008130033";

type HelloZubinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloZubinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloZubin__factory extends ContractFactory {
  constructor(...args: HelloZubinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: PayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      HelloZubin & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): HelloZubin__factory {
    return super.connect(runner) as HelloZubin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloZubinInterface {
    return new Interface(_abi) as HelloZubinInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): HelloZubin {
    return new Contract(address, _abi, runner) as unknown as HelloZubin;
  }
}
