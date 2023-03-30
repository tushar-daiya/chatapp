import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          setUserData(userSnap.data());

          // subscribe to changes on user's document
          const unsubscribe = onSnapshot(userRef, (doc) => {
            setUserData(doc.data());

          });
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      }
      else{
        setUserData(null);
      }
      setLoading(false);
    });

    return () => {
      unsubAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userData }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
