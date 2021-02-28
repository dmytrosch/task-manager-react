import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import App from "./components/App";
import "./styles/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading='load' persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);