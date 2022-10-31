import MarkdownBlog from "./components/MarkdownBlog";
const Blog = () => {
  return (
    <div className="mx-auto bg-gray-50 w-3/4">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Park </span>
          <span className="block text-cyan-600">Blog</span>
        </h2>
        <div className="mt-8">
          <MarkdownBlog />
        </div>
      </div>
    </div>
  );
};

export default Blog;
