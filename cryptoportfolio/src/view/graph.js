import { $qs, $delegate, $round, $calc } from '../helper';

import { GraphTemplate } from '../template/graph';

export class GraphView {
  constructor() {
    this.template = new GraphTemplate();

    this.$balance = $qs('#balance');
    this.$chart = $qs('#chart');
    this.$scale = $qs('#scale');
    this.$dates = $qs('#dates');
    this.$lines = $qs('#lines');
    this.$blocks = $qs('#blocks');
  }

  showBalance({ wallet, rate, interval }) {
    this.$balance.innerHTML = this.template.graphShow(wallet, rate, interval);
  }

  getDate(date, interval) {
    return new Date(date)
      .toString()
      .split(' ')
      [interval < 30 ? 0 : interval === 30 ? 1 : 3].toLowerCase();
  }

  showChart({ wallet, rate, interval }) {
    let count = 0;

    const rect = this.$chart.getBoundingClientRect();
    const width = this.$chart.clientWidth;
    const height = this.$chart.clientHeight;

    const size = 10;

    let array = [];
    for (const value in wallet) {
      array.push($calc(value, wallet, rate, interval));
      count++;
    }

    let sortproc = [];
    for (const value in wallet) {
      for (let i = 0; i < 5; i++) {
        sortproc.push(
          $calc(
            value,
            wallet,
            rate,
            interval,
            rate[value].length - 1 - interval * (count - i)
          ).percent
        );
      }
    }

    sortproc.sort((a, b) => b - a);

    const procents = [
      $round(sortproc[0], 0),
      $round(sortproc[0] / 2, 0),
      0,
      $round(sortproc[sortproc.length - 1] / 2, 0),
      $round(sortproc[sortproc.length - 1], 0),
    ];

    procents.forEach((percent, index) => {
      const p = document.createElement('p');

      p.innerHTML = `${percent > 0 ? '+' : ''}${percent}%`;
      p.style.top =
        rect.y + (height - size) * (1 / (procents.length - 1)) * index + 'px';
      p.style.left = rect.right + 'px';

      this.$scale.append(p);

      const line = document.createElement('div');

      line.style.top =
        rect.y + height * (1 / (procents.length - 1)) * index + 'px';

      line.style.width = width + 'px';

      this.$lines.append(line);
    });

    let dates = [];

    for (let i = 4; i >= 0; i--) {
      dates.push(
        this.getDate(
          rate.BTC[rate.BTC.length - i * interval - 1].date,
          interval
        )
      );
    }

    const separatorCount = count - 1;

    const separatorWidth = width * 0.05;

    const sectionWidth =
      (width - separatorWidth * separatorCount) / dates.length / count;

    const margin = sectionWidth * count * 0.5;

    dates.forEach((data, index) => {
      const p = document.createElement('p');

      p.innerHTML = data;

      p.style.top = rect.y + height + size + 'px';
      p.style.left =
        rect.x +
        (width - size - margin * 2) * (1 / (dates.length - 1)) * index +
        margin +
        'px';

      this.$dates.append(p);
    });

    for (let i = 0; i < dates.length; i++) {
      const block = document.createElement('div');

      for (let j = 0; j < count; j++) {
        const el = $calc(
          array[j].value,
          wallet,
          rate,
          interval,
          rate[array[j].value].length - 1 - interval * (count - i)
        );
        const section = document.createElement('div');

        section.className = el.value;

        section.style.width = sectionWidth + 'px';

        section.style.left =
          rect.x +
          (width - size - margin * 2) * (1 / (dates.length - 1)) * i +
          margin +
          size / 2 -
          sectionWidth / 2 +
          (sectionWidth * (count - 1)) / 2 -
          j * sectionWidth +
          'px';

        let sectionHeight;

        const percent = $calc(
          el.value,
          wallet,
          rate,
          interval,
          rate[el.value].length - 1 - interval * (count - i)
        ).percent;

        if (el.percent > 0) {
          sectionHeight = ((percent / -sortproc[0]) * height) / 2;
        } else {
          sectionHeight =
            ((percent / sortproc[sortproc.length - 1]) * height) / 2;
        }

        section.style.height = Math.abs(sectionHeight) + 'px';

        section.style.top =
          rect.y + height / 2 + (sectionHeight < 0 ? sectionHeight : 0) + 'px';

        block.append(section);
      }

      this.$blocks.append(block);
    }
  }

  resetChart() {
    this.$scale.innerHTML = '';
    this.$dates.innerHTML = '';
    this.$lines.innerHTML = '';
    this.$blocks.innerHTML = '';
  }

  bindChangeInterval(handler) {
    $delegate(this.$balance, '#interval a', 'click', ({ target }) =>
      handler(target.innerHTML)
    );
  }
}
