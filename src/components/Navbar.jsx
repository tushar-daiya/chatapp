import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FriendContext } from "../context/friendContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { setCurrentFriend, setCombinedId } = useContext(FriendContext);
  const logout = () => {
    setCurrentFriend(null);
    setCombinedId(null);
    signOut(auth);
  };
  return (
    <div className="xl:text-xl md:text-lg text-sm text-white h-16 bg-[#205295] p-4 flex items-center  justify-between">
      <p className="text-2xl font-bold">ChatApp</p>
      <div className="flex items-center">
        {currentUser?.photoURL && (
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-9 h-9 rounded-full mr-2"
          />
        )}
        {currentUser?.displayName && (
          <p className="mr-2 font-semibold text-gray-400">
            {currentUser.displayName}
          </p>
        )}
        <button onClick={logout} className="bg-blue-400 rounded-lg px-2 py-1">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
