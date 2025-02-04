import axios from "axios";
import API_ENDPOINTS from "../config/apiEndpoints";

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_ENDPOINTS.AUTH}/login`, credentials);
    const { token, user } = response.data;

    // Guarda el token y los datos del usuario en localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return { token, user }; // Retorna el token y los datos del usuario
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Usuario o contraseña incorrectos");
    }
    throw new Error("Error al iniciar sesión");
  }
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Retorna true si hay un token, false si no
};

// Función para obtener los datos del usuario actual
export const getCurrentUser = () => {
    if (typeof window === "undefined") {
      // Si estamos en el servidor, retorna null
      return null;
    }
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

// Función para cerrar sesión
export const logout = () => {
  localStorage.removeItem("token"); // Elimina el token
  localStorage.removeItem("user"); // Elimina los datos del usuario
  window.location.href = "/login"; // Redirige al login y recarga la página
};