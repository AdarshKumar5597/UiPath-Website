import Navbar from "../main/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AdminLayout = (children) => {
  const [page, setPage] = useState("dashboard");
  const navigator = useNavigate();
  console.log(children);
  const handleDashboard = (page) => {
    setPage(page);
    navigator(`/admin/${page}`);
  };
  return (
    <div className="h-screen w-screen bg-[#f7f7fc]">
      <Navbar />
      <div className="h-full w-full flex pt-28">
        <div className="h-full w-1/5 bg-white p-10 border">
          <div className="flex flex-col gap-2 items-center">
            <h1
              className="p-5 border w-full bg-[#f7f7fc] text-center rounded-full"
              onClick={() => handleDashboard("")}
            >
              DashBoard
            </h1>
            <h1
              className="p-5 border w-full bg-[#f7f7fc] text-center rounded-full"
              onClick={() => handleDashboard("members")}
            >
              Members
            </h1>
            <h1
              className="p-5 border w-full bg-[#f7f7fc] text-center rounded-full"
              onClick={() => handleDashboard("projects")}
            >
              Projects
            </h1>
            <h1
              className="p-5 border w-full bg-[#f7f7fc] text-center rounded-full"
              onClick={() => handleDashboard("events")}
            >
              Events
            </h1>
            <h1
              className="p-5 border w-full bg-[#f7f7fc] text-center rounded-full"
              onClick={() => handleDashboard("posts")}
            >
              Posts
            </h1>
          </div>
        </div>
        <div className="h-full w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
