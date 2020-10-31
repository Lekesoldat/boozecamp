import React from "react";
import { signOut } from "../../firebase/FirebaseAuthMethods";

const Home = () => {
  return <button onClick={() => signOut()}>Sign out!</button>;
};

export default Home;
