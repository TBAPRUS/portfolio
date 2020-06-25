import { $round, $calc } from '../helper';

export class GraphTemplate {
  graphShow(wallet, rate, interval) {
    let result = '';
    let balanceNow = 0;
    let balanceAgo = 0;
    for (const value in wallet) {
      balanceNow +=
        rate[value][rate[value].length - 1].cost * wallet[value].count;
      balanceAgo +=
        rate[value][rate[value].length - interval - 1].cost *
        wallet[value].count;
    }
    const difference = balanceAgo - balanceNow;

    let intervals = ``;

    const time = (interval) =>
      interval === 1
        ? '1d'
        : interval === 7
        ? '1w'
        : interval === 30
        ? '1m'
        : '1y';

    for (const el of ['1d', '1w', '1m', '1y']) {
      intervals += `<a ${
        time(interval) === el ? 'class="active"' : ''
      } href='#'>${el}</a>`;
    }
    result += `
      <h3>Balance</h3>
        <p>$ ${$round(balanceNow, 2)}</p>
        <p  class=${difference <= 0 ? 'increase' : 'decrease'}>${
      difference <= 0 ? '+' : '-'
    }$ ${$round(Math.abs(difference), 2)} (${$round(
      Math.abs(difference) / (balanceAgo / 100),
      2
    )}%)</p>
        <p>In USD</p>
        <div id='interval'>
          ${intervals}
        </div>`;

    return result;
  }

  graphChart(wallet, rate, interval, chart) {
    const width = chart.clientWidth;
    const height = chart.clientHeight;

    let array = [];
    for (const value in wallet) {
      array.push($calc(value, wallet, rate, interval));
    }

    array.sort(({ percent: a }, { percent: b }) => b - a);

    console.log(array);

    return `
    <div id='scale'>
      <p>+${$round(array[0].percent, 0)}%</p>
      <p>+${$round(array[0].percent / 2, 0)}%</p>
      <p>0%</p>
      <p>${$round(array[array.length - 1].percent / 2, 0)}%</p>
      <p>${$round(array[array.length - 1].percent, 0)}%</p>
    </div>`;
  }
}
