export class WalletController {
  constructor(store, view) {
    this.store = store;
    this.view = view;

    this.view.showWallets = view.showWallets.bind(this.view);
  }

  render() {
    const { wallet, rate, interval } = this.store;
    this.view.showWallets({ wallet, rate, interval });
  }
}
