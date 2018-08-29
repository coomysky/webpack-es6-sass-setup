import { SocialService, ScanService } from '../services';
import { scanStore }  from '../redux';

export default class TrackOffController {
  constructor() {
    this.scanStore = scanStore;
    this.socialService = new SocialService();
    this.scanService = new ScanService();
    this.socialService.getSocials();
  }

  init() {
    const scan = this.scanService.startScan();

    this.scanStore.subscribe(() => {
        // document.body.innerHTML = this.scanStore.getState();
      }
    );
  }

};
