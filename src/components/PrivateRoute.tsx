import React from "react";
import { RouteProps } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/Authentication";

export const ProtectedRoute = <T extends RouteProps = RouteProps>(props: T) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return <Route {...props} />;
};
