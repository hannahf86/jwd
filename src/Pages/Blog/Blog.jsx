// REACT ROUTER DOM
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div id="blog" className="pt-40 mx-8 lg:mx-40">
      {/* Blog Header */}
      <header className="text-center mb-12">
        <h1 className="text-green text-xl lg:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-black/80 text-base italic">
          Insights and updates on the latest in digital marketing, SEO, and
          more!
        </p>
      </header>

      <main className="flex flex-col space-y-8">
        {/* ARTICLE ONE */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-lg font-semibold text-green mb-2">
              Maximizing Local SEO for Small Businesses: A Friendly Guide
            </h2>
            <p className="text-gray-700 text-md line-clamp-1"></p>
            <Link to="/local-seo" className="flex items-center text-green mt-4">
              <span className="text-sm font-bold">Read more</span>
            </Link>
          </div>
        </section>

        {/* ARTICLE TWO */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-lg font-semibold text-green mb-2">
              Essential Features for Small Business Websites
            </h2>
            <p className="text-gray-700 text-md line-clamp-1"></p>
            <Link
              to="/small-bus-website"
              className="flex items-center text-green mt-4">
              <span className="text-sm font-bold">Read more</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
