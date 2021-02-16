import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, BrowserRouter, Router } from "react-router-dom";
import routes from "../utils/routes";
import MainLayout from "../components/Layouts/MainLayout";
import AuthLayout from "../components/Layouts/AuthLayout";

import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { isMobileSelector } from "../redux/clientWidth/clientWidthSelectors";
import Header from "./Header/Header";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

<<<<<<< HEAD
import Loader from '../components/Loader/Loader'
import LoginView from '../views/LoginView/LoginView'
import SignupView from '../views/SignupView/SignupView'
import SprintsView from '../views/SprintsView/SprintsView'
import TasksView from '../views/TasksView/TasksView'
=======
import Loader from "../components/Loader/Loader";
import LoginView from "../views/LoginView/LoginView";
import Dashboard from "../components/Dashboard/Dashboard";
>>>>>>> 0f1c8dbf68d143ce033ba56b409c742ec628c193


export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(setClientWidth(document.documentElement.clientWidth));
  // }, []);
  // const isMobileMode = useSelector(isMobile);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
<<<<<<< HEAD
          <TasksView />
          {/* <AuthLayout>
            <LoginView />
          </AuthLayout> */}
=======
          <Switch>
            {routes.map((route) => (
              <PublicRoute key={route.path} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
>>>>>>> 0f1c8dbf68d143ce033ba56b409c742ec628c193
        </Suspense>
      </BrowserRouter>
    </>
  );
}
