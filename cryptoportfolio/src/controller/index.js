import { WalletController } from './wallet';
import { InterestController } from './interest';
import { MostController } from './most';
import { GraphController } from './graph';

export class Controller {
  constructor(store, view) {
    this.wallet = new WalletController(store, view.wallet);
    this.interest = new InterestController(store, view.interest);
    this.most = new MostController(store, view.most);
    this.graph = new GraphController(
      store,
      view.graph,
      this.relayout.bind(this)
    );
    this.store = store;
    this.view = view;
  }

  init() {
    this.store.init();

    this.wallet.render();
    this.interest.render();
    this.most.render();
    this.graph.render();
  }

  relayout() {
    this.wallet.render();
    this.interest.render();
    this.graph.render();
  }
}
