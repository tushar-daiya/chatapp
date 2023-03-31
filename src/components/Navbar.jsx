import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Signout from './Signout'
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <div className="xl:text-xl md:text-lg text-sm  h-16 bg-[#D90429] p-4 flex items-center  justify-between">
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
          <p className="mr-2 font-semibold ">
            {currentUser.displayName}
          </p>
        )}
        <Signout/>
      </div>
    </div>
  );
};

export default Navbar;
