import { $qs, $qsa, $on } from './helpers';

export default class Scroll {
  constructor() {
    this.header = $qs('header');

    this.shortbio = $qs('#shortbio');
    this.aboutme = $qs('#aboutme');
    this.skills = $qs('#skills');
    this.portfolio = $qs('#portfolio');
    this.contacts = $qs('#contacts');

    this.links = $qsa('ul li a');

    this.totop = $qs('#totop');
    !this.totop.style.display ? (this.totop.style.display = 'none') : null;

    this.handleScroll = this.handleScroll.bind(this);
    $on(window, 'scroll', this.handleScroll);
  }

  override({ y, height }) {
    return y + height > 5;
  }

  totopShowHide() {
    if (pageYOffset > this.header.offsetHeight * 2) {
      if (this.totop.style.display === 'none') {
        this.totop.classList.replace('false', 'true');
        this.totop.style.display = 'block';
      }
    } else {
      if (this.totop.className !== 'false') {
        this.totop.classList.replace('true', 'false');
        setTimeout(() => {
          this.totop.style.display = 'none';
        }, 500);
      }
    }
  }

  disableAllLink() {
    this.links.forEach((link) => (link.className = ''));
  }

  activeLink() {
    if (this.override(this.shortbio.getBoundingClientRect())) {
      this.links[0].className = 'active';
    } else if (this.override(this.aboutme.getBoundingClientRect())) {
      this.links[1].className = 'active';
    } else if (this.override(this.skills.getBoundingClientRect())) {
      this.links[2].className = 'active';
    } else if (this.override(this.portfolio.getBoundingClientRect())) {
      this.links[3].className = 'active';
    } else if (this.override(this.contacts.getBoundingClientRect())) {
      this.links[4].className = 'active';
    }
  }

  handleScroll() {
    this.totopShowHide();
    this.disableAllLink();
    this.activeLink();
  }
}
