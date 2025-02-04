"use client";
import Link from "next/link";
import { getCurrentUser, logout } from "../utils/auth";
import { useRouter } from "next/navigation";

export default function Header() {
  const user = getCurrentUser(); // Obtiene los datos del usuario
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Cierra la sesión
    router.push("/login"); // Redirige al login
  };

  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">DentiCommerce</h1>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/products" className="hover:underline">
            Productos
          </Link>
          {!user && (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}
          {user && (
            <>
              <span className="text-gray-300">Hola, {user.username}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
                Cerrar Sesión
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}