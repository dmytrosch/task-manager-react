import axios from "axios";
import { useDispatch } from "react-redux";
import { pathOr } from "ramda";
import {
  logoutRequest,
  logoutSuccess,
  logoutError,
  signupRequest,
  signupSuccess,
  signupError,
  loginRequest,
  loginSuccess,
  loginError,
  gettingCurrentUserRequest,
  gettingCurrentUserSuccess,
  gettingCurrentUserError,
  resetPassRequest,
  resetPassSuccess,
  resetPassError,
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailError,
} from "./authActions";
import {
  createUser as createUserAPI,
  loginUser as loginUserAPI,
  logoutUser as logoutUserAPI,
  getCurrentUser as getCurrentUserAPI,
  resetPassword as resetPasswordAPI,
  sendEmail as sendEmailAPI,
} from "../../utils/taskManagerAPI";
import {
  makeSuccessNotification,
  makeAlertNotification,
} from "../notifications/notificationOperations";

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
      dispatch(signupError(pathOr("", ["response", "status"], error)));
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch(loginRequest());
  const credentials = {
    email,
    password: password.trim(),
  };
  loginUserAPI(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => {
      dispatch(loginError(pathOr("", ["response", "status"], error)));
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
export const resetPass = (token, newPassword) => (dispatch) => {
  dispatch(resetPassRequest());
  resetPasswordAPI(token, newPassword)
    .then(() => {
      dispatch(resetPassSuccess());
      useDispatch(makeSuccessNotification("Пароль успішно змінено"));
    })
    .catch((err) => {
      const error = errorHandler(pathOr("", ["response", "status"], err));
      dispatch(makeAlertNotification("Сталася помилка"));
      dispatch(resetPassError(error));
    });
};

export const sendMail = ({ email }) => (dispatch) => {
  dispatch(sendEmailRequest());
  sendEmailAPI(email)
    .then(
      sendEmailSuccess(() => {
        useDispatch(makeSuccessNotification("Операція успішна"));
      })
    )
    .catch((err) => {
      const error = errorHandler(pathOr("", ["response", "status"], err));
      dispatch(sendEmailError(error));
      dispatch(makeAlertNotification("Сталася помилка"));
    });
};
