import { $qs, $delegate } from '../helper';

import { MostTemplate } from '../template/most';

export class MostView {
  constructor() {
    this.template = new MostTemplate();

    this.$most = $qs('#most');
    this.$profitable = $qs('#profitable');
    this.$unprofitable = $qs('#unprofitable');
  }

  showMost({ wallet, rate, interval, id }) {
    this[`$${id}`].innerHTML = this.template.showMost(
      wallet,
      rate,
      interval,
      id
    );
  }

  bindChangeInterval(handler) {
    $delegate(this.$most, 'a', 'click', ({ target }) => {
      return handler(
        target.innerHTML,
        target.parentNode.parentNode.parentNode.parentNode.id
      );
    });
  }
}
