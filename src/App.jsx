import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Chapters from "./pages/Chapters";
import Questions from "./pages/Questions";
import Bookmarks from "./pages/Bookmarks";
import ProtectedRoute from "./auth/ProtectedRoute";

const REVAMP_MODE = true;

export default function App() {
  if (REVAMP_MODE) {
    return (
      <main className="revamp-screen">
        <div className="revamp-card">
          <p className="revamp-badge">Mentivra Platform Update</p>
          <h1>We are rebuilding this website</h1>
          <p>
            The frontend is temporarily blocked while we roll out a complete revamp
            for a better learning experience.
          </p>
          <p className="revamp-meta">
            Access will reopen once deployment is complete.
          </p>
        </div>
      </main>
    );
  }

  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/subjects/:examId" element={<Subjects />} />
            <Route path="/chapters/:subjectId" element={<Chapters />} />
            <Route path="/questions/:chapterId" element={<Questions />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
