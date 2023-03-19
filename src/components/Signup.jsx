import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const signup = () => {
    setLoading(true);
    const displayName = form.firstName.trim() + " " + form.lastName.trim();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        
      })
      .catch((error) => {});
  };
  return (
    <div className=" h-screen flex  items-center justify-center">
      <div className="flex flex-col gap-6 bg-white p-10 rounded-xl">
        <h1 className="title text-2xl font-bold text-center -mb-5">ChatApp</h1>
        <h4 className="text-xl text-center text-gray-600 mb-2">Sign Up</h4>
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
        <Button onClick={signup} variant="contained">
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
        <div className="text-gray-600 text-center">
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
