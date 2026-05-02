import Overview from "../../Pages/Dashboard/Overview/MainComp/Overview";
import Profile from "../../Pages/Dashboard/Profile/MainComp/Profile";
import DashboardNotFound from "../../Pages/Common/DashboardNotFound/DashboardNotFound";
export const AdminRoutes = [
  {
    index: true,
    element: <Overview />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <DashboardNotFound />,
  },
];
