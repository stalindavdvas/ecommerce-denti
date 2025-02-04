export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            {/* Image product */}
            <img
                src={product.image_url || "https://via.placeholder.com/150"} // Fallback if URL is not find.
                alt={product.name}
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150"; // Image backup
                }}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            {/* Name product */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {/* Description product */}
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            {/* Price */}
            <p className="text-gray-800 font-bold">${parseFloat(product.price).toFixed(2)}</p>
            {/* Buttons */}
            <div className="mt-4 flex justify-between">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    See Details
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                    Add Cart
                </button>
            </div>
        </div>
    );
}