import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
      {
        path: "Edit/:id",
        element: <Edit />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard/",
  },
]);
export default router;
