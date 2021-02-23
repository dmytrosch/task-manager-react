import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/projects/:projectId/sprints",
    label: "Sprints",
    exact: true,
    component: lazy(
      () =>
        import(
          "../views/SprintsView/SprintsView" /* webpackChunkName: "Sprint" */
        )
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/projects/:projectId/sprints/:sprintId/tasks/:day",
    label: "Tasks",
    exact: true,
    component: lazy(
      () =>
        import("../views/TasksView/TasksView.js" /* webpackChunkName: "Task" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/signup",
    label: "Signup",
    exact: true,
    component: lazy(
      () =>
        import(
          "../views/SignupView/SignupView" /* webpackChunkName: "Signup" */
        )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(
      () =>
        import("../views/LoginView/LoginView" /* webpackChunkName: "Login" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/",
    label: "Projects",
    exact: true,
    component: lazy(
      () => import("../views/MainView/MainView" /* webpackChunkName: "Home" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/reset-password/:resetPasswordToken",
    label: "ResetPassword",
    exact: true,
    component: lazy(
      () =>
        import(
          "../views/ResetPasswordView/ResetPasword" /* webpackChunkName: "ResetPassword" */
        )
    ),
    private: false,
    restricted: true,
  },
];
