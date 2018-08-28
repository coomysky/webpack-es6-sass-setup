import { SocialService } from '../services';

export default class TrackOffController {
  constructor() {
    this.socialService = new SocialService();

  }

  init() {
    const socials = this.socialService.getSocials();
    socials.then(socials => {
      const loginSocial = socials.filter(social => social.login);
      document.body.innerHTML = loginSocial.length;
    });
  }

};
