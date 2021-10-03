import { SHOW_LOGIN, SHOW_SIGNUP } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return Object.assign({}, state, {
        modalLogin: action.show,
      });

    case SHOW_SIGNUP:
      return Object.assign({}, state, {
        modalSignup: action.show,
      });

    default:
      return state;
  }
};
