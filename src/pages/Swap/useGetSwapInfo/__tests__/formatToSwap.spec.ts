import { Token as PSToken } from '@pancakeswap/sdk/dist/index.js';
import BigNumber from 'bignumber.js';
import { BscChainId } from 'types';

import { PANCAKE_SWAP_TOKENS } from 'constants/tokens';

import formatToSwap from '../formatToSwap';
import { FormatToSwapInput } from '../types';

const fakeRoute = {
  path: [
    new PSToken(
      BscChainId.TESTNET,
      PANCAKE_SWAP_TOKENS.busd.address,
      PANCAKE_SWAP_TOKENS.busd.decimals,
      PANCAKE_SWAP_TOKENS.busd.symbol,
    ),
    new PSToken(
      BscChainId.TESTNET,
      PANCAKE_SWAP_TOKENS.cake.address,
      PANCAKE_SWAP_TOKENS.cake.decimals,
      PANCAKE_SWAP_TOKENS.cake.symbol,
    ),
  ],
};

describe('pages/Swap/useGetSwapInfo/formatToSwap', () => {
  it('formats trade to swap correctly when direction is "exactAmountIn"', () => {
    const fakeTrade = {
      route: fakeRoute,
      inputAmount: new BigNumber(10),
      outputAmount: new BigNumber(10),
      executionPrice: new BigNumber(1),
      minimumAmountOut: jest.fn(() => new BigNumber(9)),
    } as unknown as FormatToSwapInput['trade'];

    const fakeInput: FormatToSwapInput['input'] = {
      fromToken: PANCAKE_SWAP_TOKENS.busd,
      toToken: PANCAKE_SWAP_TOKENS.cake,
      direction: 'exactAmountIn',
    };

    const res = formatToSwap({ trade: fakeTrade, input: fakeInput });

    expect(res).toMatchSnapshot();
  });

  it('formats trade to swap correctly when direction is "exactAmountOut"', () => {
    const fakeTrade = {
      route: fakeRoute,
      inputAmount: new BigNumber(10),
      outputAmount: new BigNumber(10),
      executionPrice: new BigNumber(1),
      maximumAmountIn: jest.fn(() => new BigNumber(11)),
    } as unknown as FormatToSwapInput['trade'];

    const fakeInput: FormatToSwapInput['input'] = {
      fromToken: PANCAKE_SWAP_TOKENS.busd,
      toToken: PANCAKE_SWAP_TOKENS.cake,
      direction: 'exactAmountOut',
    };

    const res = formatToSwap({ trade: fakeTrade, input: fakeInput });

    expect(res).toMatchSnapshot();
  });
});
