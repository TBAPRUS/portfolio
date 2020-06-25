export class MostController {
  constructor(store, view) {
    this.store = store;
    this.view = view;

    this.profittime = 30;
    this.unprofittime = 30;

    this.view.showMost = view.showMost.bind(this.view);
    view.bindChangeInterval(this.changeInterval.bind(this));
  }

  render() {
    const { wallet, rate } = this.store;
    const res = { wallet, rate };

    this.view.showMost({
      ...res,
      interval: this.profittime,
      id: 'profitable',
    });
    this.view.showMost({
      ...res,
      interval: this.unprofittime,
      id: 'unprofitable',
    });
  }

  changeInterval(value, id) {
    const { wallet, rate } = this.store;

    id !== 'profitable' && id !== 'unprofitable'
      ? new Error('Id uncorrect')
      : null;
    this[id] =
      value === 'day' ? 1 : value === 'week' ? 7 : value === 'month' ? 30 : 365;

    const res = {
      wallet,
      rate,
      interval: this[id],
      id,
    };

    this.view.showMost(res);
  }
}
