import { $qs } from './helpers';

export default class Preloader {
  constuctor() {
    this.preloader = $qs('#preloader');
  }

  loaded() {
    this.preloader.className = 'loaded';
    setTimeout(() => {
      this.preloader.style.display = 'none';
    }, 500);
  }
}
