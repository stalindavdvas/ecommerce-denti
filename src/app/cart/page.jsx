// src/app/cart/page.jsx
"use client";
import axios from "axios";
import API_ENDPOINTS from "../../config/apiEndpoints";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GETCART);
        const items = Object.entries(response.data.items).map(([id, details]) => ({
          id,
          ...details,
        }));
        setCartItems(items);

        // Calcular el total
        const totalPrice = items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);
        setTotal(totalPrice);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      }
    };
    fetchCart();
  }, []);

  const handleUpdateQuantity = async (id, quantity) => {
    try {
      await axios.put(`${API_ENDPOINTS.UPDATE_CART}/${id}`, { quantity });
      // Actualizar el estado local
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`${API_ENDPOINTS.REMOVE_CART}/${id}`);
      // Actualizar el estado local
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td>${parseFloat(item.price).toFixed(2)}</td>
                  <td>${(item.quantity * parseFloat(item.price)).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-end">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}