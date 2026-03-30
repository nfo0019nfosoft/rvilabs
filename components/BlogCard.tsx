export default function BlogCard({
  blog,
  active,
  onClick,
}: any) {
  return (
    <div
      className={`blog-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {/* 🔥 IMAGE */}
      <img
        src={
          blog.image
            ? blog.image.startsWith("http")
              ? blog.image
              : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.image}`
            : "/default-blog.jpg"
        }
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "/default-blog.jpg";
        }}
        className="blog-thumb"
        alt={blog.title}
      />

      {/* TEXT */}
      <div className="blog-info">
        <p>{blog.title}</p>
        <small>{blog.description || ""}</small>
      </div>
    </div>
  );
}