import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";

import { SHOW_LOGIN, SHOW_SIGNUP } from "../types/index";

const GlobalState = (props) => {
  const initialState = {
    modalLogin: false,
    modalSignup: false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // functions
  const showLoginForm = (show) => {
    dispatch({
      type: SHOW_LOGIN,
      show,
    });
  };

  const showSignupForm = (show) => {
    dispatch({
      type: SHOW_SIGNUP,
      show,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        modalLogin: state.modalLogin,
        modalSignup: state.modalSignup,
        showLoginForm,
        showSignupForm
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
