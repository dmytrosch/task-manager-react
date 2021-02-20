export const isAuthentificated = (state) =>
  state.app.auth.token ? true : false;
export const getUserName = (state) => state.app.auth.user.username;
