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
     this.scanStore.subscribe(() => {
        this.scan = this.scanStore.getState();
        if (this.scan.status === 'running') {
          this.startScanView();
        }
      }
    );
  }

  registEvents() {
    const startScanBtn = document.getElementById('js-track-off-start-try');
    startScanBtn.addEventListener('click', (e)=> {
      this.scanService.startScan();
    });
  }

  startScanView() {
    this.showProgressBar();
  }

  async showProgressBar() {
    const progressBarTemplate = `
      <h1 class="to-jumbotron__title margin-40-b">Scanning the tracks you leave on the Internet</h1>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="progress margin-30-b">
            <div id="js-track-off-progress" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="to-jumbotron__p" id="js-track-off-progress-text">${ this.scan.status }</p>
        </div>
      </div>
    `;
    this.changeScanView(progressBarTemplate);
    this.progressAnimation();
  }

  async progressAnimation() {
    const trackOffProgressElement = document.getElementById('js-track-off-progress');
    const trackOffProgressTextElement = document.getElementById('js-track-off-progress-text');
    let dataSize = 11900;
    let width = 0;

    const delay = (interval) => {
        return new Promise((resolve) => {
            setTimeout(resolve, interval);
        });
    };

    const progress = async () => {
      if (width < 100) {
        await delay(50);
        width++;
        trackOffProgressElement.style.width = width + '%';
        trackOffProgressTextElement.innerHTML = `
          Scanning ${ Math.floor(dataSize * (width/100)) } KB of ${ dataSize } KB of tracked data (${ width }%)
        `;
        progress();
      } else {
        this.showScanData();
      }
    }

    progress();

  }

  showScanData() {
    this.changeScanView('did');
  }

  changeScanView(html) {
    const trackOffEntryElement = document.getElementById('js-track-off-entry');
    trackOffEntryElement.innerHTML = html;
  }

};

