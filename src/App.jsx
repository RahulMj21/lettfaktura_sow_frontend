import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Terms from "./pages/terms";
import Dashboard from "./pages/dashboard";
import PriceList from "./pages/dashboard/priceList";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";

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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/pricelist",
    element: <PriceList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
