import axios from "axios";
const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: token
    ? { Authorization: `Bearer ${token}` }
    : {},
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;

});

export default api;
