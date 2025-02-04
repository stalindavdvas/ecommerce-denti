import './globals.css';
import Header from "../components/Header"; // Importa el componente Header

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Header /> {/* Usa el componente Header */}
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          &copy; 2025 DentiCommerce
        </footer>
      </body>
    </html>
  );
}