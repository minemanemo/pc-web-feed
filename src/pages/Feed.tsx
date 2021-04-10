import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import View from '@views/Feed';
import {
  fetchFeeds,
  clearFeeds,
  loadScrab,
  setScrab,
} from '@store/modules/feeds';
import { Store } from '@type/store';

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  const { feeds } = useSelector((store: Store) => store, shallowEqual);

  const handleScrollDown = () => dispatch(fetchFeeds());
  const handleScrab = (id: number, value: boolean) => {
    dispatch(setScrab({ id, value }));
  };

  useEffect(() => {
    handleScrollDown();
    dispatch(loadScrab());
    return () => {
      dispatch(clearFeeds());
    };
  }, []);

  return (
    <View
      feeds={feeds.items}
      scrab={feeds.scrab}
      onScrollDown={handleScrollDown}
      onClickScrab={handleScrab}
    />
  );
};

export default Feed;
