import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './modules';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const getMiddleWare = () => {
  return [sagaMiddleware, logger];
};

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...getMiddleWare())),
);

sagaMiddleware.run(rootSaga);

export default store;
