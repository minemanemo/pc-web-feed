import React, { useState } from 'react';

import Checkbox, { LabelCheckBox } from '@components/Checkbox';

export default {
  title: 'Check Box',
};

export const CheckboxOnly: React.ReactNode = () => {
  const [check, setCheck] = useState(false);

  const handleClick = (value: boolean) => setCheck(value);

  return (
    <div>
      <Checkbox check={check} onClick={handleClick} />
    </div>
  );
};

export const CheckboxButtonWithLabel: React.ReactNode = () => {
  const [check, setCheck] = useState(false);

  const handleClick = (value: boolean) => setCheck(value);

  return (
    <div>
      <LabelCheckBox
        check={check}
        label="스크랩한 것만 보기"
        onClick={handleClick}
      />
    </div>
  );
};
