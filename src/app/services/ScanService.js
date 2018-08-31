import { scanStore }  from '../redux';
import bowser from 'bowser';
import { setBrowserInfo, startScan, initScan } from '../redux/scanJobsDuck';

export default class ScanService {
  constructor() {
    this.detecIpApi = 'https://ipapi.co/json/';
    this.scanStore = scanStore;
    this.browserInfo = {
      browser: null,
      browser_version: null,
      city: null,
      ip: null,
      isp: null,
      lat: null,
      lon: null,
      region: null,
      os: null,
      status: 'init',
    }
    this.scanStore.dispatch(initScan());
  }

  async startScan() {
    this.browserInfo.status = 'start';
    await this.scanStore.dispatch(startScan());
    await this.checkIp();
    await this.checkBrowser();
    await this.scanStore.dispatch(setBrowserInfo(this.browserInfo));

    return this.browserInfo;
  }

  async checkIp() {
    this.browserInfo.status = 'check ip';
    let response = await fetch(this.detecIpApi, {method: 'get'});
    if (response.ok) {
      let data = await response.json();
      this.browserInfo.ip = data.ip;
      this.browserInfo.isp = data.org;
      this.browserInfo.city = data.city;
      this.browserInfo.region = data.region;
      return data;
    }else {
      throw new Error(response.status);
    }
  }

  async checkBrowser() {
    this.browserInfo.status = 'check browser';

    const browser = bowser.getParser(window.navigator.userAgent);
    const browserData = browser.parse().parsedResult;
    this.browserInfo.browser = browserData.browser.name;
    this.browserInfo.browser_version = browserData.browser.version;
    this.browserInfo.os = browserData.os.name;
    this.browserInfo.status = 'finish';

    return;
  }

};
