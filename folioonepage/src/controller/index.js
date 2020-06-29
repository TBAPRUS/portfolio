import { ImagesController } from './images';

export class Controller {
  constructor(view) {
    this.images = new ImagesController(view.images);
  }

  init() {}
}
