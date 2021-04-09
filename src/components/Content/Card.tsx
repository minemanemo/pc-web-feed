import React from 'react';
import styled from 'styled-components';

import ContentProfile from './Profile';
import ContentImagePanel from './ImagePanel';

interface CardProps {
  imageUrl: string;
  nickname: string;
  profileImageUrl: string;
  scrab: boolean;
  onClickScrab: (value: boolean) => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl = '',
  nickname = '',
  profileImageUrl = '',
  scrab = false,
  onClickScrab = (value) => console.log(value),
}: CardProps) => {
  return (
    <Wrapper>
      <ContentProfile name={nickname} url={profileImageUrl} />
      <ContentImagePanel
        scrab={scrab}
        onClickScrab={onClickScrab}
        url={imageUrl}
      />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 270px;

  & > *:first-child {
    margin-bottom: 10px;
  }
`;
