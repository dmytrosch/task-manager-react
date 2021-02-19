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

import Loader from "../components/Loader/Loader";
import LoginView from "../views/LoginView/LoginView";
import Dashboard from "../components/Dashboard/Dashboard";

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(setClientWidth(document.documentElement.clientWidth));
  // }, []);
  // const isMobileMode = useSelector(isMobile);

  return (
    <>
    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
      {/* <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) => (
              <PublicRoute key={route.path} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter> */}
    </>
  );
}
