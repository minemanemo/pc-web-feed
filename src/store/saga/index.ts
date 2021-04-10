import { all } from 'redux-saga/effects';

import feeds from './feeds';

function* rootSaga() {
  yield all([feeds()]);
}

export default rootSaga;
