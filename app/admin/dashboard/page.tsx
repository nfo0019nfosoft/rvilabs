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
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

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
    } catch {
      localStorage.removeItem("token");
      router.replace("/admin/login");
    }
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
        { headers: getAuthHeaders() }
      );

      const data = await res.json();
      setBlogs(data);
    } catch {
      router.replace("/admin/login");
    }
  };

  const handleAdd = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        title,
        slug,
        description,
        content,
        image: image || "/default-blog.jpg",
      }),
    });

    resetForm();
    fetchBlogs();
  };

  // ✅ FIXED EDIT
  const handleEdit = (blog: any) => {
    setEditId(blog._id);
    setTitle(blog.title || "");
    setSlug(blog.slug || "");
    setDescription(blog.description || "");
    setContent(blog.content || "");
    setImage(blog.image || "");
  };

  const handleUpdate = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${editId}`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title,
          slug,
          description,
          content,
          image: image || "/default-blog.jpg",
        }),
      }
    );

    resetForm();
    fetchBlogs();
  };

  const handleDelete = async (id: string) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );

    fetchBlogs();
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setSlug("");
    setDescription("");
    setContent("");
    setImage("");
  };

  if (loadingAuth) {
    return <div className="loading">Checking auth...</div>;
  }

  return (
    <div className="admin-layout">
      <main className="content">
        <h1>📄 Blog Manager</h1>

        {/* FORM */}
        <div className="form">
          <input
            placeholder="Title"
            value={title || ""}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(generateSlug(e.target.value));
            }}
          />

          <input
            placeholder="Slug"
            value={slug || ""}
            onChange={(e) => setSlug(e.target.value)}
          />

          <input
            placeholder="Short Description"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            placeholder="Content"
            value={content || ""}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            placeholder="Image URL"
            value={image || ""}
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

        {/* BLOG LIST */}
        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog._id} className="card">
              <img
                src={blog.image || "/default-blog.jpg"}
                className="blog-img"
              />

              <h3>{blog.title}</h3>
              <p>{blog.description}</p>

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