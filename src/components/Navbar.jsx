import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import {useNavigate } from "react-router-dom";


export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-white"
        >
          Mentivra
        </Link>

        <div className="flex gap-6 text-sm text-gray-300">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
              <button onClick={()=>{
                logout();
                navigate("/login");
              }} className="hover:text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
