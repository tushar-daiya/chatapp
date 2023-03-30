import React, { useContext, useState, useEffect, useRef } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { db } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { updateDoc, arrayUnion } from "firebase/firestore";

import { FriendContext } from "../context/friendContext";
import { AuthContext } from "../context/authContext";

const UserChat = () => {
  const scrollRef = useRef(null);
  const getTimeString = (time) => {
    const timestamp =
      time.seconds * 1000 + Math.round(time.nanoseconds / 1000000);
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    return timeString;
  };
  const { combinedId, currentFriend } = useContext(FriendContext);
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", combinedId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      } else {
        console.log("No such document!");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [combinedId]);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  const handleClick = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      sendMessage(msg);
    }
  };
  const sendMessage = async (msg) => {
    if (msg.trim().length > 0) {
      const userRef = doc(db, "users", currentUser.uid);
      const friendRef = doc(db, "users", currentFriend.uid);
      const chatDocRef = doc(db, "chats", combinedId);
      const recentuserchatRef = doc(db, "userChats", currentUser.uid);
      const recentfrndRef = doc(db, "userChats", currentFriend.uid);
      const newMessage = {
        text: msg,
        sender: currentUser.uid,
        timestamp: new Date(),
      };
      setMsg("");

      try {
        await Promise.all([
          updateDoc(userRef, { friends: arrayUnion(currentFriend.uid) }),
          updateDoc(friendRef, { friends: arrayUnion(currentUser.uid) }),
        ]);
      } catch (error) {
        console.log(error);
      }

      await updateDoc(chatDocRef, {
        messages: arrayUnion(newMessage),
      });

      try {
        await updateDoc(recentuserchatRef, {
          [currentFriend.uid]: newMessage,
        });
      } catch (error) {
        console.log(error);
      }

      await updateDoc(recentfrndRef, {
        [currentUser.uid]: newMessage,
      });
    }
  };
  return (
    <div className="w-2/3 ">
      <div className="text-xl text-white h-16 bg-[#2C74B3] p-4 flex items-center  justify-between">
        <div className="userDetails flex items-center">
          <img
            src={currentFriend.photoURL}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="mr-2 font-medium ">{currentFriend.name}</p>
        </div>
        <div className="connect flex gap-3">
          <VideoCallIcon />
          <CallIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className="messages  p-2 bg-gray-300">
        <div
          ref={scrollRef}
          className="w-full scrollContainer overflow-y-auto h-full flex flex-col gap-2"
        >
          {messages.length > 0 &&
            messages.map((message, index) =>
              message.sender === currentUser.uid ? (
                <div key={index} className="message1">
                  <p className=" pr-2 text-xl">{message.text}</p>
                  <span className="time">
                    {getTimeString(message.timestamp)}
                  </span>
                </div>
              ) : (
                <div key={index} className="message2">
                  <p className=" pr-2 text-xl">{message.text}</p>
                  <span className="time">
                    {getTimeString(message.timestamp)}
                  </span>
                </div>
              )
            )}
        </div>
      </div>
      <div className="sendMessage bg-white flex items-center h-16">
        <div className="input flex items-center w-full mx-3 h-full ">
          <TextField
            onKeyDown={handleClick}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full border-none"
            id="standard-textarea"
            maxRows={2}
            placeholder="Message"
            multiline
            variant="standard"
          />
        </div>

        <SendIcon
          onClick={() => sendMessage(msg)}
          fontSize="large"
          className="mr-3 text-[#0A2647] w-8"
        />
      </div>
    </div>
  );
};

export default UserChat;
