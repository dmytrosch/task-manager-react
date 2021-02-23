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
  gettingCurrentUserRequest,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
} from "./authActions";
import {
  createUser as createUserAPI,
  loginUser as loginUserAPI,
  logoutUser as logoutUserAPI,
  getCurrentUser as getCurrentUserAPI,
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
  logoutUserAPI()
    .then(() => dispatch(logoutSuccess()))
    .catch(() => dispatch(logoutError()))
    .finally(() => token.unset());
};

export const signup = (email, password) => (dispatch) => {
  dispatch(signupRequest());
  const credentials = {
    email,
    password: password.trim(),
  };
  createUserAPI(credentials)
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

export const login = (email, password) => (dispatch) => {
  dispatch(logInRequest());
  const credentials = {
    email,
    password: password.trim(),
  };
  loginUserAPI(credentials)
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

export const getCurrentUser = () => (dispatch, getState) => {
  const persistedToken = getState().app.auth.token;
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(gettingCurrentUserRequest());
  getCurrentUserAPI()
    .then((response) => {
      dispatch(gettingCurrentUserSuccess(response.data));
    })
    .catch((error) => dispatch(gettingCurrentUserError(error)));
};
