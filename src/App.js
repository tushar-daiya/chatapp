import "./index.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { useAlgoliaIntegration } from "./algolia";
function App() {
  useAlgoliaIntegration();
  const { userData ,currentUser} = useContext(AuthContext);
  const ProtectedHomeRoute = ({ children }) =>
    !currentUser ? <Navigate to="/login" /> : children;
  const ProtectedRoute = ({ children }) =>
    currentUser ? <Navigate to="/" /> : children;

  return (
    <div className="App box-border bg-[#2B2D42] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedHomeRoute>
                  <Home />
                 </ProtectedHomeRoute>
              }
            />
            <Route
              path="login"
              element={
                <ProtectedRoute>
                  <Login />
                 </ProtectedRoute>
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute>
                  <Signup />
                 </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
