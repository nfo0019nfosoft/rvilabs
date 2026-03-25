"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ✅ Fetch data
  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`)
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      });
  }, []);

  // ✅ Delete
  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${id}`, {
      method: "DELETE",
    });

    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  // ✅ Excel Export
  const exportToExcel = () => {
    const data = contacts.map((c) => ({
      Name: c.fullName,
      Email: c.email,
      Company: c.company,
      Phone: `${c.countryCode} ${c.phone}`,
      Message: c.message,
      Date: new Date(c.createdAt).toLocaleDateString(),
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Contacts");
    XLSX.writeFile(wb, "contacts.xlsx");
  };

  // ✅ Search filter
  const filteredContacts = contacts.filter((c) =>
    c.fullName.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={container}>
      <h1 style={heading}>📥 Contacts</h1>

      {/* 🔥 Top bar */}
      <div style={topBar}>
        <input
          type="text"
          placeholder="Search by name or email..."
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        <button onClick={exportToExcel} style={exportBtn}>
          📊 Export Excel
        </button>
      </div>

      {/* ⏳ Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr style={{ background: "#111a2f" }}>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Company</th>
                <th style={th}>Phone</th>
                <th style={th}>Message</th>
                <th style={th}>Date</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: "20px" }}>
                    No data found
                  </td>
                </tr>
              ) : (
                filteredContacts.map((c) => (
                  <tr key={c._id} style={row}>
                    <td style={td}>{c.fullName}</td>
                    <td style={td}>{c.email}</td>
                    <td style={td}>{c.company}</td>
                    <td style={td}>
                      {c.countryCode} {c.phone}
                    </td>
                    <td style={td}>{c.message}</td>
                    <td style={td}>
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                    <td style={td}>
                      <button
                        onClick={() => deleteContact(c._id)}
                        style={deleteBtn}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* 🔥 STYLES */

const container = {
  padding: "25px",
  color: "white",
};

const heading = {
  marginBottom: "15px",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
};

const searchInput = {
  padding: "10px",
  width: "300px",
  background: "#0d1326",
  border: "1px solid #1c2747",
  color: "white",
  borderRadius: "6px",
};

const exportBtn = {
  padding: "10px 15px",
  background: "#22c55e",
  border: "none",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const th = {
  padding: "12px",
  textAlign: "left" as const,
};

const td = {
  padding: "10px",
};

const row = {
  borderBottom: "1px solid #1c2747",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer",
};