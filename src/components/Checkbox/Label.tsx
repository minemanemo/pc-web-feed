import React, { useCallback } from 'react';
import styled from 'styled-components';

import CheckBox from './Checkbox';

interface LabelCheckBoxProps {
  check: boolean;
  label: string;
  onClick?: (value: boolean) => void;
}

const LabelCheckBox: React.FC<LabelCheckBoxProps> = ({
  check = false,
  label = '',
  onClick = (value: boolean) => console.log(value),
}: LabelCheckBoxProps) => {
  const handleClick = useCallback(() => {
    onClick(!check);
  }, [check, onClick]);

  return (
    <Wrapper>
      <CheckBox check={check} onClick={onClick} />
      <Label onClick={handleClick}>{label}</Label>
    </Wrapper>
  );
};

export default LabelCheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 6px;
  }
`;

const Label = styled.span`
  cursor: pointer;
`;
