"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import API_ENDPOINTS from "../config/apiEndpoints";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.PRODUCTS);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos. Inténtalo más tarde.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
    {/* Imagen del producto */}
    <img
      src={product.image_url || "https://via.placeholder.com/150"} // Fallback si la URL no es válida
      alt={product.name}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/150"; // Imagen de respaldo
      }}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    {/* Nombre del producto */}
    <h3 className="text-lg font-semibold">{product.name}</h3>
    {/* Descripción del producto */}
    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
    {/* Precio del producto */}
    <p className="text-gray-800 font-bold">${parseFloat(product.price).toFixed(2)}</p>
    {/* Botones */}
    <div className="mt-4 flex justify-between">
      <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
        Ver detalles
      </button>
      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
        Agregar al carrito
      </button>
    </div>
  </div>
  );
}