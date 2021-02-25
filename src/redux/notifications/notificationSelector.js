export const getNotificationSelector = (state) => {
  // console.log(state.ui.notification.message, "sel");
  if (state.ui.notification.message) {
    return state.ui.notification;
  }
};
