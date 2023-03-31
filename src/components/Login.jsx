import React, { useState } from "react";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
    } catch (error) {
      setError(error.code);
    }
    setLoading(false);
  };

  return (
    <div className=" min-h-screen flex  items-center justify-center">
      <div className=" flex flex-col gap-6 bg-white   p-10 rounded-xl">
        <h1 className="title text-2xl font-bold text-center -mb-5">ChatApp</h1>
        <h4 className="text-xl text-center text-gray-600 mb-2">Login</h4>
        <form className="flex flex-col gap-6" onSubmit={login}>
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
              "Login"
            )}
          </Button>
        </form>
        <div className="text-gray-600 text-center">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-blue-600">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
