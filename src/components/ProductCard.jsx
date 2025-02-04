export default function ProductCard({ product }) {
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