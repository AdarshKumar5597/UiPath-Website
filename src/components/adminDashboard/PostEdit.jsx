import { CiCamera } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import recuitment from "./../../assets/images/latestPosts/WhatsApp Image 2024-01-15 at 00.32.31_e6178c13.jpg";

import handleImageUpload from "../../utils/uploadImages";
export const PostEdit = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const postImg = useRef();
  const updateImg = useRef();
  console.log(id);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/post/${id}`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setPost(resp.data);
      });
  }, [id]);

  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden bg-white flex-col">
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full rounded-xl">
          <div className="h-full w-1/2">
            <h1 className=" font-bold mb-2">Post Title</h1>
            <input
              type="email"
              placeholder={post?.title || "Email"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Post Description</h1>
            <textarea
              placeholder={post?.description || "Description"}
              className="border-2 h-[30%] w-full p-2 rounded-xl"
            ></textarea>
            <h1 className=" font-bold mb-2">Domain</h1>
            <input
              type="text"
              placeholder={post?.domain || "Domain"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Link</h1>
            <input
              type="text"
              placeholder={post?.link || "Post Link"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Type</h1>
            <select value={post?.type || "Read"}>
              <option>Read</option>
              <option>Listen</option>
              <option>Watch</option>
            </select>
          </div>
          <div className="h-full w-1/2 p-4">
            <div className="  rounded-xl h-full w-full">
              <div
                className={` w-full flex h-full flex-col gap-4 justify-center items-center
                 ${id === "add" && "border-4 border-dashed"}  
                `}
              >
                <div
                  className={`w-full flex flex-col gap-2  ${
                    id === "add"
                      ? "justify-center relative items-center h-full"
                      : "h-full"
                  }`}
                >
                  {id === "add" ? (
                    <div
                      className=" h-full w-full flex"
                      onClick={() => postImg.current.click()}
                    >
                      <CiCamera size={70} style={{ margin: "auto" }} />
                      <input
                        type="file"
                        onChange={(e) => handleImageUpload(e, "posts")}
                        className=" hidden"
                        ref={postImg}
                      />
                    </div>
                  ) : (
                    <div
                      className="h-full w-full flex"
                      onClick={() => updateImg.current.click()}
                    >
                      <img src={recuitment} />
                      <input
                        type="file"
                        onChange={(e) => handleImageUpload(e, "posts")}
                        className=" hidden"
                        ref={updateImg}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
