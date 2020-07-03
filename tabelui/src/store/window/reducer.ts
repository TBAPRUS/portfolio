import {
  WindowType,
  WindowActionType,
  CHANGE_WINDOW,
  RESET_WINDOW,
} from './types';

const initState: WindowType = {
  title: '',
  text: '',
  actions: [],
};

export const window = (
  state = initState,
  action: WindowActionType
): WindowType => {
  switch (action.type) {
    case CHANGE_WINDOW:
      return action.window;
    case RESET_WINDOW:
      return initState;
    default:
      return state;
  }
};
