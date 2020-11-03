import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/Authentication";
import { signUp } from "../../firebase/FirebaseAuthMethods";

interface Inputs {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
}

const signupErrors = {
  "auth/email-already-in-use": "email",
  "auth/invalid-email": "email",
  "auth/weak-password": "password",
} as const;

type SignupErrors = keyof typeof signupErrors;

const SignUp = () => {
  const { register, handleSubmit, watch, errors, setError } = useForm<Inputs>();
  const { user } = useAuth();

  if (user) {
    return <Redirect to="/" />;
  }

  const onSubmit = async ({ username, email, password }: Inputs) => {
    try {
      await signUp(username, email, password);
    } catch (err) {
      setError(signupErrors[err.code as SignupErrors], {
        type: "manual",
        message: err.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        ref={register({
          required: "Must enter a username!",
        })}
      />
      {errors.username?.message}

      <label htmlFor="email">Mail</label>
      <input
        name="email"
        type="email"
        ref={register({
          required: "Must enter a valid mail address!",
        })}
      />
      {errors.email?.message}

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        ref={register({
          required: "Must enter a password!",
        })}
      />
      {errors.password?.message}

      <label htmlFor="repeatedPassword">Repeat Password</label>
      <input
        name="repeatedPassword"
        type="password"
        ref={register({
          required: true,
          validate: {
            matchingPassword: (value) =>
              value === watch("password") ||
              "The repeated password is not matching the first.",
          },
        })}
      />
      {errors.repeatedPassword?.message}

      <button type="submit">Sign up!</button>
    </form>
  );
};

export default SignUp;
