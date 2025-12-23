import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Chapters from "./pages/Chapters";
import Questions from "./pages/Questions";
import Bookmarks from "./pages/Bookmarks";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
