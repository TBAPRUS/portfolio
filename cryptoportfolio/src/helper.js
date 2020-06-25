export const $qs = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

export const $qsa = (selector, scope) => {
  return (scope || document).querySelectorAll(selector);
};

export const $on = (target, type, callback) => {
  target.addEventListener(type, callback);
};

export const $delegate = (target, selector, type, handler) => {
  const dispatchEvent = (e) => {
    const targetElement = e.target;
    const potentialElements = $qsa(selector, target);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, e);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent);
};

export const $round = (number, pow) =>
  Math.round(number * 10 ** pow) / 10 ** pow;

export const $calc = (
  value,
  wallet,
  rate,
  interval,
  start = rate[value].length - 1
) => {
  const result = {};
  result.value = value;
  result.name = wallet[value].name;
  result.interval = interval;
  result.count = wallet[value].count;
  result.costNow = rate[value][start].cost * result.count;
  result.costAgo = rate[value][start - interval].cost * result.count;
  result.difference = result.costAgo - result.costNow;
  result.percent = -result.difference / (result.costAgo / 100);

  return result;
};
