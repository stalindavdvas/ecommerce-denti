"use client";
import Link from "next/link";
import { getCurrentUser, logout } from "../utils/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const user = getCurrentUser(); // Obtiene los datos del usuario
  const router = useRouter();
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para el contador del carrito

  // Simula la carga de la cantidad de productos en el carrito
  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        // Aquí deberías hacer una llamada a tu API para obtener la cantidad de productos en el carrito
        const response = await fetch("/api/cart/count"); // Endpoint ficticio
        const data = await response.json();
        setCartItemCount(data.count || 0);
      } catch (error) {
        console.error("Error al cargar el contador del carrito:", error);
      }
    };
    fetchCartItemCount();
  }, []);

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
          {/* Agregar el carrito */}
          <Link href="/cart" className="relative hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}