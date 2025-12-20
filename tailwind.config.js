export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        background: "#F8FAFC",
        accent: "#5EEAD4",
        muted: "#64748B"
      },
      backdropBlur: {
        glass: "12px"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(15,23,42,0.08)"
      }
    }
  },
  plugins: []
};
