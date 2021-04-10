import { AxiosResponse } from 'axios';
import { FeedData } from './feed';

export type FeedsResponse = AxiosResponse<FeedData[]>;
