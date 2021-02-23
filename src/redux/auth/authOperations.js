import axios from "axios";
import { pathOr } from "ramda";
import {
  logoutRequest,
  logoutSuccess,
  logoutError,
  signupRequest,
  signupSuccess,
  signupError,
  logInRequest,
  logInSuccess,
  logInError,
  resetPassRequest,
  resetPassSuccess,
  resetPassError,
} from "./authActions";
import {
  createUser,
  loginUser,
  logoutUser,
  resetPassword,
} from "../../utils/taskManagerAPI";

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const errorHandler = (statusCodeError) => {
  let message = "";
  switch (statusCodeError) {
    case 400:
      message = "Помилка данних";
      break;
    case 401:
      message = "Не вірно вказаний логін або пароль";
      break;
    case 409:
      message = "Користувач з цією адресою вже зареєстрований";
      break;
    default:
      message = "Щось пішло не так...";
  }
  return message;
};
export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  logoutUser()
    .then(() => dispatch(logoutSuccess()))
    .catch(() => dispatch(logoutError()))
    .finally(() => token.unset());
};

export const signup = (credentials) => (dispatch) => {
  dispatch(signupRequest());
  createUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(signupSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = errorHandler(
        pathOr("", ["response", "status"], error)
      );
      console.log(errorMessage);
      dispatch(signupError(errorMessage));
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch(logInRequest());
  loginUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(logInSuccess(response.data));
    })
    .catch((error) => {
      const errorMessage = errorHandler(
        pathOr("", ["response", "status"], error)
      );
      console.log(errorMessage);
      dispatch(logInError(error));
    });
};
export const resetPass = (credentials) => (dispatch) => {
  dispatch(resetPassRequest());
  resetPassword(credentials)
    .then(() => dispatch(resetPassSuccess()))
    .catch((err) => {
      const error = errorHandler(pathOr("", ["response", "status"], err));
      dispatch(resetPassError(error));
    });
};
