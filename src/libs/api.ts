import axios from 'axios';

import { FeedsResponse } from '@type/api';

export const getNextFeeds = (index: number): Promise<FeedsResponse> => {
  const url = `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${index}.json`;
  return axios.get(url);
};
