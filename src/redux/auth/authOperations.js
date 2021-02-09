import axios from "axios";
import {
  logoutRequest,
  logoutSuccess,
  logoutError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
} from "./authActions";

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  axios
    .delete("/auth/sign-out")
    .then(() => dispatch(logoutSuccess()))
    .catch(() => dispatch(logoutError()))
    .finally(() => token.unset());
};

export const signUp = (credentials) => (dispatch) => {
  dispatch(signUpRequest());
  axios
    .post("/auth/sign-up", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(signUpSuccess(response.data));
    })
    .catch((error) => {
      // обработать ошибки
      dispatch(signUpError(error));
    });
};

export const logIn = (credentials) => (dispatch) => {
  dispatch(logInRequest());
  axios
    .post("/auth/sign-in", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(logInSuccess(response.data));
    })
    .catch((error) => {
      // обработать ошибки
      dispatch(logInError(error));
    });
};
