export const isAuthentificated = (state) => (state.auth.token ? true : false);
export const getUserName = (state) => state.auth.user.username;
