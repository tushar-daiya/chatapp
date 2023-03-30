import React, { useContext, useEffect, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { useHits, useSearchBox } from "react-instantsearch-hooks";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { FriendContext } from "../context/friendContext";
const SearchPanel = () => {
  const { userData, currentUser } = useContext(AuthContext);
  const { query, refine } = useSearchBox();
  const { hits } = useHits();
  const [friendDetails, setFriendDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentchat, setRecentChat] = useState({});
  const { setCombinedId, setCurrentFriend } = useContext(FriendContext);

  useEffect(() => {
    const fetchFriendDetails = async () => {
      try {
        const friendDocs = await Promise.all(
          userData.friends.map((uid) =>
            getDoc(doc(collection(db, "users"), uid))
          )
        );
        const friendData = friendDocs
          .filter((doc) => doc.exists())
          .map((doc) => doc.data());
        setFriendDetails(friendData);
      } catch (error) {
        console.log("Error fetching friend details:", error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onSnapshot(
      doc(db, "userChats", currentUser.uid),
      (doc) => {
        setRecentChat(doc.data() || {});
      }
    );

    fetchFriendDetails();
    return () => unsubscribe();
  }, [userData, currentUser]);

  const handleClick = async (e) => {
    const tempId =
      userData.uid > e.uid ? userData.uid + e.uid : e.uid + userData.uid;
    setCombinedId(tempId);
    const resRef = doc(db, "chats", tempId);
    const res = await getDoc(resRef);
    if (!res.exists()) {
      try {
        await setDoc(resRef, { messages: [] });
      } catch (error) {
        console.log("Error creating chat:", error);
      }
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
                      {recentchat[e.uid] && (
                        <span>{recentchat[e.uid].text}</span>
                      )}
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
                  {recentchat[e.uid] && <span>{recentchat[e.uid].text}</span>}
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
