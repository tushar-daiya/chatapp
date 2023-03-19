import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const login = () => {};
  return (
    <div className=" h-screen flex  items-center justify-center">
      <div className="flex flex-col gap-6 bg-white p-10 rounded-xl">
        <h1 className="title text-2xl font-bold text-center -mb-5">ChatApp</h1>
        <h4 className="text-xl text-center text-gray-600 mb-2">Login</h4>
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
        <Button onClick={login} variant="contained">
          Login
        </Button>
        <div className="text-gray-600 text-center">
          Don't have an account? <Link to ="/"><span className="text-blue-600">Sign Up</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
