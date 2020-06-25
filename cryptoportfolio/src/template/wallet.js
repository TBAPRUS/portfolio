import { $round, $calc } from '../helper';

export class WalletTemplate {
  walletList(wallet, rate, interval) {
    let result = '';
    for (const value in wallet) {
      const res = $calc(value, wallet, rate, interval);

      result += `
      <div class="wallet">
        <div class="walletlogo" data-logotype="${res.value}">
          <img src="cryptoportfolio/img/${res.value}.png" alt="${res.value}" />
        </div>
        <div class="namecount">
          <h3>${res.value}</h3>
          <p>${res.count}</p>
        </div>
        <p class="cost">$${$round(res.costNow, 2)}</p>
        <p class="${res.difference < 0 ? 'increase' : 'decrease'}">${
        res.difference < 0 ? '+' : ''
      }${$round(res.percent, 2)}%</p>
      </div>`;
    }
    result += `
    <div class="wallet">
      <div class="walletlogo">
        <img src="cryptoportfolio/img/plus.png" alt="Plus" />
      </div>
      <h3>Add</h3>
      <p>wallet</p>
    </div>`;
    return result;
  }
}
