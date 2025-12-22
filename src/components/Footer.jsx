export default function Footer() {
  return (
    <footer
      className="
        relative
        border-t border-white/10
        bg-gradient-to-b
        from-[#020617]
        via-indigo-950/40
        to-black
      "
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute -top-32 left-1/2 -translate-x-1/2
            w-[600px] h-[200px]
            bg-indigo-600/10
            blur-3xl rounded-full
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-14">
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-10 text-sm text-gray-400">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Mentivra
            </h3>
            <p className="leading-relaxed max-w-sm">
              A calm, structured platform for JEE & NEET preparation.
              Built for focused study, clarity, and long-term understanding.
            </p>
          </div>

          {/* Platform */}
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

          {/* Philosophy */}
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

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Meta row */}
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-center text-xs text-gray-300">
          <p>
            © {new Date().getFullYear()} Mentivra. All rights reserved.
          </p>

          <p>
            Built with focus, clarity, and care.
          </p>

          <p>
            Website developed and maintained by{" "}
            <a
              href="https://ankithazra.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              Ankit Hazra
            </a>
          </p>

          <p>
            Brainchild of Pritam Ghosh (MBBS, NRS Medical College, Kolkata)
          </p>
        </div>

        {/* Founder line */}
        <div className="mt-8 text-center text-sm text-gray-300">
          Founded by Ankit Hazra &amp; Pritam Ghosh — shaping the future of simple,
          credible learning.
        </div>
      </div>
    </footer>
  );
}
