import { $qs, $on } from '../helper';

import { ImagesTemplate } from '../template/images';

export class ImagesView {
  constructor() {
    this.template = new ImagesTemplate();

    this.images = $qs('#imgs');
    this.hoverbox = $qs('.hoverbox');
    $on(this.images, 'mouseover', ({ target }) => {
      this.mouseoverImage(target);
    });
    $on(this.hoverbox, 'mouseleave', () => {
      this.mouseleaveImage();
    });
  }

  mouseoverImage(target) {
    if (
      target.parentNode.className !== 'hoverbox' &&
      target.parentNode.className !== 'downicon' &&
      target.parentNode.tagName !== 'A'
    ) {
      const rect = target.getBoundingClientRect();
      this.hoverbox.style.top = rect.top + pageYOffset + 'px';
      this.hoverbox.style.left = rect.x + 'px';
      this.hoverbox.style.width = rect.width + 'px';
      this.hoverbox.style.height = rect.height + 'px';
      this.hoverbox.style.display = 'flex';
    }
  }

  mouseleaveImage() {
    this.hoverbox.style.display = 'none';
  }
}
