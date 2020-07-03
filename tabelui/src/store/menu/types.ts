export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_PERPAGE = 'CHANGE_PERPAGE';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_COLUMNS = 'CHANGE_COLUMNS';
export const CHANGE_LIST = 'CHANGE_LIST';

export type MenuType = {
  sort: number;
  perpage: number;
  page: number;
  columns: string[];
  list: boolean;
};

export interface ChangeSort {
  type: typeof CHANGE_SORT;
  sort: number;
}

export interface ChangePerpage {
  type: typeof CHANGE_PERPAGE;
  perpage: number;
}

export interface ChangePage {
  type: typeof CHANGE_PAGE;
  page: number;
}

export interface ChangeColumns {
  type: typeof CHANGE_COLUMNS;
  columns: string[];
}

export interface ChangeList {
  type: typeof CHANGE_LIST;
  list: boolean;
}

export type MenuActionType =
  | ChangeSort
  | ChangePerpage
  | ChangePage
  | ChangeColumns
  | ChangeList;
