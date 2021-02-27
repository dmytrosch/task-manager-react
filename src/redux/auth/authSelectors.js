import { pathOr } from "ramda";

export const isAuthentificatedSelector = (state) =>
  Boolean(state.app.auth.token);
export const getUserNameSelector = (state) => {
  const email = pathOr("", ["email"], state.app.auth.user);
  const [username, _] = email.split("@");
  return username;
};
export const signupErrorSelector = (state) => {
  const status = state.app.auth.errors.signup;
  return status && errorHandler(status);
};
export const loginErrorSelector = (state) => {
  const status = state.app.auth.errors.login;
  return status && errorHandler(status);
};
export const resetPasswordRequestErrorSelector = (state) => {
  const status = state.app.auth.errors.resetPasswordRequest;
  return (
    status &&
    (status
      ? 404 && "Користувача з таким e-mail не існує"
      : "Щось пішло не так")
  );
};
export const resetPasswordErrorSelector = (state) => {
  const status = state.app.auth.errors.resetPassword;
  return status ;
};
export const isPasswordChangedSelector = state => state.app.auth.isPasswordChanged

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
