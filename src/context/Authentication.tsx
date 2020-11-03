import React, { createContext, PropsWithChildren, useContext } from "react";
import { Route, Switch } from "react-router";
import { ProtectedRoute } from "../components/PrivateRoute";
import useFirebaseAuthentication from "../hooks/useFirebaseAuthentication";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export interface AuthConfig {
  user: firebase.User | null;
}

const AuthContext = createContext<AuthConfig | null>(null);

export const useAuth = () => useContext(AuthContext)!;

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const user = useFirebaseAuthentication();

  return (
    <AuthContext.Provider value={{ user }}>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <ProtectedRoute path="*">{children}</ProtectedRoute>
      </Switch>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
