import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { LabelCheckBox } from '@components/Checkbox';
import { ContentCard } from '@components/Content';
import { FeedData } from '@type/feed';
import { Filter } from '@type/localStorage';

interface FeedViewProps {
  loading: boolean;
  feeds: FeedData[];
  scrab: Filter;
  onScrollDown: () => void;
  onClickScrab: (id: number, scrab: boolean) => void;
}

const FeedView: React.FC<FeedViewProps> = ({
  loading = false,
  feeds = [],
  scrab = {},
  onScrollDown = () => {},
  onClickScrab = (id, value) => console.log(id, value),
}: FeedViewProps) => {
  const [check, setCheck] = useState(false);

  const filterFeeds = useMemo(() => {
    if (!check) return feeds;
    return feeds.filter((feed) => scrab[feed.id]);
  }, [check, feeds, scrab]);

  const handleClick = useCallback((value: boolean) => setCheck(value), [check]);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      onScrollDown();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!check) return;
    if (loading) return;
    if (filterFeeds.length !== _.keys(scrab).length) onScrollDown();
  }, [check, filterFeeds, loading, scrab]);

  return (
    <Wrapper>
      <Content>
        <LabelCheckBox
          check={check}
          label="스크랩한 것만 보기"
          onClick={handleClick}
        />
        <CardBoard>
          {filterFeeds.map((feed) => (
            <ContentCard
              key={feed.id}
              nickname={feed.nickname}
              imageUrl={feed.image_url}
              profileImageUrl={feed.profile_image_url}
              scrab={scrab[feed.id] || false}
              onClickScrab={(value) => onClickScrab(feed.id, value)}
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
  display: grid;
  grid-template-columns: repeat(4, 270px);
  justify-content: space-between;

  & > * {
    margin-bottom: 30px;
  }
`;
