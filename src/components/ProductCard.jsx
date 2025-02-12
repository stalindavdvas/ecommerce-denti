// src/components/ProductCard.jsx
"use client";
import Link from "next/link";
import axios from "axios";
import API_ENDPOINTS from "../config/apiEndpoints";

export default function ProductCard({ product }) {
  const handleAddToCart = async () => {
    try {
      // Enviar una solicitud POST al microservicio AddCart
      await axios.post(API_ENDPOINTS.ADDCART, {
        product_id: product.id,
        quantity: 1, // Por defecto, agregar 1 unidad
      });
      alert("Product add to cart");
    } catch (error) {
      console.error("Error to add cart:", error);
      alert("there is a error to add the product into cart");
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
    </div>
  );
}