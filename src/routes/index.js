import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import { SignInPage } from "../layout/signin/SignInPage";
import { AdminLayout } from "../layout/adminDashboard/DashboardLayout";
import { AdminMembers } from "../components/adminDashboard/Members";
import { MemberEdit } from "../components/adminDashboard/MemberEdit";
import { AdminProjects } from "../components/adminDashboard/Projects";
import { AdminEvents } from "../components/adminDashboard/Events";
import { AdminDashboard } from "../components/adminDashboard/Dashboard";
import { AdminPosts } from "../components/adminDashboard/AdminPosts";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "*", element: <MainLayout /> }],
    },
    {
      path: "/signin",
      element: <SignInPage />,
      children: [{ path: "*", element: <SignInPage /> }],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "members", element: <AdminMembers /> },
        { path: "members/:id", element: <MemberEdit /> },
        { path: "projects", element: <AdminProjects /> },
        { path: "events", element: <AdminEvents /> },
        { path: "posts", element: <AdminPosts /> },
      ],
    },
  ]);
}
