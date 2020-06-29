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
    const potentialElement = $qsa(selector, target);
    console.log(potentialElement);
    let i = potentialElement.length;

    while (i--) {
      if (potentialElement[i] === targetElement) {
        handler.call(targetElement, e);
        break;
      }
    }
  };
  $on(target, type, dispatchEvent);
};
