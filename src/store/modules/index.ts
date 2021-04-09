import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@libs/history';
import { Store } from '@type/store';

const rootReducer = combineReducers<Store>({
  router: connectRouter(history),
});

export default rootReducer;
