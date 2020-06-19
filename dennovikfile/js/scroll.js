(function () {
  const header = document.querySelector('header');

  const shortbio = document.getElementById('shortbio');
  const aboutme = document.getElementById('aboutme');
  const skills = document.getElementById('skills');
  const portfolio = document.getElementById('portfolio');
  const contacts = document.getElementById('contacts');

  const links = document.querySelectorAll('ul li a');

  const totop = document.getElementById('totop');
  !totop.style.display ? (totop.style.display = 'none') : null;
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > header.offsetHeight * 2) {
      if (totop.style.display === 'none') {
        totop.classList.replace('false', 'true');
        totop.style.display = 'block';
      }
    } else {
      if (totop.className !== 'false') {
        totop.classList.replace('true', 'false');
        setTimeout(() => {
          totop.style.display = 'none';
        }, 500);
      }
    }
    const override = ({ y, height }) => y + height > 5;
    links.forEach((link) => (link.className = ''));
    if (override(shortbio.getBoundingClientRect())) {
      links[0].className = 'active';
    } else if (override(aboutme.getBoundingClientRect())) {
      links[1].className = 'active';
    } else if (override(skills.getBoundingClientRect())) {
      links[2].className = 'active';
    } else if (override(portfolio.getBoundingClientRect())) {
      links[3].className = 'active';
    } else if (override(contacts.getBoundingClientRect())) {
      links[4].className = 'active';
    }
  });
})();
