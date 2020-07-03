export const CHANGE_WINDOW = 'CHANGE_WINDOW';
export const RESET_WINDOW = 'RESET_WINDOW';

export type WindowType = {
  title: string;
  text: string;
  actions?: {
    answer: string;
    method: () => void;
  }[];
};

export interface ChangeWindow {
  type: typeof CHANGE_WINDOW;
  window: WindowType;
}

export interface ResetWindow {
  type: typeof RESET_WINDOW;
}

export type WindowActionType = ChangeWindow | ResetWindow;
