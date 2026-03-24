async function getBlog(slug: string) {
  const res = await fetch(`http://localhost:5000/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  return (
    <div style={{ padding: "40px" }}>
      <h1>{blog.title}</h1>

      <p style={{ color: "gray" }}>
        {blog.date} • {blog.author}
      </p>

      <div style={{ marginTop: "20px" }}>
        {blog.content}
      </div>
    </div>
  );
}