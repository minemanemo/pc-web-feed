import React from 'react';

import {
  CheckBoxIcon,
  CheckBoxOutlineIcon,
  ScrabEnableIcon,
  ScrabDisableIcon,
  BasicProfile,
} from '@components/Icon';

export default {
  title: 'Icons',
};

export const NonProfile: React.ReactNode = () => {
  return (
    <div>
      <BasicProfile />
    </div>
  );
};

export const EnableScrap: React.ReactNode = () => {
  return (
    <div>
      <ScrabEnableIcon />
    </div>
  );
};

export const DisableScrap: React.ReactNode = () => {
  return (
    <div>
      <ScrabDisableIcon />
    </div>
  );
};

export const CheckBox: React.ReactNode = () => {
  return (
    <div>
      <CheckBoxIcon />
    </div>
  );
};

export const CheckBoxOutLine: React.ReactNode = () => {
  return (
    <div>
      <CheckBoxOutlineIcon />
    </div>
  );
};
