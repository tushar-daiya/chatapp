import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
const Home = () => {
  const { userData } = useContext(AuthContext);

  return !userData ? (
    <Loading />
  ) : (
    <div className="container  h-screen flex m-auto justify-center items-center">
      <div className="flex w-full h-4/5 ">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
