"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import API_ENDPOINTS from "../../../config/apiEndpoints";
import { useRouter } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.PRODUCTS}/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${parseFloat(product.price).toFixed(2)}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => alert("Producto agregado al carrito")}
      >
        Agregar al carrito
      </button>
    </div>
  );
}