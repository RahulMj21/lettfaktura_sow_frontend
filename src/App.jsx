import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Terms from "./pages/terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard Page</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
