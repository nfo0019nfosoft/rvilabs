import Link from "next/link";

export default function BlogContent({ blog }: any) {
  if (!blog) {
    return <p>No blog selected</p>;
  }

  return (
    <div className="blog-content">
      <h2>{blog.title || "No Title"}</h2>

      <img
        src={
          blog.image
            ? blog.image.startsWith("http")
              ? blog.image
              : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.image}`
            : "/default-blog.jpg"
        }
        className="blog-main-img"
        alt={blog.title}
      />

      {/* ✅ SHOW DESCRIPTION ONLY IF EXISTS */}
      {blog.description && (
        <p className="desc">{blog.description}</p>
      )}

      <p>
        {blog.content
          ? blog.content.substring(0, 200) + "..."
          : ""}
      </p>

      {blog.slug && (
        <Link href={`/blog/${blog.slug}`}>
          <button className="read-more-btn">
            Read Full Blog →
          </button>
        </Link>
      )}
    </div>
  );
}