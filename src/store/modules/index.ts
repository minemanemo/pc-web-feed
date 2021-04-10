import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@libs/history';
import { Store } from '@type/store';

import feeds from './feeds';

const rootReducer = combineReducers<Store>({
  router: connectRouter(history),
  feeds,
});

export default rootReducer;
