import {
  ProductsType,
  ProductsActionType,
  SET_PRODUCTS,
  SELECT_PRODUCTS,
  DELETE_PRODUCTS,
  CHANGE_REMOVE,
} from './types';

const initState: ProductsType = [];

export const products = (
  state = initState,
  action: ProductsActionType
): ProductsType => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case DELETE_PRODUCTS:
      return state.filter(({ id }) => action.id.indexOf(id) === -1);
    case SELECT_PRODUCTS:
      return state.map((product) =>
        action.id.indexOf(product.id) !== -1
          ? { ...product, selected: !product.selected }
          : product
      );
    case CHANGE_REMOVE:
      return state.map((product) =>
        product.id === action.id
          ? { ...product, remove: !product.remove }
          : product
      );
    default:
      return state;
  }
};
