import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-700">
          🛡️ TrustLens AI
        </h1>

        <ul className="flex gap-8 font-medium">

          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/verify" className="hover:text-blue-600">
              Verify
            </Link>
          </li>

          <li>
            <Link to="/history" className="hover:text-blue-600">
              History
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;