// REACT ROUTER DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUT
import RootNav from "./Components/RootNav";

// PAGES
import Landing from "./Pages/Landing";

// ERROR AND HELPERS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
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
