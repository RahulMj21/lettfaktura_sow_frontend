import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Terms from "./pages/terms";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
