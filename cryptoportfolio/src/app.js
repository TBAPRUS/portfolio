import { $on } from './helper';

import { Store } from './store';

import { View } from './view';

import { Controller } from './controller';

$on(window, 'load', () => {
  const store = new Store('cryptoportfolio');

  const view = new View();

  const controller = new Controller(store, view);

  controller.init();
});
