/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC20PermitAllowed,
  IERC20PermitAllowedInterface,
} from "../IERC20PermitAllowed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC20PermitAllowed__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20PermitAllowedInterface {
    return new utils.Interface(_abi) as IERC20PermitAllowedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20PermitAllowed {
    return new Contract(address, _abi, signerOrProvider) as IERC20PermitAllowed;
  }
}
