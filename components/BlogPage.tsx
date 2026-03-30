"use client";

import { useEffect, useState } from "react";
import "@/styles/blog.css";

import BlogList from "./BlogList";
import BlogContent from "./BlogContent";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
    .then((res) => res.json())
    .then((data) => {
      console.log("BLOG DATA:", data); // 🔥 ADD THIS

      setBlogs(data);

      if (data.length > 0) {
        setSelected(data[0]);
      }
    });
}, []);

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blogs</h1>

      <div className="blog-layout">
        <BlogList
          blogs={blogs}
          selected={selected}
          setSelected={setSelected}
        />

        <BlogContent blog={selected} />
      </div>
    </div>
  );
}