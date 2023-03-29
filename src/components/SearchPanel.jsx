import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { useHits, useSearchBox } from "react-instantsearch-hooks";
import { db } from "../firebase/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { FriendContext } from "../context/friendContext";
const SearchPanel = () => {
  const { userData } = useContext(AuthContext);
  const { query, refine } = useSearchBox();
  const { hits } = useHits();
  const [friendDetails, setFriendDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setCombinedId, setCurrentFriend } = useContext(FriendContext);

  useEffect(() => {
    const fetchFriendDetails = async () => {
      setLoading(true);
      const details = [];
      for (const uid of userData.friends) {
        const userRef = doc(collection(db, "users"), uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          details.push(userDoc.data());
        } else {
          console.log(`User with uid ${uid} does not exist`);
        }
      }
      setFriendDetails(details);
      setLoading(false);
    };
    fetchFriendDetails();
  }, [userData.friends]);

  const handleClick = async (e) => {
    console.log(e.uid);
    const tempId =
      userData.uid > e.uid ? userData.uid + e.uid : e.uid + userData.uid;
    setCombinedId(tempId);
    const resRef = doc(db, "chats", tempId);
    const res = await getDoc(resRef);
    if (!res.exists()) {
      await setDoc(doc(db, "chats", tempId), { messages: [] });
    }
    setCurrentFriend(e);
  };

  const handleSearch = (e) => {
    refine(e.target.value.trim());
  };

  return (
    <div className="m-2 searchpanel">
      <TextField
        fullWidth
        id="outlined-search"
        label="Search for a user"
        type="search"
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />
      <div className="friends overflow-y-auto mt-2 text-black flex gap-4 flex-col">
        {query ? (
          <>
            {hits
              .filter((e) => e.uid !== userData.uid)
              .map((e) => {
                return (
                  <div
                    key={e.uid}
                    onClick={() => handleClick(e)}
                    className="flex cursor-pointer hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]"
                  >
                    <img
                      src={e.photoURL}
                      alt=""
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p>{e.name}</p>
                    </div>
                  </div>
                );
              })}
          </>
        ) : loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <CircularProgress />
          </div>
        ) : (
          friendDetails.map((e) => {
            return (
              <div
                key={e.uid}
                onClick={() => handleClick(e)}
                className="flex cursor-pointer hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]"
              >
                <img
                  src={e.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p>{e.name}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
