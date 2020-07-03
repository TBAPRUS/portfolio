import { ChangeError, CHANGE_ERROR } from './types';

export function changeError(error: string): ChangeError {
  return { type: CHANGE_ERROR, error };
}
