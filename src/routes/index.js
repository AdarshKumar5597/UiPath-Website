import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";




export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "*", element: <MainLayout /> },
            ],
        },
    ]);
}