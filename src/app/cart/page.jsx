"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/api/cart"); // Endpoint ficticio
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  if (loading) return <p>Cargando carrito...</p>;
  if (cartItems.length === 0) return <p>No hay productos en el carrito.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded-md">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${parseFloat(item.price).toFixed(2)}</p>
            </div>
            <div>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/checkout">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Proceder al Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}