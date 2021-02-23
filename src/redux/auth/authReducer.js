import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signupSuccess,
  logInSuccess,
  logoutSuccess,
  logoutError,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
} from "./authActions";

const user = createReducer(
  {},
  {
    [logInSuccess]: (_, { payload }) => payload.user,
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
  [logInSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [logoutError]: () => null,
  [gettingCurrentUserError]: () => null,
});
export default combineReducers({
  user,
  token,
});
