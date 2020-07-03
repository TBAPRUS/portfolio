import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { products } from './products/reducer';
import { menu } from './menu/reducer';
import { load } from './load/reducer';
import { error } from './error/reducer';
import { window } from './window/reducer';

const rootReducer = combineReducers({ menu, products, load, error, window });

export type AppType = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger)
  );

  return store;
};
