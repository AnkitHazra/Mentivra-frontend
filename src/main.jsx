import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-cubic",
});

// Render React App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ✅ REGISTER SERVICE WORKER (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker registered");
      })
      .catch((err) => {
        console.error("Service Worker registration failed:", err);
      });
  });
}
