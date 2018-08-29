import { SocialService } from '../services';
import { socialStore }  from '../redux';

export default class TrackOffController {
  constructor() {
    this.socialService = new SocialService();
    this.socialStore = socialStore;
  }

  init() {
    const socials = this.socialService.getSocials();

    this.socialStore.subscribe(() => {
        document.body.innerHTML = this.socialStore.getState();
      }
    );


  }

};
