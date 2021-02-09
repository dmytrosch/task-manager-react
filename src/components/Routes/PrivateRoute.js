import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { isAuthentificated } from "../../redux/auth/authSelectors";

export default function PrivateRoute({ component: Component, ...routerProps }) {
  const isAuth = useSelector(isAuthentificated);
  return (
    <Route
      {...routerProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
