import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  CheckBoxIcon,
  CheckBoxOutlineIcon,
  ScrabEnableIcon,
  ScrabDisableIcon,
  BasicProfile,
} from '@components/Icon';
import theme from '@styles/theme';

export default {
  title: 'Icons',
};

export const NonProfile: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <BasicProfile />
    </ThemeProvider>
  );
};

export const EnableScrap: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrabEnableIcon />
    </ThemeProvider>
  );
};

export const DisableScrap: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScrabDisableIcon />
    </ThemeProvider>
  );
};

export const CheckBox: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <CheckBoxIcon />
    </ThemeProvider>
  );
};

export const CheckBoxOutLine: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <CheckBoxOutlineIcon />
    </ThemeProvider>
  );
};
