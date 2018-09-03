import { ScanService } from '../services';
import { scanStore }  from '../redux';

export default class TrackOffController {
  constructor() {
    this.scanStore = scanStore;
    this.scanService = new ScanService();
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

  showProgressBar() {
    const progressBarTemplate = `
      <h1 class="to-jumbotron__title margin-40-b">Scanning the tracks you leave on the Internet</h1>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="progress margin-30-b">
            <div id="js-track-off-progress" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 0%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="to-jumbotron__p" id="js-track-off-progress-text"></p>
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
    const scanInfoTemplate = `
      <div class="to-scan margin-50-t">
        <div class="row">
          <div class="col-md-7">
            <h1 class="to-jumbotron__title margin-20-b">
              Our scan shows just some of the <br>
              tracks you're leaving behind
            </h1>
            <p class="to-jumbotron__p">
              Your most intimate details may end up on the Dark Web for sale.<br>
              Don't wait, get protected now.
            </p>

            <div class="row margin-20-b">
              <div class="col-md-6">
                <ul class="list-unstyled to-scan__ul">
                  <li class="to-scan__li">
                    <b>Your location: </b>  ${ this.scan.browser.city }
                  </li>
                  <li class="to-scan__li">
                    <b>IP address: </b>  ${ this.scan.browser.ip }
                  </li>
                  <li class="to-scan__li">
                    <b>ISP: </b>  ${ this.scan.browser.isp }
                  </li>
                  <li class="to-scan__li">
                    <b>Os: </b>  ${ this.scan.browser.os }
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-unstyled to-scan__ul">
                  <li class="to-scan__li">
                    <b>You're logged in to: </b> ${ this.scan.socials.length } accounts
                    <a href="#" id="js-track-off-scan-logined"> <span class="badge badge-light">Show me</span></a>
                  </li>
                  <li class="to-scan__li">
                    <b>Browser: </b>  ${ this.scan.browser.browser } ${ this.scan.browser.browser_version }
                  </li>
                  <li class="to-scan__li">
                    <b>Cookies: </b> ${ this.scan.browser.allow_cookie }
                  </li>
                </ul>
              </div>
            </div>

            <a type="button" class="btn btn-lg to-btn-success to-btn" href="#plan">Redeem Offer</a>
          </div>
          <div class="col-md-5 to-scan__pop" id="js-scan-pop-up">

          </div>
        </div>
      </div>
    `;

    this.changeScanView(scanInfoTemplate);
    this.registScanViewEvents();
    this.resetScanViewClass();
  }

  registScanViewEvents() {
    const showLoggingedBtn = document.getElementById('js-track-off-scan-logined');
    showLoggingedBtn.addEventListener('click', (e)=> {
      this.showLoggined();
    });
  }

  registScanViewCloseEvents() {
    const popCloseBtn = document.getElementById('js-scan-pop-up-close');
    popCloseBtn.addEventListener('click', (e)=> {
      this.hideScanPopView();
    });
  }

  showLoggined() {
    this.changeScanPopView('logined');
    this.registScanViewCloseEvents();
  }

  changeScanPopView(html) {
    const trackOffPopElement = document.getElementById('js-scan-pop-up');
    const closeBtn = '<a class="to-scan__pop-close" id="js-scan-pop-up-close"></a>';
    trackOffPopElement.innerHTML = closeBtn + html;
    trackOffPopElement.classList.add('--open');
  }

  hideScanPopView() {
    const trackOffPopElement = document.getElementById('js-scan-pop-up');
    trackOffPopElement.innerHTML = '';
    trackOffPopElement.classList.remove('--open');
  }

  changeScanView(html) {
    const trackOffEntryElement = document.getElementById('js-track-off-entry');
    trackOffEntryElement.innerHTML = html;
  }

  resetScanViewClass() {
    const trackOffEntryElement = document.getElementById('js-track-off-entry').parentElement;
    trackOffEntryElement.classList.remove('text-center', 'padding-150-tb');
  }

};

