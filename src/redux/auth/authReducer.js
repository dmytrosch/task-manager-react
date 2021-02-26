import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signupSuccess,
  signupError,
  loginSuccess,
  logoutSuccess,
  logoutError,
  loginError,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
  resetPassSuccess,
  resetPassError,
  sendEmailSuccess,
  sendEmailError,
} from "./authActions";

const user = createReducer(
  {},
  {
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => ({}),
    [logoutError]: () => ({}),
    [gettingCurrentUserSuccess]: (state, { payload }) => ({
      ...state,
      email: payload.email,
    }),
  }
);
const token = createReducer(null, {
  [signupSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [logoutError]: () => null,
  [gettingCurrentUserError]: () => null,
});
const error = createReducer(null, {
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => null,
  [signupError]: (_, { payload }) => payload,
  [signupSuccess]: () => null,
  [sendEmailError]: (_, { payload }) => payload,
  [sendEmailSuccess]: () => null,
  [resetPassError]: (_, { payload }) => payload,
  [resetPassSuccess]: () => null,
});

// const resetPassword = createReducer(null, {
//   [resetPassSuccess]: () => true,
//   [resetPassError]: () => false,
// });

// const sendEmailAuth = createReducer(null, {
//   [sendEmailSuccess]: () => true,
//   [sendEmailError]: () => false,
// });

export default combineReducers({
  user,
  token,
  error,
  // resetPassword,
  // sendEmailAuth,
});
