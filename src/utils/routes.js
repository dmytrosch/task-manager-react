import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/MainView/MainView" /* webpackChunkName: "Home" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/sprint",
    label: "Sprint",
    exact: true,
    component: lazy(() =>
      import(
        "../views/SprintsView/SprintsView" /* webpackChunkName: "Sprint" */
      )
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/task",
    label: "Lask",
    exact: true,
    component: lazy(() =>
      import("../views/TasksView//TasksView.js" /* webpackChunkName: "Task" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/signup",
    label: "Signup",
    exact: true,
    component: lazy(() =>
      import("../views/SignupView/SignupView" /* webpackChunkName: "Signup" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("../views/LoginView/LoginView" /* webpackChunkName: "Login" */)
    ),
    private: false,
    restricted: true,
  },
];
