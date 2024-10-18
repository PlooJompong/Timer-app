import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <Link to="/setTimer">
        <img src={logo} alt="Logo" />
      </Link>
      <h1 className="text-sm text-white">For all your timing needs</h1>
    </div>
  );
};

export default Loading;
