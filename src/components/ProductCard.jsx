export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
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