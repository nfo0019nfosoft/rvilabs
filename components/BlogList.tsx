import BlogCard from "./BlogCard";

export default function BlogList({ blogs, selected, setSelected }: any) {
  return (
    <div className="blog-list">
      {blogs.map((blog: any) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          active={selected?._id === blog._id}
          onClick={() => setSelected(blog)}
        />
      ))}
    </div>
  );
}