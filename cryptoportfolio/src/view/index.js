import { WalletView } from './wallet';
import { InterestView } from './interest';
import { MostView } from './most';
import { GraphView } from './graph';

export class View {
  constructor() {
    this.wallet = new WalletView();
    this.interest = new InterestView();
    this.most = new MostView();
    this.graph = new GraphView();
  }
}
