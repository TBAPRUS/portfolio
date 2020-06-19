(function () {
  window.onload = function () {
    const preloader = document.getElementById('preloader');
    preloader.className = 'loaded';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  };
})();
