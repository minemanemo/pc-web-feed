import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import useLoading from '@components/Global/useLoading';
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
  const loading = useLoading();

  const { feeds } = useSelector((store: Store) => store, shallowEqual);

  const handleScrollDown = () => dispatch(fetchFeeds());
  const handleScrab = (id: number, value: boolean) => {
    loading.open();
    dispatch(setScrab({ id, value, callback: () => loading.close() }));
  };

  useEffect(() => {
    if (feeds.loading) {
      loading.open();
    } else {
      loading.close();
    }
  }, [feeds.loading]);

  useEffect(() => {
    handleScrollDown();
    dispatch(loadScrab());

    return () => {
      dispatch(clearFeeds());
    };
  }, []);

  return (
    <View
      loading={feeds.loading}
      feeds={feeds.items}
      scrab={feeds.scrab}
      onScrollDown={handleScrollDown}
      onClickScrab={handleScrab}
    />
  );
};

export default Feed;
