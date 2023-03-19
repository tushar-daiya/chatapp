import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachmentIcon from '@mui/icons-material/Attachment';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
const Chat = () => {
  return (
    <div className="w-2/3 ">
      <div className="text-xl text-white h-16 bg-[#2C74B3] p-4 flex items-center  justify-between">
        <div className="userDetails flex items-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="w-8 rounded-full mr-2"
          />
          <p className="mr-2 font-medium ">Tushar Daiya</p>
        </div>
        <div className="connect flex gap-3">
          <VideoCallIcon />
          <CallIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="messages bg-gray-300">

      </div>
      <div className="sendMessage bg-white flex items-center h-16">
        <div className="input flex items-center w-full mx-3 h-full ">
        <TextField 
        className="w-full border-none"
          id="standard-textarea"
          maxRows={2}
          placeholder="Message"
          multiline
          variant="standard"
        />
          
        </div>
        <AttachmentIcon fontSize="large" className="mr-3 text-gray-800 w-8 -rotate-45"/>
        <SendIcon fontSize="large" className= "mr-3 text-[#0A2647] w-8"/>
      </div>
    </div>
  );
};

export default Chat;
