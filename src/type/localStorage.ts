export type Filter = {
  [key: number]: boolean;
};

export interface LocalStorage {
  filter: Filter;
}
