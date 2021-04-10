import { put, select, takeEvery } from 'redux-saga/effects';

import {
  FETCH_FEEDS,
  appendFeeds,
  nextIndex,
  endFeed,
} from '@store/modules/feeds';

import { getNextFeeds } from '@libs/api';
import { FeedsResponse } from '@type/api';
import { Store } from '@type/store';

function* fetchFeeds() {
  const index: number = yield select((store: Store) => store.feeds.lastIndex);

  if (index < 1) return;

  try {
    const { data: items }: FeedsResponse = yield getNextFeeds(index);

    if (items.length <= 0) throw new Error('data error');

    yield put(appendFeeds({ items }));
    yield put(nextIndex());
  } catch (e) {
    yield put(endFeed());
  }
}

export default function* guide() {
  yield takeEvery(FETCH_FEEDS, fetchFeeds);
}
