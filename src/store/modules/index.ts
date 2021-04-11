import { combineReducers } from 'redux';
import { Store } from '@type/store';
import feeds from './feeds';

const rootReducer = combineReducers<Store>({
  feeds,
});

export default rootReducer;
