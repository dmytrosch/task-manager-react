export const isAuthentificatedSelector = (state) => Boolean(state.app.auth.token)
export const getUserNameSelector = (state) => state.app.auth.user.username;
