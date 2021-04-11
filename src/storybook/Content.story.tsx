import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import ContentProfile from '@components/Content/Profile';
import ContentImagePanel from '@components/Content/ImagePanel';
import { ContentCard } from '@components/Content';
import theme from '@styles/theme';

export default {
  title: 'Content',
};

export const Profile: React.ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentProfile
        name="Wade Warren"
        url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-"
      />
      <ContentProfile
        name="Jerome Bell"
        url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547729253_.jpeg/640/640"
      />
      <ContentProfile
        name="Darlene Robertson"
        url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/81"
      />
      <ContentProfile
        name="Kristin Watson"
        url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/81"
      />
    </ThemeProvider>
  );
};

export const ImagePanel: React.ReactNode = () => {
  const [scrab, setScrab] = useState(false);

  const handleClickScrab = (value: boolean) => setScrab(value);
  return (
    <ThemeProvider theme={theme}>
      <ContentImagePanel
        url="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640"
        scrab={scrab}
        onClickScrab={handleClickScrab}
      />
    </ThemeProvider>
  );
};

const resource = {
  id: 594037,
  image_url:
    'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640',
  nickname: '사용자 83',
  profile_image_url:
    'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80',
  description:
    '안녕하세요, 버킷플레이스 홈워크 입니다. 안녕하세요, 버킷플레이스 홈워크 입니다. 안녕하세요, 버킷플레이스 홈워크 입니다. 안녕하세요, 버킷플레이스 홈워크 입니다. 안녕하세요, 버킷플레이스 홈워크 입니다.',
};

export const ContentCardExample: React.ReactNode = () => {
  const [scrab, setScrab] = useState(false);

  const handleClickScrab = (value: boolean) => setScrab(value);
  return (
    <ThemeProvider theme={theme}>
      <ContentCard
        nickname={resource.nickname}
        imageUrl={resource.image_url}
        profileImageUrl={resource.profile_image_url}
        scrab={scrab}
        onClickScrab={handleClickScrab}
      />
    </ThemeProvider>
  );
};
