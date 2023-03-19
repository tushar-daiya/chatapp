import React from "react";
import { TextField } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="w-1/3 h-full bg-gray-300 mr-4">
      <div className="text-xl text-white h-16 bg-[#205295] p-4 flex items-center  justify-between">
        <p className="text-2xl">ChatApp</p>
        <div className="userDetails flex items-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-8 rounded-full mr-2"
          />
          <p className="mr-2 font-semibold text-gray-400">Tushar Daiya</p>
          <button className="">logout</button>
        </div>
      </div>
      <div className="m-2">
        <TextField
          fullWidth
          id="standard-search"
          label="Search for a user "
          type="search"
          variant="standard"
        />
      </div>
      <div className="friends overflow-y-auto text-black flex gap-4 flex-col">
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        <div className="flex hover:shadow-xl items-center px-4 py-2 h-15 border-b-slate-700 border-b-[1px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-10 rounded-full mr-4"
          />
          <div>
            <p>Tushar Daiya</p>
            <span>Message</span>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
