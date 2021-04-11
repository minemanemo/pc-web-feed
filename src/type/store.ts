import { Action } from 'redux-actions';

import { FeedData } from './feed';
import { Filter } from './localStorage';

export interface Store {
  feeds: Feeds;
}

export interface Feeds {
  lastIndex: number;
  items: FeedData[];
  scrab: Filter;
  loading: boolean;
}

export type SetScrabAction = Action<{
  id: number;
  value: boolean;
  callback?: () => void;
}>;
