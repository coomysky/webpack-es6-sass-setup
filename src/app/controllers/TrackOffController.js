import { SocialService } from '../services';
import { scanStore }  from '../redux';

export default class TrackOffController {
  constructor() {
    this.socialService = new SocialService();
    this.scanStore = scanStore;
  }

  init() {
    const socials = this.socialService.getSocials();

    this.scanStore.subscribe(() => {
        document.body.innerHTML = this.scanStore.getState();
      }
    );
  }

};
