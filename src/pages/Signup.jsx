import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    await login(form.email, form.password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-indigo-900/30" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
          <h1 className="text-2xl font-semibold text-white mb-2">
            Create account
          </h1>
          <p className="text-gray-400 mb-8 text-sm">
            Start structured, distraction-free preparation
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Full name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-indigo-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-indigo-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 pr-12 text-white focus:outline-none focus:border-indigo-400"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>

            <button className="w-full mt-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium">
              Create account
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
