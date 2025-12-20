export default function Footer() {
  return (
    <footer className="relative  border-t border-white/10 bg-black/40 backdrop-blur-md">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
        
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Mentivra
            </h3>
            <p className="leading-relaxed">
              A calm, structured platform for JEE & NEET preparation.
              Built for focused study, clarity, and long-term understanding.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>Practice Questions</li>
              <li>Chapter-wise PYQs</li>
              <li>Bookmarks</li>
              <li>Dashboard</li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white font-medium mb-3">
              Philosophy
            </h4>
            <ul className="space-y-2">
              <li>No distractions</li>
              <li>No flashy coaching tactics</li>
              <li>Designed for students & parents</li>
              <li>Academic-first approach</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Mentivra. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with focus, clarity, and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
