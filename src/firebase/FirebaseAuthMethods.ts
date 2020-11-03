import firebase from "firebase";

export const signUp = (username: string, email: string, password: string) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) =>
      firebase
        .firestore()
        .collection("users")
        .doc(res.user?.uid)
        .set({ username, email })
    );

export const signIn = (email: string, password: string) =>
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
