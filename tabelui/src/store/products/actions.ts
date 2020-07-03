import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppType } from '../';

import {
  ProductsType,
  SetProducts,
  SET_PRODUCTS,
  SelectProducts,
  SELECT_PRODUCTS,
  DeleteProducts,
  DELETE_PRODUCTS,
  ChangeRemove,
  CHANGE_REMOVE,
} from './types';

import { changeLoad } from '../load/actions';
import { changeWindow } from '../window/actions';

import {
  getProducts,
  deleteProducts as reqDeleteProducts,
} from '../../request';

export function setProducts(products: ProductsType): SetProducts {
  return { type: SET_PRODUCTS, products };
}

export function deleteProducts(id: number[]): DeleteProducts {
  return { type: DELETE_PRODUCTS, id };
}

export function selectProducts(id: number[]): SelectProducts {
  return { type: SELECT_PRODUCTS, id };
}

export function changeRemove(id: number): ChangeRemove {
  return { type: CHANGE_REMOVE, id };
}

export const fetchGetProducts = (): ThunkAction<
  void,
  AppType,
  null,
  Action
> => (dispatch) => {
  dispatch(changeLoad());
  return getProducts()
    .then((result: ProductsType) => {
      dispatch(
        setProducts(
          result.map((res) => {
            return { ...res, selected: true, remove: false };
          })
        )
      );
      dispatch(changeLoad());
    })
    .catch((error) => {
      dispatch(
        changeWindow({
          title: 'Error',
          text: error.error,
          actions: [
            {
              answer: 'Try again',
              method: () => dispatch(fetchGetProducts()),
            },
          ],
        })
      );
      dispatch(changeLoad());
    });
};

export const fetchDeleteProducts = (
  id: number[]
): ThunkAction<void, AppType, null, Action> => (dispatch) => {
  dispatch(changeLoad());
  return reqDeleteProducts().then((result: { message: string }) => {});
};
