// REACT ROUTER DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
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
import Projects from "./Pages/Projects";
import FastTrack from "./Pages/Packages/FastTrack";
import StartUp from "./Pages/Packages/StartUp";
import Reviews from "./Pages/Reviews";
import UiDev from "./Pages/Packages/UiDev";
import UxSeo from "./Pages/Packages/UxSeo";
import Hosting from "./Pages/Packages/Hosting";
import AfterCare from "./Pages/Packages/AfterCare";
import Blog from "./Pages/Blog/Blog";
import LocalSEOArticle from "./Pages/Blog/Posts/LocalSEOArticle";

// LOCATIONS
import LandingHarrogate from "./Pages/Location/LandingHarrogate";

// COMPONENTS
// import BlogOverview from "./Components/Blog/BlogOverview";
// import CreatePost from "./Components/Blog/CreatePost";
// import BlogPost from "./Components/Blog/BlogPost";
// import Login from "./Components/Login";

// ERROR AND HELPERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      {/* LOCATION */}
      <Route path="harrogate" element={<LandingHarrogate />} />

      {/* PAGES */}
      <Route path="freebies" element={<Freebies />} />
      <Route path="book" element={<Book />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faqs-full" element={<FaqsFull />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="reviews" element={<Reviews />} />

      {/* SERVICES */}
      <Route path="ui-dev" element={<UiDev />} />
      <Route path="ux-seo" element={<UxSeo />} />
      <Route path="hosting" element={<Hosting />} />
      <Route path="aftercare" element={<AfterCare />} />
      <Route path="fast-track" element={<FastTrack />} />
      <Route path="start-up" element={<StartUp />} />

      {/* BLOG */}
      <Route path="blog" element={<Blog />} />
      <Route path="local-seo" element={<LocalSEOArticle />} />

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
