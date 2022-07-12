import { useMutation, MutationObserverOptions } from 'react-query';

import { VTokenId } from 'types';
import queryClient from 'clients/api/queryClient';
import redeemUnderlying, {
  IRedeemUnderlyingInput,
  RedeemUnderlyingOutput,
} from 'clients/api/mutations/redeemUnderlying';
import FunctionKey from 'constants/functionKey';
import { useVTokenContract } from 'clients/contracts/hooks';

const useRedeemUnderlying = (
  { vTokenId, accountAddress }: { vTokenId: VTokenId; accountAddress: string },
  // TODO: use custom error type https://app.clickup.com/t/2rvwhnt
  options?: MutationObserverOptions<
    RedeemUnderlyingOutput,
    Error,
    Omit<IRedeemUnderlyingInput, 'vTokenContract' | 'accountAddress'>
  >,
) => {
  const vTokenContract = useVTokenContract(vTokenId);

  return useMutation(
    FunctionKey.REDEEM_UNDERLYING,
    params =>
      redeemUnderlying({
        vTokenContract,
        accountAddress,
        ...params,
      }),
    {
      ...options,
      onSuccess: (...onSuccessParams) => {
        queryClient.invalidateQueries(FunctionKey.GET_V_TOKEN_BALANCES_ALL);
        queryClient.invalidateQueries([
          FunctionKey.GET_V_TOKEN_BALANCE,
          {
            accountAddress,
            vTokenId,
          },
        ]);
        queryClient.invalidateQueries(FunctionKey.GET_ASSETS_IN_ACCOUNT);
        queryClient.invalidateQueries(FunctionKey.GET_MARKETS);
        queryClient.invalidateQueries(FunctionKey.GET_V_TOKEN_DAILY_XVS_WEI);

        if (options?.onSuccess) {
          options.onSuccess(...onSuccessParams);
        }
      },
    },
  );
};

export default useRedeemUnderlying;
