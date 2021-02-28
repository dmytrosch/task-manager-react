import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  makeSuccessNotification,
  makeAlertNotification,
} from "../../redux/notifications/notificationOperations";
import Loader from "../Loaders/LoaderForSustain/LoaderForSustain";
import { Redirect, useRouteMatch, useHistory } from "react-router-dom";
import { verifyEmail } from "../../utils/taskManagerAPI";

export default function EmailVerification() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { params } = useRouteMatch();
  const token = params.verifyToken;
  useEffect(() => {
    document.title = "Зачекайте...";
    verifyEmail(token)
      .then(() => {
        dispatch(
          makeSuccessNotification("Електронна адреса успішно підтверджена")
        );
      })
      .catch(() => {
        dispatch(
          makeAlertNotification(
            "Неправильні данні, для підтвердження електронної адреси"
          )
        );
      })
      .finally(() => history.push("/login"));
  }, [token]);
  // useCallback(async () => {
  //   // setLoading(true);
  //   try {
  //     await verifyEmail(token);
  //     setTimeout(() => {
  //       dispatch(
  //         makeSuccessNotification("Електронна адреса успішно підтверджена")
  //       );
  //     }, 3000);
  //   } catch {
  //     setTimeout(() => {
  //       dispatch(
  //         makeAlertNotification(
  //           "Неправильні данні, для підтвердження електронної адреси"
  //         )
  //       );
  //     }, 3000)();
  //   } finally {
  //     history.push("/login");
  //   }
  // }, [token]);
  return <Loader />;
}
