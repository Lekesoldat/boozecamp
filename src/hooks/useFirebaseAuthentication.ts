import firebase, { User } from "firebase";
import { useEffect, useState } from "react";

const useFirebaseAuthentication = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => firebase.auth().onAuthStateChanged(setUser), []);

  return user;
};

export default useFirebaseAuthentication;
