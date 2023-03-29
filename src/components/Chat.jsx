import React, { useContext, useState, useEffect } from "react";
import image from "./image.jpg";
import { FriendContext } from "../context/friendContext";
import UserChat from "./UserChat";
const Chat = () => {
  const { currentFriend, combinedId } = useContext(FriendContext);
  return currentFriend ? (
    <UserChat />
  ) : (
    <div className="w-2/3 h-full ">
      <img className="w-full h-full" src={image} alt="" />
    </div>
  );
};

export default Chat;
