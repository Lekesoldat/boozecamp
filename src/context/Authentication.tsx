import React, { createContext, PropsWithChildren, useContext } from "react";
import { Route, Switch } from "react-router";
import { ProtectedRoute } from "../components/PrivateRoute";
import useFirebaseAuthentication from "../hooks/useFirebaseAuthentication";
import SignIn from "../pages/SignIn/SignIn";

export interface AuthConfig {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthConfig | null>(null);

export const useAuth = () => useContext(AuthContext)!;

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const user = useFirebaseAuthentication();

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <ProtectedRoute path="*">{children}</ProtectedRoute>
      </Switch>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
