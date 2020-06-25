import { $round, $calc } from '../helper';

export class MostTemplate {
  showMost(wallet, rate, interval, id) {
    const list = [];
    for (const value in wallet) {
      list.push($calc(value, wallet, rate, interval));
    }

    list.sort(({ difference: a }, { difference: b }) =>
      id === 'profitable' ? a - b : b - a
    );

    let dropdown = ``;

    const time = (interval) =>
      interval === 1
        ? 'day'
        : interval === 7
        ? 'week'
        : interval === 30
        ? 'month'
        : 'year';

    for (let spacing of ['day', 'week', 'month', 'year']) {
      dropdown += `<a ${
        time === spacing ? 'class="active"' : ''
      } href="#">${spacing}</a>`;
    }

    const result = list[0];

    return `
    <div class="headmost">
      <h3>The most ${id}</h3>
      <p>${time(result.interval)}</p>
      <div class="dropdown">
        <img src="cryptoportfolio/img/arrow.png" alt="arrow" />
        <div class="dropdowncontent">
          ${dropdown}
        </div>
      </div>
    </div>
    <hr />
    <div class="down">
      <div class="walletlogo">
        <img src="cryptoportfolio/img/${result.value}.png" alt="${
      result.value
    }" />
      </div>
      <h3>${result.value} ${$round(result.count, 5)}</h3>
      <div class="low">
        <p>$${$round(result.costNow, 2)}</p>
        <p class=${result.difference < 0 ? 'increase' : 'decrease'}>${
      result.difference < 0 ? '+' : ''
    }${$round(result.percent, 2)}%</p>
      </div>
    </div>`;
  }
}
