import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title, darkMode }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-gray-900 text-white">
           <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            <span className="text-purple-400">G</span>
            <span className="text-purple-500">i</span>
            <span className="text-purple-600">t</span>
            <span className="text-purple-700">H</span>
            <span className="text-purple-800">u</span>
            <span className="text-purple-900">b</span>{" "}
            <span className="text-blue-300">E</span>
            <span className="text-blue-400">x</span>
            <span className="text-blue-500">p</span>
            <span className="text-blue-600">l</span>
            <span className="text-blue-700">o</span>
            <span className="text-blue-800">r</span>
            <span className="text-blue-800">e</span>{" "}
            <span className="text-green-300">X</span>
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            {darkMode}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Explorer X",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
