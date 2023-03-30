import { createContext,  useState } from "react";
export const FriendContext = createContext();
export const FriendContextProvider = ({ children }) => {
  const [currentFriend,setCurrentFriend]=useState(null);
  const [combinedId,setCombinedId]=useState(null);
  return (
    <FriendContext.Provider value={{ currentFriend,setCurrentFriend ,combinedId,setCombinedId}}>
      {children}
    </FriendContext.Provider>
  );
};
