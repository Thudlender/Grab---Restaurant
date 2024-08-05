import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Add",
    element: <AddPage />,
  },
  {
    path: "/Edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;