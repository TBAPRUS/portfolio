export class GraphController {
  constructor(store, view, relayout) {
    this.store = store;
    this.view = view;

    this.relayout = relayout;

    this.view.showBalance = view.showBalance.bind(this.view);
    this.view.showChart = view.showChart.bind(this.view);
    view.bindChangeInterval(this.changeInterval.bind(this));
  }

  render() {
    const { wallet, rate, interval } = this.store;
    this.view.showBalance({ wallet, rate, interval });
    this.view.resetChart();
    this.view.showChart({ wallet, rate, interval });
  }

  changeInterval(value) {
    this.store.updateInterval(
      value === '1d' ? 1 : value === '1w' ? 7 : value === '1m' ? 30 : 365
    );
    this.relayout();
  }
}
