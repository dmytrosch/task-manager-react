import { pathOr } from "ramda";

export const isAuthentificatedSelector = (state) =>
  Boolean(state.app.auth.token);
export const getUserNameSelector = (state) => {
  const email = pathOr("", ["email"], state.app.auth.user);
  const [username, _] = email.split("@");
  return username;
};

export const errorMessageSelector = (state) => {
  const errorStatus = state.app.auth.error;
  return errorStatus ? errorHandler(errorStatus) : null;
};
export const getUpdatePasswordResult = (state) => state.app.auth.resetPassword;
export const getResultSendingEmail = (state) => state.app.auth.error;

function errorHandler(status) {
  let message = "";
  switch (status) {
    case 400:
      message = "Не вірно вказаний логін або пароль";
      break;
    case 401:
      message = "Не вірно вказаний логін або пароль";
      break;
    case 409:
      message = "Користувач з цією адресою вже зареєстрований";
      break;
    default:
      message = "Щось пішло не так";
  }
  return message;
}
