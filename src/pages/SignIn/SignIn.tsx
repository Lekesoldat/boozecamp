import React, { useState } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/Authentication";
import { signIn } from "../../firebase/FirebaseAuthMethods";

const SignIn = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // Redirect to Home if authenticated.
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        Dont have an account? Go to the
        <NavLink to="/sign-up">SignUp page!</NavLink>
      </div>

      <button
        onClick={async () => {
          setLoading(true);
          await signIn("magnuslholtet@gmail.com", "passord123");
        }}
      >
        {loading ? "Loading..." : "Sign In!"}
      </button>
    </>
  );
};

export default SignIn;
