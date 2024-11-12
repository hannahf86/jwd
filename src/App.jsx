// REACT ROUTER DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// LAYOUT
import RootNav from "./Layout/RootNav";

// PAGES
import Landing from "./Pages/Landing";
import Freebies from "./Pages/Freebies";
import Contact from "./Pages/Contact";
import Book from "./Pages/Book";
import Services from "./Pages/Services";
import FaqsFull from "./Pages/FaqsFull";
import UIDesign from "./Pages/Services/UIDesign";
import UXResearch from "./Pages/Services/UXResearch";
import Hosting from "./Pages/Services/Hosting";
import Development from "./Pages/Services/Development";
import Seo from "./Pages/Services/SEO";
import Projects from "./Pages/Projects";
import FastTrack from "./Pages/Services/FastTrack";
import StartUp from "./Pages/Services/StartUp";
import Reviews from "./Pages/Reviews";

// COMPONENTS
import BlogOverview from "./Components/Blog/BlogOverview";
import CreatePost from "./Components/Blog/CreatePost";
import BlogPost from "./Components/Blog/BlogPost";

// ERROR AND HELPERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="freebies" element={<Freebies />} />
      <Route path="book" element={<Book />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faqs-full" element={<FaqsFull />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="reviews" element={<Reviews />} />

      {/* SERVICES */}
      <Route path="ui-design" element={<UIDesign />} />
      <Route path="ux-research" element={<UXResearch />} />
      <Route path="hosting" element={<Hosting />} />
      <Route path="development" element={<Development />} />
      <Route path="seo-services" element={<Seo />} />
      <Route path="fast-track" element={<FastTrack />} />
      <Route path="start-up" element={<StartUp />} />

      {/* BLOG */}
      <Route path="/blog" element={<BlogOverview />} />
      <Route path="/blog/new" element={<CreatePost />} />
      {/* BLOG POSTS */}
      <Route path="/blog/:id" element={<BlogPost />} />
      {/* BLOG SEARCH */}
      <Route path="/" element={<Navigate to="/blog" replace />} />

      {/* ERROR HANDLING */}
    </Route>,
  ),
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
