import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <h2 className="text-xl font-medium mb-2">NavBar </h2>
      <nav className="flex justify-center space-x-5 text-lg">
        <Link className="hover:bg-black p-1 rounded-lg" to={"/"}>
          Home
        </Link>
        <Link className="hover:bg-black p-1 rounded-lg" to={"/about"}>
          About
        </Link>
        <Link className="hover:bg-black p-1 rounded-lg" to={"/contact"}>
          Contact Us
        </Link>
        <Link className="hover:bg-black p-1 rounded-lg" to={"/users"}>
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
