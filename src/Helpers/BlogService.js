// Blog data service
const blogData = {
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React and how to create your first component.",
      content: `React is a powerful library for building user interfaces. It allows you to create
      reusable UI components that manage their own state and render efficiently.
      
      In this post, we'll cover:
      - Setting up your first React project
      - Understanding components
      - Working with props and state
      - Handling events
      
      React's component-based architecture makes it easy to build scalable applications
      while maintaining clean and manageable code.`,
      date: "2023-12-20",
      author: "John Doe",
      category: "React Basics",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      excerpt: "Deep dive into React Hooks and their practical applications.",
      content: `Hooks are a revolutionary addition to React that allow you to use state and other
      React features without writing class components.
      
      We'll explore:
      - useState for state management
      - useEffect for side effects
      - useContext for context consumption
      - Custom hooks for reusable logic
      
      Hooks simplify your React components and make it easier to reuse stateful logic
      between components.`,
      date: "2023-12-19",
      author: "Jane Smith",
      category: "Advanced React",
    },
  ],
};

export const getAllPosts = () => blogData.posts;

export const getPostById = (id) => {
  return blogData.posts.find((post) => post.id === parseInt(id));
};

export const createPost = (post) => {
  const newPost = {
    ...post,
    id: blogData.posts.length + 1,
    date: new Date().toISOString().split("T")[0],
  };
  blogData.posts.unshift(newPost);
  return newPost;
};

export const searchPosts = (searchTerm, category) => {
  return blogData.posts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "" || post.category === category;

    return matchesSearch && matchesCategory;
  });
};

export const getCategories = () => {
  const categories = new Set(blogData.posts.map((post) => post.category));
  return Array.from(categories);
};
