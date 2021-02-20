import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import projects from "./projects/projectsReducers";
import sprints from "./sprints/sprintsReducers";
import tasks from "./tasks/tasksReducers";
import notification from "./notifications/notificationReduser";
import auth from "./auth/authReducer";
import clientWidth from "./clientWidth/clientWidthReducer";
import loading from "./loading/loadingReducer";
import modal from "./modal/modalReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const domain = combineReducers({ projects, sprints, tasks });
const app = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  clientWidth,
});
const ui = combineReducers({ loading, modal, notification });

const store = configureStore({
  reducer: {
    domain,
    app,
    ui,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);
export { store, persistor };
