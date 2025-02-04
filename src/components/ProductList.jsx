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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
          <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Ver detalles
          </button>
        </div>
      ))}
    </div>
  );
}