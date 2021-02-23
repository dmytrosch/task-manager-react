import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { isAuthentificatedSelector } from "../../redux/auth/authSelectors";

export default function PublicRoute({ component: Component, ...routeProps }) {
  const isAuth = useSelector(isAuthentificatedSelector);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
