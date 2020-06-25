export class InterestController {
  constructor(store, view) {
    this.store = store;
    this.view = view;

    this.view.showInterest = view.showInterest.bind(this.view);
  }

  render() {
    const { wallet, rate, interval } = this.store;
    this.view.showInterest({ wallet, rate, interval });
  }
}
