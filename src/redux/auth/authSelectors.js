import { pathOr } from "ramda";

export const isAuthentificatedSelector = (state) =>
  Boolean(state.app.auth.token);
export const getUserNameSelector = (state) => {
  const email = pathOr("", ["email"], state.app.auth.user);
  const [username, _] = email.split("@");
  return username;
};
export const getUpdatePasswordResult = (state) => state.app.auth.resetPassword;
export const getResultSendingEmail = (state) => state.app.auth.sendEmailAuth;
