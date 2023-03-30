import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import Loading from "../components/Loading";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const getData = async (user) => {
    const userRef = doc(db, "users", user.uid);
    onSnapshot(userRef, (userSnap) => {
      setUserData(userSnap.data());
      setLoading(false);
    });
  };
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async(user) => {
      setLoading(true);
      setCurrentUser(user);
      if (user) {
        await getData(user);
      } else {
        setLoading(false);
      }
    });

    return () => {
      unsubAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userData }}>
      {loading ? <Loading />:children}
    </AuthContext.Provider>
  );
};
