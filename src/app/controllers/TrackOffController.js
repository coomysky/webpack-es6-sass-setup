import { SocialService } from '../services';

export default class TrackOffController {
  constructor() {
    this.socialService = new SocialService();
  }

  init() {
    this.socialService.getSocial();
  }

};
