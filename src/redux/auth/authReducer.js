import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signUpSuccess,
  logInSuccess,
  logoutSuccess,
  logoutError,
} from "./authActions";

const user = createReducer(
  {},
  {
    [signUpSuccess]: (_, { payload }) => payload.user,
    [logInSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => ({}),
    [logoutError]: () => ({}),
  }
);
const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [logoutError]: () => null,
});
export default combineReducers({
  user,
  token,
});
