/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  src: string;
  guy: string;
  wad: string;
  0: string;
  1: string;
  2: string;
}>;
export type LogNote = ContractEventLog<{
  sig: string;
  usr: string;
  arg1: string;
  arg2: string;
  data: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Transfer = ContractEventLog<{
  src: string;
  dst: string;
  wad: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VaiToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VaiToken;
  clone(): VaiToken;
  methods: {
    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    PERMIT_TYPEHASH(): NonPayableTransactionObject<string>;

    allowance(arg0: string, arg1: string): NonPayableTransactionObject<string>;

    approve(
      usr: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    balanceOf(arg0: string): NonPayableTransactionObject<string>;

    burn(
      usr: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<void>;

    decimals(): NonPayableTransactionObject<string>;

    deny(guy: string): NonPayableTransactionObject<void>;

    mint(
      usr: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<void>;

    move(
      src: string,
      dst: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    nonces(arg0: string): NonPayableTransactionObject<string>;

    permit(
      holder: string,
      spender: string,
      nonce: number | string | BN,
      expiry: number | string | BN,
      allowed: boolean,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    pull(
      usr: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<void>;

    push(
      usr: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<void>;

    rely(guy: string): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      dst: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      src: string,
      dst: string,
      wad: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    version(): NonPayableTransactionObject<string>;

    wards(arg0: string): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}