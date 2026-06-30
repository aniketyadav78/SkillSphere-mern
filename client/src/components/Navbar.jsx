import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          SkillSphere
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/find-work"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Find Work
          </Link>

          <Link
            to="/find-talent"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Find Talent
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;