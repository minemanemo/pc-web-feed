import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import history from '@libs/history';

import rootReducer from './modules';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const getMiddleWare = () => {
  return [routerMiddleware, sagaMiddleware];
};

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...getMiddleWare())),
);

sagaMiddleware.run(rootSaga);

export default store;
