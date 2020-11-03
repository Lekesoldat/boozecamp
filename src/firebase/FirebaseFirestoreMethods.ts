import firebase from "firebase";

export const getUsers = () =>
  firebase
    .firestore()
    .collection("users")
    .get()
    .then((res) => res.docs.map((doc) => doc.data()));

export const getUser = (userId: string) =>
  firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .get()
    .then((res) => res.data());

export const getBottles = (userId: string) =>
  firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .collection("bottles")
    .get()
    .then((res) => res.docs.map((doc) => doc.data()));
