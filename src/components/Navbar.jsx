import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext.jsx";

export default function Navbar() {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // ⏳ Prevent wrong navbar during auth check
  if (loading) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Icon.svg"
              alt="Mentivra Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-white font-semibold tracking-wide text-lg">
              Mentivra
            </span>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Icon.svg"
            alt="Mentivra Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-white font-semibold tracking-wide text-lg">
            Mentivra
          </span>
        </Link>

        {/* Actions */}
        <div className="flex gap-10 text-sm text-gray-300 ml-auto">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-white hover:scale-105 transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="hover:text-white hover:scale-105 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-white mt-1 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-400 text-white hover:scale-105 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
