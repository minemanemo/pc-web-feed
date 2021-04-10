import { Filter } from '@type/localStorage';

export const storage = window.localStorage;

const defaultFilter: Filter = {};

export const setFilter = (id: number, check: boolean): void => {
  const filter = storage.getItem('filter');
  const parse = filter ? JSON.parse(filter) : defaultFilter;
  const json = JSON.stringify({ ...parse, [id]: check });
  storage.setItem('filter', json);
};

export const getFilter = (): Filter => {
  const filter = storage.getItem('filter');
  const parse = filter ? JSON.parse(filter) : defaultFilter;
  return parse;
};
