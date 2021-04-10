import { RouterState } from 'connected-react-router';

import { LocationState } from './history';
import { FeedData } from './feed';

export interface Store {
  router: RouterState<LocationState>;
  feeds: Feeds;
}

export interface Feeds {
  lastIndex: number;
  items: FeedData[];
}
