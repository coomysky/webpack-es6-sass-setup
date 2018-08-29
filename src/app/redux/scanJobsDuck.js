/* ACTION TYPES */
export const SET_LOGIN_SOCIALS = 'SET_LOGIN_SOCIALS';

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
