import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // attach token and auto-login
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api.get("/auth/me")
      .then(res => {
        setUser({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          role: res.data.role
        });
      })
      .catch(() => {
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
        setUser(null);
      });

  }, []);

  async function login(email, password) {
    const res = await api.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);

    api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

    setUser({
      _id: res.data._id,
      name: res.data.name,
      email: res.data.email,
      role: res.data.role
    });
  }

  function logout() {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
