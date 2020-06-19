(function () {
  const burger = document.getElementById('burger');
  const close = document.getElementById('close');
  const change = document.querySelector('.change');
  const ulmenu = document.querySelector('nav ul');
  const setDisplay = (array) => {
    array.forEach(({ el, val }) => {
      el.style.display = val;
    });
  };
  burger.addEventListener('click', () => {
    setDisplay([
      { el: ulmenu, val: 'block' },
      { el: burger, val: 'none' },
      { el: close, val: 'block' },
      { el: change, val: 'block' },
    ]);
    ulmenu.className = 'true';
    close.className = 'true';
    change.classList.toggle('true');
  });
  close.addEventListener('click', () => {
    ulmenu.className = 'false';
    close.className = 'false';
    change.classList.toggle('true');
    change.classList.toggle('false');
    setTimeout(() => {
      setDisplay([
        { el: ulmenu, val: 'none' },
        { el: burger, val: 'block' },
        { el: close, val: 'none' },
        { el: change, val: 'none' },
      ]);
      change.classList.toggle('false');
      burger.className = 'true';
    }, 1000);
  });
})();
