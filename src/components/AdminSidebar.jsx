export default function AdminSidebar() {
    return (
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">
              Productos
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">
              Usuarios
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-300">
              Pedidos
            </a>
          </li>
        </ul>
      </aside>
    );
  }