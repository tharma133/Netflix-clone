import React, { useState, useEffect } from "react";
import { firebase } from "../firebase/firebase.prod";

const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinpassword, setSigninPassword] = useState("");
  const [signinUsername, setSigninUsername] = useState("");
  const currentUser = firebase.auth().currentUser || {};

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        currentUser,
        user,
        signinEmail,
        signinUsername,
        signinpassword,
        setSigninEmail,
        setSigninPassword,
        setSigninUsername,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
