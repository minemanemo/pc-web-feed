import produce from 'immer';
import { Filter } from '@type/localStorage';

export const storage = window.localStorage;

const defaultFilter: Filter = {};

export const setFilter = (id: number, check: boolean): void => {
  const filter = storage.getItem('filter');
  const parse: Filter = filter ? JSON.parse(filter) : defaultFilter;
  const next = produce(parse, (draft) => {
    draft[id] = check;
  });
  storage.setItem('filter', JSON.stringify(next));
};

export const getFilter = (): Filter => {
  const filter = storage.getItem('filter');
  const parse = filter ? JSON.parse(filter) : defaultFilter;
  return parse;
};
