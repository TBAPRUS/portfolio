import { $qs, $on } from './helpers';

export default class Burger {
  constructor() {
    this.burger = $qs('#burger');
    this.close = $qs('#close');
    this.change = $qs('.change');
    this.ulmenu = $qs('nav ul');

    this.handleClickBurger = this.handleClickBurger.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    $on(this.burger, 'click', this.handleClickBurger);
    $on(this.close, 'click', this.handleClickClose);
  }

  setDisplay(array) {
    array.forEach(({ el, val }) => {
      el.style.display = val;
    });
  }

  handleClickBurger() {
    this.setDisplay([
      { el: this.ulmenu, val: 'block' },
      { el: this.burger, val: 'none' },
      { el: this.close, val: 'block' },
      { el: this.change, val: 'block' },
    ]);
    this.ulmenu.className = 'true';
    this.close.className = 'true';
    this.change.classList.toggle('true');
  }

  handleClickClose() {
    this.ulmenu.className = 'false';
    this.close.className = 'false';
    this.change.classList.toggle('true');
    this.change.classList.toggle('false');
    setTimeout(() => {
      this.setDisplay([
        { el: this.ulmenu, val: 'none' },
        { el: this.burger, val: 'block' },
        { el: this.close, val: 'none' },
        { el: this.change, val: 'none' },
      ]);
      this.change.classList.toggle('false');
      this.burger.className = 'true';
    }, 1000);
  }
}
