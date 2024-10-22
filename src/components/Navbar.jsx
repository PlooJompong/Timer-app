import { Link } from "react-router-dom";

import logo from "../assets/navicon.svg";

const Navbar = ({ onClick }) => {
  return (
    <nav className="flex items-center justify-between">
      <Link onClick={onClick}>
        <img src={logo} alt="Logo" />
      </Link>
      <p className="text-custom-gray">interval</p>
    </nav>
  );
};

export default Navbar;
