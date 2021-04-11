import { RouterState } from 'connected-react-router';
import { Action } from 'redux-actions';

import { LocationState } from './history';
import { FeedData } from './feed';
import { Filter } from './localStorage';

export interface Store {
  router: RouterState<LocationState>;
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
