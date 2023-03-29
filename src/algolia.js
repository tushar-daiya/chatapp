import { useEffect } from "react";
import algoliasearch from "algoliasearch";
import "firebase/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase/firebase";
import { onSnapshot } from "firebase/firestore";
const db = getFirestore(app);
export const algoliaClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_KEY,
  process.env.REACT_APP_ALGOLIA_ID
);
export const algoliaIndex = algoliaClient.initIndex("ChatApp");
export const useAlgoliaIntegration = () => {

  const collectionRef = collection(db, "users");
  useEffect(() => {

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const records = [];
      snapshot.forEach((doc) => {
        records.push({
          objectID: doc.id,
          ...doc.data(),
        });
      });
      algoliaIndex.saveObjects(records);
    });

    return () => unsubscribe();
  }, []);
};

