import { genData } from '../data';

export class Store {
  constructor(name) {
    const localStorage = window.localStorage;

    this.getLocalStorage = () => JSON.parse(localStorage.getItem(name) || '[]');

    this.setLocalStorage = (item) =>
      localStorage.setItem(name, JSON.stringify(item));
    /*
    const data = genData('2015-00-01', 366 * 5);
    this.setLocalStorage(data);
*/
    this.wallet;
    this.rate;
    this.interval;
  }

  init() {
    const items = this.getLocalStorage();

    this.wallet = items.wallet;
    this.rate = items.rate;
    this.interval = items.interval;
  }

  updateInterval(interval) {
    this.interval = interval;
    this.setLocalStorage({ wallet: this.wallet, rate: this.rate, interval });
  }
}
