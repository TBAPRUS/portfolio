import { $round, $calc } from '../helper';

export class InterestTemplate {
  interestList(wallet, rate, interval) {
    let result = [];

    for (const value in wallet) {
      const res = $calc(value, wallet, rate, interval);

      const time =
        interval === 1
          ? 'day'
          : interval === 7
          ? 'week'
          : interval === 30
          ? 'month'
          : 'year';

      result.push({
        percent: res.percent,
        string: `<div class="interitem">
                  <div class="walletlogo" data-logotype="${res.value}">
                    <img src="cryptoportfolio/img/${res.value}.png" alt="${
          res.value
        }" />
                  </div>
                  <div class="group1">
                    <p>${res.name}</p>
                    <p>${res.value}</p>
                  </div>
                  <div class="group2">
                    <p>per ${time}</p>
                    <p class="${
                      res.difference < 0 ? 'increase' : 'decrease'
                    }">${res.difference < 0 ? '+' : ''}${$round(
          res.percent,
          2
        )}%</p>
                  </div>
                </div>`,
      });
    }

    result.sort(
      ({ percent: percent1 }, { percent: percent2 }) => percent2 - percent1
    ).length = 3;
    return result.map(({ string }) => string).join('');
  }
}
