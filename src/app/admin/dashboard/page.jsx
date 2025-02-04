"use client";
import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminNavbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold">Panel de Administración</h1>
          <p>Contenido del dashboard...</p>
        </main>
      </div>
    </div>
  );
}