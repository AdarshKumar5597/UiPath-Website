import { CiCamera } from "react-icons/ci";
import { useParams } from "react-router-dom";

import recuitment from "./../../assets/images/latestPosts/WhatsApp Image 2024-01-15 at 00.32.31_e6178c13.jpg";
import { useRef } from "react";
import handleImageUpload from "../../utils/uploadImages";
export const GalleryEdit = (post) => {
  const { id } = useParams();
  const galleryImg = useRef();
  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden bg-white flex-col">
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full rounded-xl">
          <div className="h-full w-1/2">
            <h1 className=" font-bold mb-2">Title</h1>
            <input
              type="email"
              placeholder={post?.title || "Email"}
              className="border-2 w-full p-2 rounded-xl"
            />
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
                      onClick={() => galleryImg.current.click()}
                    >
                      <CiCamera
                        size={70}
                        style={{ margin: "auto", color: "black" }}
                      />
                      <input
                        type="file"
                        onChange={(e) => handleImageUpload(e, "gallery")}
                        className=" hidden"
                        ref={galleryImg}
                        multiple
                        accept="image/*"
                      />
                    </div>
                  ) : (
                    <>
                      <img src={recuitment} />
                    </>
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
