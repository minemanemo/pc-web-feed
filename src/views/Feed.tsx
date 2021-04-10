import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { LabelCheckBox } from '@components/Checkbox';
import { ContentCard } from '@components/Content';
import { FeedData } from '@type/feed';

interface FeedViewProps {
  feeds: FeedData[];
  onScrollDown: () => void;
}

const FeedView: React.FC<FeedViewProps> = ({
  feeds = [],
  onScrollDown = () => {},
}: FeedViewProps) => {
  const [check, setCheck] = useState(false);

  const handleClick = (value: boolean) => {
    setCheck(value);
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      onScrollDown();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Wrapper>
      <Content>
        <LabelCheckBox
          check={check}
          label="스크랩한 것만 보기"
          onClick={handleClick}
        />
        <CardBoard>
          {feeds.map((feed) => (
            <ContentCard
              key={feed.id}
              nickname={feed.nickname}
              imageUrl={feed.image_url}
              profileImageUrl={feed.profile_image_url}
              scrab={false}
              onClickScrab={(value) => console.log(value)}
            />
          ))}
        </CardBoard>
      </Content>
    </Wrapper>
  );
};

export default FeedView;

const Wrapper = styled.div`
  width: 1256px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 30px 60px 0 60px;

  & > *:first-child {
    margin-bottom: 30px;
  }
`;

const CardBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    margin-bottom: 30px;
  }
`;
