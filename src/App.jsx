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

// ERROR AND HELPERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="freebies" element={<Freebies />} />
      <Route path="book" element={<Book />} />
      <Route path="contact" element={<Contact />} />
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
