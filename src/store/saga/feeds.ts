import { put, select, takeEvery } from 'redux-saga/effects';

import {
  FETCH_FEEDS,
  LOAD_SCRAB,
  SET_SCRAB,
  appendFeeds,
  nextIndex,
  endFeed,
  updateScrab,
} from '@store/modules/feeds';

import { getNextFeeds } from '@libs/api';
import { getFilter, setFilter } from '@libs/localStorage';
import { FeedsResponse } from '@type/api';
import { SetScrabAction, Store } from '@type/store';
import { Filter } from '@type/localStorage';

function* fetchFeeds() {
  const index: number = yield select((store: Store) => store.feeds.lastIndex);

  if (index < 1) return;

  try {
    const { data: items }: FeedsResponse = yield getNextFeeds(index);

    if (items.length <= 0) throw new Error('data is null');

    yield put(appendFeeds({ items }));
    yield put(nextIndex());
  } catch (e) {
    yield put(endFeed());
  }
}

function* loadScrab() {
  const filter: Filter = getFilter();
  yield put(updateScrab({ scrab: filter }));
}

function* setScrab(action: SetScrabAction) {
  const { id, value } = action.payload;
  setFilter(id, value);
  yield loadScrab();
}

export default function* guide() {
  yield takeEvery(FETCH_FEEDS, fetchFeeds);
  yield takeEvery(LOAD_SCRAB, loadScrab);
  yield takeEvery(SET_SCRAB, setScrab);
}
