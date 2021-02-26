import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import routes from "../utils/routes";

import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { isMobileSelector } from "../redux/clientWidth/clientWidthSelectors";
import { isAuthentificatedSelector } from "../redux/auth/authSelectors";
import { getNotificationSelector } from "../redux/notifications/notificationSelector";
import { getCurrentUser } from "../redux/auth/authOperations";
import { isLoading } from "../redux/loading/loadingSelector";

import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";

import Loader from "../components/Loader/Loader";
import Notification from "../common/Notification/Notification";
import ModalCreateSprint from "./../components/Modals/ModalComponents/ModalCreateSprint";
import ModalCreateTask from "./Modals/ModalComponents/ModalCreateTask";
import ModalAddParticipant from "./Modals/ModalComponents/ModalAddParticipant";
import ModalCreateProject from "./Modals/ModalComponents/ModalCreateProject";
import ModalEditProject from "./Modals/ModalComponents/ModalEditProject";
import ModalChartTable from "./Modals/ModalComponents/ModalChartTable";
import ModalApproveDeleteProject from "./Modals/ModalComponents/ModalApproveDeleteProject";
import ModalApproveDeleteSprint from "./Modals/ModalComponents/ModalApproveDeleteSprint";
import ModalApproveDeleteTask from "./Modals/ModalComponents/ModalApproveDeleteTask";

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthentificatedSelector);
  const notification = useSelector(getNotificationSelector);
  console.log(isAuth);
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  useEffect(() => {
    isAuth && dispatch(getCurrentUser());
  }, [isAuth]);
  // const isMobileMode = useSelector(isMobileSelector);

  const loading = useSelector(isLoading);
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
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <ModalCreateSprint />
      <ModalCreateTask />
      <ModalAddParticipant />
      <ModalCreateProject />
      <ModalEditProject />
      <ModalChartTable />
      <ModalApproveDeleteProject />
      <ModalApproveDeleteSprint />
      <ModalApproveDeleteTask />
      {loading && <Loader />}
    </>
  );
}
