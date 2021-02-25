import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signupSuccess,
  loginSuccess,
  logoutSuccess,
  logoutError,
  loginError,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
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
});
export default combineReducers({
  user,
  token,
  error,
});
