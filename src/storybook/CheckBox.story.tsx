import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Checkbox, { LabelCheckBox } from '@components/Checkbox';
import theme from '@styles/theme';

export default {
  title: 'Check Box',
};

export const CheckboxOnly: React.ReactNode = () => {
  const [check, setCheck] = useState(false);

  const handleClick = (value: boolean) => setCheck(value);

  return (
    <ThemeProvider theme={theme}>
      <Checkbox check={check} onClick={handleClick} />
    </ThemeProvider>
  );
};

export const CheckboxButtonWithLabel: React.ReactNode = () => {
  const [check, setCheck] = useState(false);

  const handleClick = (value: boolean) => setCheck(value);

  return (
    <ThemeProvider theme={theme}>
      <LabelCheckBox
        check={check}
        label="스크랩한 것만 보기"
        onClick={handleClick}
      />
    </ThemeProvider>
  );
};
