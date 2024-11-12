import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { searchPosts, getCategories } from "../../Helpers/BlogService";
import SearchBar from "./SearchBar";

export default function BlogOverview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const posts = searchPosts(searchTerm, selectedCategory);
  const categories = getCategories();

  return (
    <div id="blog" className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/blog/new"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Create New Post
        </Link>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      {posts.length === 0 ? (
        <p className="text-gray-600 text-center py-8">
          No posts found matching your criteria.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-8">
              <Link to={`/blog/${post.id}`} className="group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h2>
              </Link>
              <div className="text-gray-600 text-sm mb-3">
                {format(new Date(post.date), "MMMM d, yyyy")} • {post.author}
                <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <p className="text-gray-700">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
