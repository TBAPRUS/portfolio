import {
  WindowType,
  ChangeWindow,
  CHANGE_WINDOW,
  ResetWindow,
  RESET_WINDOW,
} from './types';

export function changeWindow(window: WindowType): ChangeWindow {
  return {
    type: CHANGE_WINDOW,
    window,
  };
}

export function resetWindow(): ResetWindow {
  return {
    type: RESET_WINDOW,
  };
}
