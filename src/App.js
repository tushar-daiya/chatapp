import './index.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App box-border bg-[#0A2647] min-h-screen">
      <BrowserRouter>
      <Routes>
      <Route index element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
