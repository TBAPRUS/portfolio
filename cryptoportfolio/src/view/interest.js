import { $qs } from '../helper';

import { InterestTemplate } from '../template/interest';

export class InterestView {
  constructor() {
    this.template = new InterestTemplate();

    this.$interest = $qs('#interitems');
  }

  showInterest({ wallet, rate, interval }) {
    this.$interest.innerHTML = this.template.interestList(
      wallet,
      rate,
      interval
    );
  }
}
