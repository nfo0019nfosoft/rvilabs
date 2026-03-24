    "use client";
import "./admin.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* 🔥 Sidebar */}
      <div
        style={{
          width: "240px",
          background: "#0a0f1c",
          padding: "20px",
          color: "white",
          borderRight: "1px solid #1f2a44",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>⚡ Admin Panel</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
          <Link
            href="/admin/dashboard"
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: path === "/admin/dashboard" ? "#00d4ff" : "white",
              background: path === "/admin/dashboard" ? "#111a2f" : "transparent",
              transition: "0.3s",
            }}
          >
            📄 Blogs
          </Link>

          <Link
            href="/admin/contacts"
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              color: path === "/admin/contacts" ? "#00d4ff" : "white",
              background: path === "/admin/contacts" ? "#111a2f" : "transparent",
              transition: "0.3s",
            }}
          >
            📥 Contacts
          </Link>
        </nav>

        {/* 🔥 Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("admin");
            router.push("/admin/login");
          }}
          style={{
            marginTop: "30px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Logout
        </button>
      </div>

      {/* 🔥 Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}