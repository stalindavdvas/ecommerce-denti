"use client"; // Esto es necesario porque usaremos hooks como useRouter
import { useRouter } from "next/navigation";
import { logout } from "../utils/auth";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Cierra la sesión
    router.push("/login"); // Redirige al login
  };

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">Panel de Administración</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}