import BigNumber from 'bignumber.js';
import type { TransactionReceipt } from 'web3-core';

import { VBep20, VBnbToken } from 'types/contracts';
import { checkForTokenTransactionError } from 'errors';

export interface IRedeemUnderlyingInput {
  vTokenContract: VBep20 | VBnbToken;
  accountAddress: string;
  amountWei: BigNumber;
}

export type RedeemUnderlyingOutput = TransactionReceipt;

const redeemUnderlying = async ({
  vTokenContract,
  accountAddress,
  amountWei,
}: IRedeemUnderlyingInput): Promise<RedeemUnderlyingOutput> => {
  const resp = await vTokenContract.methods
    .redeemUnderlying(amountWei.toFixed())
    .send({ from: accountAddress });

  return checkForTokenTransactionError(resp);
};

export default redeemUnderlying;
