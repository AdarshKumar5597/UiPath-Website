import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

import recuitment from "./../../assets/images/latestPosts/WhatsApp Image 2024-01-15 at 00.32.31_e6178c13.jpg";
export const AdminPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/post?offset=3`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setAllPosts(resp.data);
      });
  }, []);

  return (
    <div className="h-full w-full flex gap-2 p-2 overflow-x-hidden flex-col">
      <div className="w-full h-fit flex p-4">
        <h1 className="w-full p-4">Posts</h1>
        <button>
          <IoMdAdd size={25} />
        </button>
      </div>
      <div className="h-full flex gap-4 flex-wrap w-full">
        {allPosts.map((post) => {
          return (
            <div className="w-[19%] h-fit bg-white flex flex-col gap-2 rounded-xl p-4 ">
              <img src={recuitment} />
              <div>
                <span>{post.domain}</span>
                <h1 className=" line-clamp-1">{post.title}</h1>
                <p className=" line-clamp-2">{post.description}</p>
              </div>
              <div className="w-full h-1/3 flex gap-2">
                <button className="w-full p-2 rounded-xl border">Edit</button>
                <button className="w-full p-2 rounded-xl border">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
