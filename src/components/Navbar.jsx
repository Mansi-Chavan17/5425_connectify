import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthComponent/AuthContext";
import { PiUserCircleFill } from "react-icons/pi";

const Navbar = () => {
  const { user } = useContext(AuthContext);  // Get user info from context
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile"); // Navigate to profile if user is logged in
    } else {
      navigate("/login"); // Navigate to login if user is not logged in
    }
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4 shadow-lg">
      <div className="text-gradient text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <Link to="/">🍀 Connectify</Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-gray-300 text-lg font-medium cursor-pointer hover:text-pink-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-300 text-lg font-medium cursor-pointer hover:text-pink-400 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/connections"
          className="text-gray-300 text-lg font-medium cursor-pointer hover:text-pink-400 transition duration-300"
        >
          Connections
        </Link>
        <div
          onClick={handleProfileClick} // Call the function on click
          className="text-gray-300 text-2xl cursor-pointer hover:text-pink-400 transition duration-300"
        >
          <PiUserCircleFill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
