import { Link } from "react-router-dom";

import logo from "../assets/navicon.svg";

const Navbar = ({ onClick, isDone }) => {
  return !isDone ? (
    <div className="flex items-center justify-between">
      <Link onClick={onClick}>
        <img src={logo} alt="Logo" />
      </Link>
      <p className="">interval</p>
    </div>
  ) : (
    <div className="hidden"></div>
  );
};

export default Navbar;
