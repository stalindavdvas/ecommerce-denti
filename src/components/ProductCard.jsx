// src/components/ProductCard.jsx
"use client";
import Link from "next/link";
import axios from "axios";
import API_ENDPOINTS from "../config/apiEndpoints";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [message, setMessage] = useState(""); // Estado para el mensaje

  const handleAddToCart = async () => {
    try {
      // Enviar una solicitud POST al microservicio AddCart
      await axios.post(API_ENDPOINTS.ADDCART, {
        product_id: product.id,
        name: product.name, // Incluir el nombre del producto
        quantity: 1,       // Por defecto, agregar 1 unidad
        price: product.price, // Incluir el precio del producto
      });

      // Mostrar mensaje personalizado
      setMessage(`"${product.name}" (x1) ha sido agregado al carrito.`);
      setTimeout(() => setMessage(""), 3000); // Ocultar mensaje después de 3 segundos
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      setMessage("Hubo un error al agregar el producto al carrito.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Product Image */}
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150";
        }}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      {/* Product name */}
      <h3 className="text-lg font-semibold">{product.name}</h3>
      {/* Product Description */}
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      {/* Product price */}
      <p className="text-gray-800 font-bold">${parseFloat(product.price).toFixed(2)}</p>
      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <Link href={`/products/${product.id}`}>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            See Details
          </button>
        </Link>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
      {/* Mensaje de confirmación */}
      {message && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}