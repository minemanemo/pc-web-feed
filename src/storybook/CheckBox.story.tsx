import React from 'react';

import Checkbox from '@components/Checkbox';

export default {
  title: 'Check Box',
};

export const CheckboxOnly: React.ReactNode = () => {
  return (
    <div>
      storybook setting
      <div>hello</div>
      <Checkbox />
    </div>
  );
};

export const CheckboxButtonWithLabel: React.ReactNode = () => {
  return (
    <div>
      storybook setting
      <div>hello</div>
    </div>
  );
};
