import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppType } from '../../store';

import { changeWindow } from '../../store/window/actions';

export const Window: React.SFC = () => {
  const window = useSelector((state: AppType) => state.window);
  const dispatch = useDispatch();

  return (
    <div className="window">
      <h2>{window.title}</h2>
      <p>{window.text}</p>
      <div className="actions">
        <button
          key="cancel"
          onClick={() => dispatch(changeWindow({ title: '', text: '' }))}
        >
          Cancel
        </button>
        {window.actions &&
          window.actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                dispatch(changeWindow({ title: '', text: '' }));
                action.method();
              }}
            >
              {action.answer}
            </button>
          ))}
      </div>
    </div>
  );
};
