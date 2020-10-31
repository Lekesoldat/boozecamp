import firebase from "firebase";

export interface AuthCredentials {
  email: string;
  password: string;
}

export const signUp = ({ email, password }: AuthCredentials) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => console.log("Successfully signed up!\n", res))
    .catch((err) => console.error(err));

export const signIn = ({ email, password }: AuthCredentials) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => console.log("You've been signed in!\n", res))
    .catch((err) => console.error(err));

export const signOut = () =>
  firebase
    .auth()
    .signOut()
    .then((res) => console.log("Successfully signed out!\n"))
    .catch((err) => console.log(err));
