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
  sendEmailToResetPasswordSuccess,
  sendEmailToResetPasswordError,
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
// const error = createReducer(null, {
//   [loginSuccess]: () => null,

//   [signupSuccess]: () => null,
//   [sendEmailToResetPasswordSuccess]: () => null,

//   [resetPassSuccess]: () => null,
// });
const isPasswordChanged = createReducer(null, {
  [resetPassSuccess]: () => true,
});
const login = createReducer(null, {
  [loginError]: (_, { payload }) => payload,
});
const signup = createReducer(null, {
  [signupError]: (_, { payload }) => payload,
});
const resetPasswordRequest = createReducer(null, {
  [sendEmailToResetPasswordError]: (_, { payload }) => payload,
});
const resetPassword = createReducer(null, {
  [resetPassError]: (_, { payload }) => payload,
});


export default combineReducers({
  user,
  token,
  errors: combineReducers({
    login,
    signup,
    resetPasswordRequest,
    resetPassword,
  }),
  isPasswordChanged,
  // resetPassword,
  // sendEmailAuth,
});
