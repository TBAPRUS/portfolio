import { $on } from './helper';

import { View } from './view';

import { Controller } from './controller';

const view = new View();

const controller = new Controller(view);

$on(window, 'loaded', () => controller.init());
