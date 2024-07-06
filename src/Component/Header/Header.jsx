import {  NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <h2 className="text-xl font-medium mb-2">NavBar </h2>
      <nav className="flex justify-center space-x-5 text-lg ">
        <NavLink className="hover:bg-black p-1 rounded-lg" to={"/"}>
          Home
        </NavLink>
        <NavLink className="hover:bg-black p-1 rounded-lg" to={"/about"}>
          About
        </NavLink>
        <NavLink className="hover:bg-black p-1 rounded-lg" to={"/contact"}>
          Contact Us
        </NavLink>
        <NavLink className="hover:bg-black p-1 rounded-lg" to={"/users"}>
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
