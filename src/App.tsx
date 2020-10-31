import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/Authentication";
import "./firebase/setupFirebase";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <nav>Min Navbar</nav>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
