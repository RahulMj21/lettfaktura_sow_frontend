import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <div>Terms Page</div>,
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
