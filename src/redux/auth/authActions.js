import { createAction } from "@reduxjs/toolkit";

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const signupRequest = createAction("auth/signupRequest");
const signupSuccess = createAction("auth/signupSuccess");
const signupError = createAction("auth/signupError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");

const gettingCurrentUserRequest = createAction("user/gettingCurentUserRequest");
const gettingCurrentUserSuccess = createAction("user/gettingCurentUserSuccess");
const gettingCurrentUserError = createAction("user/gettingCurentUserError");
const resetPassRequest = createAction("auth/resetPassRequest");
const resetPassSuccess = createAction("auth/resetPassSuccess");
const resetPassError = createAction("auth/resetPassError");

export {
  signupRequest,
  signupSuccess,
  signupError,
  logInRequest,
  logInSuccess,
  logInError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  gettingCurrentUserRequest,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
  resetPassRequest,
  resetPassSuccess,
  resetPassError,
};
