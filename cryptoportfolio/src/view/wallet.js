import { $qs } from '../helper';

import { WalletTemplate } from '../template/wallet';

import { WalletItems } from '../types';

export class WalletView {
  /**
   * @param {WalletTemplate} template
   */
  constructor() {
    this.template = new WalletTemplate();

    this.$wallets = $qs('#wallets');
  }

  /**
   * @param {WalletItems} wallets
   */
  showWallets({ wallet, rate, interval }) {
    this.$wallets.innerHTML = this.template.walletList(wallet, rate, interval);
  }
}
