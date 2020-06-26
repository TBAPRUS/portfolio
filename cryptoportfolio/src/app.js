import { $on } from './helper';

import { Store } from './store';

import { View } from './view';

import { Controller } from './controller';

const store = new Store('cryptoportfolio');

const view = new View();

const controller = new Controller(store, view);

$on(window, 'load', () => controller.init());
