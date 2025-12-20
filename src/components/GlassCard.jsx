export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl bg-white/70 backdrop-blur-glass shadow-glass border border-white/40 ${className}`}
    >
      {children}
    </div>
  );
}
