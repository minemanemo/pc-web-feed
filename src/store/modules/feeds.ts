import { handleActions, createAction } from 'redux-actions';
import { Feeds } from '@type/store';

// Action Type
export const FETCH_FEEDS = 'feeds/FETCH_FEEDS';
export const APPEND_FEEDS = 'feeds/APPEND_FEED';
export const NEXT_INDEX = 'feeds/NEXT_INDEX';
export const END_FEED = 'feeds/END_FEED';
export const CLEAR_FEEDS = 'feeds/CLEAR_FEEDS';

// Action Creator function
export const fetchFeeds = createAction(FETCH_FEEDS);
export const appendFeeds = createAction(APPEND_FEEDS);
export const nextIndex = createAction(NEXT_INDEX);
export const endFeed = createAction(END_FEED);
export const clearFeeds = createAction(CLEAR_FEEDS);

// init state
const initialState: Feeds = {
  lastIndex: 1,
  items: [],
};

const feeds = handleActions<Feeds>(
  {
    [APPEND_FEEDS]: (state, action) => ({
      ...state,
      items: [...state.items, ...action.payload.items],
    }),
    [NEXT_INDEX]: (state) => ({ ...state, lastIndex: state.lastIndex + 1 }),
    [END_FEED]: (state) => ({ ...state, lastIndex: 0 }),
    [CLEAR_FEEDS]: () => initialState,
  },
  initialState,
);

export default feeds;
