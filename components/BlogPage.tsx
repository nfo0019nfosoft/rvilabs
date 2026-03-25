"use client";

import { useEffect, useState } from "react";
import "@/styles/blog.css";
import { blogs as defaultBlogs } from "@/data/blog"; // ✅ better import

type Blog = {
  _id: string;
  title: string;
  description: string;
  content: string;
  image: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>(defaultBlogs);

  // ✅ crash avoid (if empty)
  const [selected, setSelected] = useState<Blog | null>(
    defaultBlogs.length > 0 ? defaultBlogs[0] : null
  );

  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setBlogs(data);
          setSelected(data[0]);
        }
      })
      .catch(() => console.log("Using default data"));
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blogs</h1> {/* 🔥 better title */}

      <div className="blog-layout">

        {/* LEFT */}
        <div className="blog-list">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className={`blog-card ${
                selected?._id === blog._id ? "active" : ""
              }`}
              onClick={() => setSelected(blog)}
            >
              <img src={blog.image} alt={blog.title} />
              <div>
                <p>{blog.title}</p>
                <small>{blog.description}</small> {/* 🔥 new */}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="blog-content">
          {selected && (
            <>
              <h2>{selected.title}</h2>
              <img src={selected.image} alt={selected.title} />
              <p className="desc">{selected.description}</p>
              <p>{selected.content}</p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}