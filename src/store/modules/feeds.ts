import produce from 'immer';
import { handleActions, createAction } from 'redux-actions';
import { Feeds } from '@type/store';

// Action Type
export const SET_LOADING = 'feeds/SET_LOADING';
export const FETCH_FEEDS = 'feeds/FETCH_FEEDS';
export const APPEND_FEEDS = 'feeds/APPEND_FEED';
export const NEXT_INDEX = 'feeds/NEXT_INDEX';
export const END_FEED = 'feeds/END_FEED';
export const CLEAR_FEEDS = 'feeds/CLEAR_FEEDS';
export const SET_SCRAB = 'feeds/SET_SCRAB';
export const UPDATE_SCRAB = 'feeds/UPDATE_SCRAB';
export const LOAD_SCRAB = 'feeds/LOAD_SCRAB';

// Action Creator function
export const setLoading = createAction(SET_LOADING);
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
  loading: false,
};

const feeds = handleActions<Feeds>(
  {
    [SET_LOADING]: (state, action) => {
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    },
    [APPEND_FEEDS]: (state, action) => {
      return produce(state, (draft) => {
        draft.items = [...state.items, ...action.payload.items];
      });
    },
    [NEXT_INDEX]: (state) => {
      return produce(state, (draft) => {
        draft.lastIndex = state.lastIndex + 1;
      });
    },
    [END_FEED]: (state) => {
      return produce(state, (draft) => {
        draft.lastIndex = 0;
      });
    },
    [UPDATE_SCRAB]: (state, action) => {
      return produce(state, (draft) => {
        draft.scrab = action.payload.scrab;
      });
    },
    [CLEAR_FEEDS]: () => initialState,
  },
  initialState,
);

export default feeds;
