import React,{useContext} from 'react';
import { auth } from "../firebase/firebase";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { signOut } from 'firebase/auth';
import { FriendContext } from '../context/friendContext';
import { useNavigate } from 'react-router-dom';

const Signout=()=> {
  const navigate=useNavigate();
    const {setCurrentFriend,setCombinedId}=useContext(FriendContext)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
};
const logout = () => {
    setCurrentFriend(null);
    setCombinedId(null);
    setOpen(false);
    signOut(auth);
    navigate('/login')
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="hover:bg-[#194074] rounded-lg px-2 py-1">
          Logout
        </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure u want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={logout} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Signout;