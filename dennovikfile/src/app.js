import { $on } from './helpers';

import Preloader from './preloader';
import Scroll from './scroll';
import Language from './language';
import Burger from './burger';

const preloader = new Preloader();
const scroll = new Scroll();
const language = new Language();
const burger = new Burger();

$on(window, 'load', preloader.loaded);
