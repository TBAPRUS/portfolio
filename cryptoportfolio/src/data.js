import { $round } from './helper';

/**
 *
 * @param {string} start 2020-01-01
 * @param {number} count
 *
 */
const random = (num, pow) => $round(Math.random() * num, pow);

export const genData = (start, count) => {
  let data = {
    wallet: {
      BTC: { name: 'Bitcoin', count: random(1, 5) },
      ETH: { name: 'Ethereum', count: random(10, 4) },
      XRF: { name: 'Ripple', count: random(100, 3) },
      MNR: { name: 'MeNeverRip', count: random(10000, 1) },
    },
    rate: { BTC: [], ETH: [], XRF: [], MNR: [] },
    interval: [1, 7, 30, 365][random(3, 0)],
  };

  if (count < 366 * 5) throw new Error('Count min 366');

  start = start.split('-');
  let date = new Date(start[0], start[1], start[2]);

  for (let i = 0; i < count; i++) {
    date.setDate(date.getDate() + 1);
    var dmy =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    data.rate.BTC.push({ date: dmy, cost: random(10000, 5) });
    data.rate.ETH.push({ date: dmy, cost: random(1000, 5) });
    data.rate.XRF.push({ date: dmy, cost: random(100, 5) });
    data.rate.MNR.push({ date: dmy, cost: random(10, 5) });
  }

  return data;
};
