import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase/firebase";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const displayName = form.firstName.trim() + " " + form.lastName.trim();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const storageRef = ref(storage, res.user.uid);

      await uploadBytesResumable(storageRef, form.image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name: displayName,
              email: form.email,
              photoURL: downloadURL,
              friends:[]
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            
            navigate("/");
          } catch (err) {
            setError(err.code);
            setLoading(false);
          }
        });
      });
    } catch (error) {
      setError(error.code);
      console.log(error)
    }
    setLoading(false);
  };
  return (
    <div className=" min-h-screen flex  items-center justify-center">
      <div className="flex flex-col gap-6 bg-white p-10 rounded-xl">
        <h1 className="title text-2xl font-bold text-center -mb-5">ChatApp</h1>
        <h4 className="text-xl text-center text-gray-600 mb-2">Sign Up</h4>
        <form className="flex flex-col gap-6" onSubmit={signup}>
          <div className="name flex gap-2">
            <TextField
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              id="outlined-basic"
              required
              label="First Name"
              variant="outlined"
            />
            <TextField
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              id="outlined-basic"
              required
              label="Last Name"
              variant="outlined"
            />
          </div>
          <TextField
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            required
            label="Email"
            variant="outlined"
          />
          <TextField
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            id="outlined-basic"
            required
            type={"password"}
            label="Password"
            variant="outlined"
          />
          <label htmlFor="image-upload">
            <div className=" flex items-center cursor-pointer rounded-md p-4 border-2 border-[#e5e7eb] border-solid h-14">
              <AddPhotoAlternateIcon fontSize="large" color="primary" />
              <input
                type="file"
                onChange={(e) =>
                  setForm({
                    ...form,
                    image:e.target.files[0],
                  })
                }
                accept="image/*"
                id="image-upload"
                name="image-upload"
                className="sr-only"
                tabIndex={-1}
                required
              />
              <span className="align-center ml-3 text-lg font-semibold text-[#1976d2]">
                Add an avatar
              </span>
              {form.image && <img src={URL.createObjectURL(form.image)} className="h-8 ml-2" />}
            </div>
          </label>
          <span>{error}</span>
          <Button type="submit" variant="contained">
            {loading ? (
              <CircularProgress
                size={18}
                sx={{
                  color: grey[50],
                }}
              />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <div className="text-gray-600 text-center ">
          Already have an account?
          <Link to="/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
