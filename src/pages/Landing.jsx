import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-indigo-900/30" />

      {/* Glass Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
          JEE & NEET Preparation
          <span className="block text-indigo-400 mt-2">
            structured. calm. effective.
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Practice previous year questions chapter-wise with clarity and focus.
          Designed for serious aspirants and trusted by parents.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition"
          >
            Start Practicing
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-md border border-white/20 text-gray-200 hover:border-white/40"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
    