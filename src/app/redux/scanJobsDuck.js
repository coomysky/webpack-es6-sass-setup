/* ACTION TYPES */
export const INIT_SCAN = 'INIT_SCAN';
export const SET_LOGIN_SOCIALS = 'SET_LOGIN_SOCIALS';
export const SET_BROWSER_INFO = 'SET_BROWSER_INFO';
export const SET_STATUS_START = 'SET_STATUS_START';

/* REDUCER */

const initState = {
  socials: [],
  status: 'init',
  browser: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case INIT_SCAN:
      return initState;
    case SET_STATUS_START:
      return {
        ...state,
        status: action.status,
      };
    case SET_LOGIN_SOCIALS:
      return {
        ...state,
        socials: action.socials,
      };
    case SET_BROWSER_INFO:
      return {
        ...state,
        browser: action.browser,
      };
    default:
      return state;
  }
}

/* ACTION CREATORS */

export function setLoginSocials(socials) {
  return {
    type: SET_LOGIN_SOCIALS,
    socials,
  };
}

export function setBrowserInfo(browser) {
  return {
    type: SET_BROWSER_INFO,
    browser,
  };
}

export function startScan() {
  return {
    type: SET_STATUS_START,
    status: 'running',
  };
}

export function initScan() {
  return {
    type: INIT_SCAN,
  };
}
