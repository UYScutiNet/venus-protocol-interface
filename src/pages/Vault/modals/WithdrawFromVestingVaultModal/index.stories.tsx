import { ComponentMeta, Story } from '@storybook/react';
import noop from 'noop-ts';
import React from 'react';

import fakeAddress from '__mocks__/models/address';
import { VBEP_TOKENS } from 'constants/tokens';
import { withAuthContext, withCenterStory, withEnabledToken } from 'stories/decorators';

import WithdrawFromVestingVaultModal, { WithdrawFromVestingVaultModalProps } from '.';

export default {
  title: 'Pages/Vault/modals/WithdrawFromVestingVaultModal',
  component: WithdrawFromVestingVaultModal,
  decorators: [withCenterStory({ width: 600 })],
} as ComponentMeta<typeof WithdrawFromVestingVaultModal>;

const Template: Story<WithdrawFromVestingVaultModalProps> = args => (
  <WithdrawFromVestingVaultModal {...args} />
);

const authContext = {
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  account: {
    address: fakeAddress,
  },
};

export const Default = Template.bind({});
Default.args = {
  handleClose: noop,
  stakedTokenId: VBEP_TOKENS.xvs.id,
};
Default.decorators = [
  withAuthContext(authContext),
  withEnabledToken({
    token: VBEP_TOKENS.xvs,
    accountAddress: fakeAddress,
    spenderAddress: VBEP_TOKENS.xvs.address,
  }),
];
