import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddPage from "../pages/AddPage";
import Edit from "../pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Add",
    element: <AddPage/>,
  },
  {
    path: "/Edit/:id",
    element: <Edit/>,
  },
]);
export default router