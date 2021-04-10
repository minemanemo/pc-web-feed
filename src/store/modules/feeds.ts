import { handleActions, createAction } from 'redux-actions';
import { Feeds } from '@type/store';

// Action Type
export const FETCH_FEEDS = 'feeds/FETCH_FEEDS';
export const APPEND_FEEDS = 'feeds/APPEND_FEED';
export const NEXT_INDEX = 'feeds/NEXT_INDEX';
export const END_FEED = 'feeds/END_FEED';
export const CLEAR_FEEDS = 'feeds/CLEAR_FEEDS';
export const SET_SCRAB = 'feeds/SET_SCRAB';
export const UPDATE_SCRAB = 'feeds/UPDATE_SCRAB';
export const LOAD_SCRAB = 'feeds/LOAD_SCRAB';

// Action Creator function
export const fetchFeeds = createAction(FETCH_FEEDS);
export const appendFeeds = createAction(APPEND_FEEDS);
export const nextIndex = createAction(NEXT_INDEX);
export const endFeed = createAction(END_FEED);
export const clearFeeds = createAction(CLEAR_FEEDS);
export const setScrab = createAction(SET_SCRAB);
export const updateScrab = createAction(UPDATE_SCRAB);
export const loadScrab = createAction(LOAD_SCRAB);

// init state
const initialState: Feeds = {
  lastIndex: 1,
  items: [],
  scrab: {},
};

const feeds = handleActions<Feeds>(
  {
    [APPEND_FEEDS]: (state, action) => ({
      ...state,
      items: [...state.items, ...action.payload.items],
    }),
    [NEXT_INDEX]: (state) => ({ ...state, lastIndex: state.lastIndex + 1 }),
    [END_FEED]: (state) => ({ ...state, lastIndex: 0 }),
    [UPDATE_SCRAB]: (state, action) => ({
      ...state,
      scrab: action.payload.scrab,
    }),
    [CLEAR_FEEDS]: () => initialState,
  },
  initialState,
);

export default feeds;
