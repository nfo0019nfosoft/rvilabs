"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "@/styles/blogDetails.css";
import ReactMarkdown from "react-markdown";

export default function BlogDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [slug]);

  if (!blog) return <p className="loading">Loading...</p>;

  return (
    <div className="blog-details">

      {/* 🔥 HERO */}
      <div className="hero">
        <img
          src={
            blog.image
              ? blog.image.startsWith("http")
                ? blog.image
                : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.image}`
              : "/default-blog.jpg"
          }
        />
        <div className="overlay">
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </div>

      {/* 📖 CONTENT */}
     
<div className="content">
  <ReactMarkdown>{blog.content}</ReactMarkdown>
</div>

    </div>
  );
}