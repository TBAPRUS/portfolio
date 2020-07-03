import { ErrorActionType, CHANGE_ERROR } from './types';

export const error = (state = '', action: ErrorActionType): string => {
  switch (action.type) {
    case CHANGE_ERROR:
      return action.error;
    default:
      return state;
  }
};
