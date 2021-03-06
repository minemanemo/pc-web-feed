import React, { useCallback } from 'react';
import styled from 'styled-components';

import { CheckBoxIcon, CheckBoxOutlineIcon } from '@components/Icon';

interface CheckBoxProps {
  check: boolean;
  onClick?: (value: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  check = false,
  onClick = (value: boolean) => console.log(value),
}: CheckBoxProps) => {
  const handleClick = useCallback(() => {
    onClick(!check);
  }, [check, onClick]);

  return (
    <Wrapper onClick={handleClick}>
      {check ? <CheckBoxIcon /> : <CheckBoxOutlineIcon />}
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
