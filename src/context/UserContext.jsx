import React, {createContext, useEffect} from "react";
import {useState} from "react";
import {createUserDocumentFromAuth, onAuthObserverListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

function UserContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthObserverListener(async (user) => {
      setCurrentUser(user)
      await createUserDocumentFromAuth(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
