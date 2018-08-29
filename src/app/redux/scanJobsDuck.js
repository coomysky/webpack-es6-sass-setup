/* ACTION TYPES */
export const SET_LOGIN_SOCIALS = 'SET_LOGIN_SOCIALS';
export const SET_BROWSER_INFO = 'SET_BROWSER_INFO';

/* REDUCER */

const initState = {
  socials: [],
  status: 'init',
  browser: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
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
