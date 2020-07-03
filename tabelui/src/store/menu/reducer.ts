import {
  MenuType,
  MenuActionType,
  CHANGE_SORT,
  CHANGE_PERPAGE,
  CHANGE_PAGE,
  CHANGE_COLUMNS,
  CHANGE_LIST,
} from './types';

const initState: MenuType = {
  sort: 0,
  perpage: 10,
  page: 0,
  columns: ['1', '2', '3', '4', '5', '6'],
  list: false,
};

export const menu = (state = initState, action: MenuActionType): MenuType => {
  switch (action.type) {
    case CHANGE_SORT:
      return { ...state, sort: action.sort };
    case CHANGE_PERPAGE:
      return { ...state, perpage: action.perpage };
    case CHANGE_PAGE:
      return { ...state, page: action.page };
    case CHANGE_COLUMNS:
      return { ...state, columns: action.columns };
    case CHANGE_LIST:
      return { ...state, list: action.list };
    default:
      return state;
  }
};
