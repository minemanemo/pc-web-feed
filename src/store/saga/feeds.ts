import { put, select, takeEvery } from 'redux-saga/effects';

import {
  FETCH_FEEDS,
  LOAD_SCRAB,
  SET_SCRAB,
  appendFeeds,
  nextIndex,
  endFeed,
  updateScrab,
  setLoading,
} from '@store/modules/feeds';

import { getNextFeeds } from '@libs/api';
import { getFilter, setFilter } from '@libs/localStorage';
import { FeedsResponse } from '@type/api';
import { SetScrabAction, Store } from '@type/store';
import { Filter } from '@type/localStorage';

function* fetchFeeds() {
  const { lastIndex: index, loading } = yield select(
    (store: Store) => store.feeds,
  );
  if (loading) return;
  if (index < 1) return;

  try {
    yield put(setLoading({ loading: true }));
    const { data: items }: FeedsResponse = yield getNextFeeds(index);

    if (items.length <= 0) throw new Error('data is null');

    yield put(appendFeeds({ items }));
    yield put(nextIndex());
  } catch (e) {
    yield put(endFeed());
  } finally {
    yield put(setLoading({ loading: false }));
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
