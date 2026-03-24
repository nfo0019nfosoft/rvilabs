"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../admin.css";

export default function Dashboard() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  // 🔥 AUTH HEADER HELPER (MAIN FIX)
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    console.log("TOKEN USED:", token);

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // 🔐 AUTH CHECK
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/admin/login");
        return;
      }

      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.replace("/admin/login");
        return;
      }

      fetchBlogs();
      setLoadingAuth(false);
    } catch (err) {
      localStorage.removeItem("token");
      router.replace("/admin/login");
    }
  }, [router]);

  // 📥 FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        headers: getAuthHeaders(),
      });

      if (!res.ok) throw new Error("Unauthorized");

      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      router.replace("/admin/login");
    }
  };

  // ➕ ADD BLOG
  const handleAdd = async () => {
    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ title, content, image }),
    });

    resetForm();
    fetchBlogs();
  };

  // ✏️ EDIT
  const handleEdit = (blog: any) => {
    setEditId(blog._id);
    setTitle(blog.title);
    setContent(blog.content);
    setImage(blog.image || "");
  };

  // 💾 UPDATE
  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/api/blogs/${editId}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ title, content, image }),
    });

    resetForm();
    fetchBlogs();
  };

  // 🗑️ DELETE
  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    fetchBlogs();
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setContent("");
    setImage("");
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/admin/login");
  };

  if (loadingAuth) {
    return <div className="loading">Checking auth...</div>;
  }

  return (
    <div className="admin-layout">
    

      <main className="content">
        <h1>📄 Blog Manager</h1>

        <div className="form">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {editId ? (
            <button className="btn primary" onClick={handleUpdate}>
              Update Blog
            </button>
          ) : (
            <button className="btn primary" onClick={handleAdd}>
              Add Blog
            </button>
          )}
        </div>

        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog._id} className="card">
              {blog.image && (
                <img src={blog.image} className="blog-img" />
              )}

              <h3>{blog.title}</h3>
              <p>{blog.content}</p>

              <div className="btns">
                <button
                  className="btn edit"
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}