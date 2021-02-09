import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/MainView/MainView" /* webpackChunkName: "home" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/signup",
    label: "Signup",
    exact: true,
    component: lazy(() =>
      import("../views/SignupView/SignupView" /* webpackChunkName: "signup" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("../views/LoginView/LoginView" /* webpackChunkName: "login" */)
    ),
    private: false,
    restricted: true,
  },

];
