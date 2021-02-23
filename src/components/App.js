import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import routes from "../utils/routes";

import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { isMobileSelector } from "../redux/clientWidth/clientWidthSelectors";
import { isAuthentificatedSelector } from "../redux/auth/authSelectors";

import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";

import Loader from "../components/Loader/Loader";

import ModalCreateSprint from "./../components/Modals/ModalComponents/ModalCreateSprint";
import ModalCreateTask from "./Modals/ModalComponents/ModalCreateTask";
import ModalAddParticipant from "./Modals/ModalComponents/ModalAddParticipant";
import ModalCreateProject from "./Modals/ModalComponents/ModalCreateProject";
import ModalEditProject from "./Modals/ModalComponents/ModalEditProject";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  // const isMobileMode = useSelector(isMobileSelector);
  const isAuthentificated = useSelector(isAuthentificatedSelector);
  console.log(isAuthentificated);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>

      <ModalCreateSprint />
      <ModalCreateTask />
      <ModalAddParticipant />
      <ModalCreateProject />
      <ModalEditProject />
    </>
  );
}
