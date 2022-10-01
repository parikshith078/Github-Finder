import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar bg-neutral text-neutral-content shadow-lg mb-12">
      <div className="container">
        <FaGithub className="text-3xl " />

        <Link to="/" className="text-lg font-bold ml-2 align-middle">
          {title}
        </Link>
        <div className="px-2 mx-2 flex-1">
          <div className="flex justify-end">
            {/* @TODO: Add rout link to about and home page */}
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
