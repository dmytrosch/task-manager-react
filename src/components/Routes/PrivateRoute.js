import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { isAuthentificatedSelector } from "../../redux/auth/authSelectors";

export default function PrivateRoute({ component: Component, ...routerProps }) {
  const isAuth = useSelector(isAuthentificatedSelector);
  return (
    <Route
      {...routerProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
