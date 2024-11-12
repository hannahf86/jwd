import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { getPostById } from "../../Helpers/blogService";

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 pt-40">
        <p>Post not found</p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/blog"
        className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to blog
      </Link>
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <div className="text-gray-600 text-sm mb-8">
          {format(new Date(post.date), "MMMM d, yyyy")} • {post.author}
          <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full text-xs">
            {post.category}
          </span>
        </div>
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
