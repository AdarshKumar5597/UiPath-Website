import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import { SignInPage } from "../layout/signin/SignInPage";
import { AdminLayout } from "../layout/adminDashboard/DashboardLayout";
import { AdminMembers } from "../components/adminDashboard/AdminMembers";
import { MemberEdit } from "../components/adminDashboard/MemberEdit";
import { AdminProjects } from "../components/adminDashboard/AdminProjects";
import { AdminEvents } from "../components/adminDashboard/AdminEvent";
import { AdminDashboard } from "../components/adminDashboard/Dashboard";
import { AdminPosts } from "../components/adminDashboard/AdminPosts";
import { PostEdit } from "../components/adminDashboard/PostEdit";
import { DomainLayout } from "../layout/domain/DomainLayout";
import { ProjectEdit } from "../components/adminDashboard/ProjectEdit";
import ProjectPage from "../page/project";
import { Events } from "../page/Events";
import GalleryOne from "../page/GalleryOne";
import { EventsEdit } from "../components/adminDashboard/EventsEdit";
import { AdminGallery } from "../components/adminDashboard/AdminGallery";
import { GalleryEdit } from "../components/adminDashboard/GalleryEdit";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "*", element: <MainLayout /> }],
    },
    { path: "/domains", element: <DomainLayout /> },
    { path: "/events", element: <Events /> },
    { path: "/gallery", element: <ProjectPage /> },
    { path: "/gallery/:id", element: <GalleryOne /> },
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
        { path: "projects/add", element: <ProjectEdit /> },
        { path: "events", element: <AdminEvents /> },
        { path: "events/:id", element: <EventsEdit /> },
        { path: "posts", element: <AdminPosts /> },
        { path: "posts/:id", element: <PostEdit /> },
        { path: "gallery", element: <AdminGallery /> },
        { path: "gallery/:id", element: <GalleryEdit /> },
      ],
    },
  ]);
}
