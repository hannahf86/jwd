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

// ERROR AND HELPERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="freebies" element={<Freebies />} />
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
