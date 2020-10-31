import React, { useState } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../context/Authentication";
import { signIn } from "../../firebase/FirebaseAuthMethods";

const SignIn = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <button
      onClick={async () => {
        setLoading(true);
        await signIn({
          email: "magnuslholtet@gmail.com",
          password: "password123",
        });
      }}
    >
      {loading ? "Loading..." : "Sign In!"}
    </button>
  );
};

export default SignIn;
