import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import View from '@views/Feed';
import { fetchFeeds, clearFeeds } from '@store/modules/feeds';
import { Store } from '@type/store';

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  const { feeds } = useSelector((store: Store) => store, shallowEqual);

  const handleScrollDown = () => dispatch(fetchFeeds());

  useEffect(() => {
    handleScrollDown();
    return () => {
      dispatch(clearFeeds());
    };
  }, []);

  return <View feeds={feeds.items} onScrollDown={handleScrollDown} />;
};

export default Feed;
