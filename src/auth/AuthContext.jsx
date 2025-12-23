import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Restore user on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data); // 👈 ONLY USER OBJECT
      })
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 🔐 Login
  async function login(email, password) {
    setLoading(true);

    const res = await api.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);

    // 🔥 IMPORTANT: store ONLY user fields
    setUser({
      _id: res.data._id,
      name: res.data.name,
      email: res.data.email,
      role: res.data.role,
    });

    setLoading(false);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  console.log("Auth restored:", user);


  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
