export const $qs = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

export const $qsa = (selector, scope) => {
  return (scope || document).querySelectorAll(selector);
};

export const $on = (target, type, callback) => {
  target.addEventListener(type, callback);
};
