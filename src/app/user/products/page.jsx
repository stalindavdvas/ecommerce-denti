"use client"; // Esto es necesario si usas hooks o APIs específicas del cliente
import React from "react";
import ProductList from "../../../components/ProductList"; // Importa el componente ProductList

export default function UserProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a tu lista de productos</h1>
      <p className="text-gray-600 mb-8">
        Aquí puedes explorar todos los productos disponibles.
      </p>
      <ProductList />
    </div>
  );
}