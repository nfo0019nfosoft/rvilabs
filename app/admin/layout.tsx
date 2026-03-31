"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();

  const isLoginPage = path === "/admin/login";
  const [isAuth, setIsAuth] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SIDEBAR_WIDTH = 210;

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuth(false);
        if (!isLoginPage) router.replace("/admin/login");
        return;
      }

      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        setIsAuth(false);
        router.replace("/admin/login");
      } else {
        setIsAuth(true);
      }
    } catch {
      localStorage.removeItem("token");
      setIsAuth(false);
      router.replace("/admin/login");
    }
  }, [router, path]);

  const linkStyle = (active: boolean) => ({
    padding: "10px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    color: active ? "#00d4ff" : "#cbd5e1",
    background: active ? "#111a2f" : "transparent",
    fontSize: "13.5px",
    fontWeight: 500,
    display: "block",
    transition: "0.2s",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b0f19" }}>
      
      {/* 🔥 SIDEBAR */}
      {!isLoginPage && isAuth && (
        <>
          {/* Overlay */}
          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 90,
              }}
            />
          )}

          <div
            style={{
              width: SIDEBAR_WIDTH,
              background: "#0a0f1c",
              padding: "18px",
              color: "white",
              borderRight: "1px solid #1f2a44",
              position: "fixed",
              top: 0,
              left: sidebarOpen ? 0 : "-230px",
              height: "100vh",
              zIndex: 100,
              transition: "0.25s",
            }}
          >
            {/* 🔥 Top (Title + Close) */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00d4ff",
                }}
              >
                ⚡ Admin Panel
              </h2>

              {/* ❌ Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="closeBtn"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {/* 🔥 Nav */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/admin/dashboard" style={linkStyle(path === "/admin/dashboard")}>
                📄 Blogs
              </Link>

              <Link href="/admin/careers" style={linkStyle(path === "/admin/careers")}>
                💼 Careers
              </Link>

              <Link href="/admin/contacts" style={linkStyle(path === "/admin/contacts")}>
                📥 Contacts
              </Link>
            </nav>

            {/* 🔥 Logout */}
            <button
              onClick={() => {
                localStorage.removeItem("token");
                router.replace("/admin/login");
              }}
              style={{
                marginTop: "25px",
                background: "#ff4d4f",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
                fontSize: "13px",
              }}
            >
              Logout
            </button>
          </div>
        </>
      )}

      {/* 🔥 MAIN */}
      <div
        style={{
          flex: 1,
          marginLeft: isAuth && !isLoginPage ? SIDEBAR_WIDTH : 0,
        }}
      >
        {/* 🔥 TOPBAR */}
        {!isLoginPage && isAuth && (
          <div
            style={{
              height: "55px",
              background: "#0f1629",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              borderBottom: "1px solid #1f2a44",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            {/* ☰ Hamburger */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hamburger"
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                display: "none",
              }}
            >
              ☰
            </button>

            <span style={{ color: "#94a3b8", fontSize: "13px" }}>
              Admin Dashboard
            </span>
          </div>
        )}

        {/* 🔥 CONTENT */}
        <div style={{ padding: "18px", color: "white" }}>
          {children}
        </div>
      </div>

      {/* 🔥 RESPONSIVE */}
      <style jsx>{`
        /* Desktop */
        @media (min-width: 768px) {
          div[style*="left: -230px"] {
            left: 0 !important;
          }
          .closeBtn {
            display: none;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hamburger {
            display: block !important;
          }

          .closeBtn {
            display: block;
          }

          div[style*="margin-left"] {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}