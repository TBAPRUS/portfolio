import {
  ChangeSort,
  CHANGE_SORT,
  ChangePerpage,
  CHANGE_PERPAGE,
  ChangePage,
  CHANGE_PAGE,
  ChangeColumns,
  CHANGE_COLUMNS,
  ChangeList,
  CHANGE_LIST,
} from './types';

export function changeSort(sort: number): ChangeSort {
  return { type: CHANGE_SORT, sort };
}

export function changePerpage(perpage: number): ChangePerpage {
  return { type: CHANGE_PERPAGE, perpage };
}

export function changePage(page: number): ChangePage {
  return { type: CHANGE_PAGE, page };
}

export function changeColumns(columns: string[]): ChangeColumns {
  return { type: CHANGE_COLUMNS, columns };
}

export function changeList(list: boolean): ChangeList {
  return { type: CHANGE_LIST, list };
}
