import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import PublicLayout from "../Layout/PublicLayout/PublicLayout";
import { AdminRoutes } from "./AdminRoutes/AdminRoutes";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import NotFound from "../Pages/Common/NotFound/Index";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: PublicRoutes,
  },
  { path: "dashboard", element: <AdminLayout />, children: AdminRoutes },
  { path: "*", element: <NotFound /> },
]);
