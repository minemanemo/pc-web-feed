import React from 'react';
import styled from 'styled-components';

import { BasicProfile } from '@components/Icon';

interface ProfileProps {
  name: string;
  url: string;
}

const Profile: React.FC<ProfileProps> = ({
  name = '',
  url = '',
}: ProfileProps) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <DefaultProfile>
          <BasicProfile />
        </DefaultProfile>
        <Image alt="" src={url} />
      </ProfileWrapper>
      <Label>{name}</Label>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 10px;
  }
`;

const Label = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.basicFontSize};
  color: ${({ theme }) => theme.mainFontColor};
`;

const ProfileWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;
`;

const DefaultProfile = styled.div`
  position: absolute;
`;

const Image = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
  min-height: 100%;
`;
