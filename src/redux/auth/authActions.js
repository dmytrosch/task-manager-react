import { createAction } from "@reduxjs/toolkit";

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const signUpRequest = createAction("auth/signUpRequest");
const signUpSuccess = createAction("auth/signUpSuccess");
const signUpError = createAction("auth/signUpError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logoutRequest,
  logoutSuccess,
  logoutError,
};
