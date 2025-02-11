// src/app/products/[id]/page.jsx
"use client";
import React from "react";
import axios from "axios";
import API_ENDPOINTS from "../../../config/apiEndpoints";

export default function ProductDetail({ params }) {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Desempaquetar `params` usando React.use()
  const id = React.use(params).id;

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.PRODUCTSID}/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setLoading(false);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen grande del producto */}
        <div className="flex justify-center">
          <img
            src={product.image_url || "https://via.placeholder.com/400"}
            alt={product.name}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400";
            }}
            className="w-full h-auto max-w-[400px] rounded-md shadow-md"
          />
        </div>
        {/* Detalles del producto */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-4">Description: {product.description}</p>
          <p className="text-gray-600 text-sm mb-4">Stock: {product.stock}</p>
          <p className="text-gray-800 text-2xl font-bold mb-6">Price: 
            ${parseFloat(product.price).toFixed(2)}
          </p>
          {/* Botón de agregar al carrito */}
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
           Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}