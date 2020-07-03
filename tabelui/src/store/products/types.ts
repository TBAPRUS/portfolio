export const SELECT_PRODUCTS = 'SELECT_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
export const CHANGE_REMOVE = 'CHANGE_REMOVE';

export type ProductsType = {
  id: number;
  product: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: number;
  selected: boolean;
  remove: boolean;
}[];

export interface SelectProducts {
  type: typeof SELECT_PRODUCTS;
  id: number[];
}

export interface SetProducts {
  type: typeof SET_PRODUCTS;
  products: ProductsType;
}

export interface DeleteProducts {
  type: typeof DELETE_PRODUCTS;
  id: number[];
}

export interface ChangeRemove {
  type: typeof CHANGE_REMOVE;
  id: number;
}

export type ProductsActionType =
  | SelectProducts
  | SetProducts
  | DeleteProducts
  | ChangeRemove;
