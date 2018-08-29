/* ACTION TYPES */
export const SET_LOGIN_SOCIALS = 'SET_LOGIN_SOCIALS';

/* REDUCER */

const initState = {
  items: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_LOGIN_SOCIALS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
}

/* ACTION CREATORS */

export function setLoginSocials(items) {
  return {
    type: SET_LOGIN_SOCIALS,
    items,
  };
}
