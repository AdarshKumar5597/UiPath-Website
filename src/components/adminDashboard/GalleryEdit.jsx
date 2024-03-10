import { CiCamera } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import recuitment from "./../../assets/images/latestPosts/WhatsApp Image 2024-01-15 at 00.32.31_e6178c13.jpg";
import { useRef, useState } from "react";
import handleImageUpload from "../../utils/uploadImages";
export const GalleryEdit = (post) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const galleryImg = useRef();
  console.log(images);
  const handleSubmit = async () => {
    console.log(title);
    console.log(images);
    //const response = await handleImageUpload(images, "gallery");
    //console.log(response);
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + "gallery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          photoUrls: images,
        }),
      }
    );
    if (response.ok) {
      navigate("/admin/gallery");
    }
  };
  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden bg-white flex-col">
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full rounded-xl">
          <div className="h-full flex flex-col justify-between w-1/2">
            <div>
              <h1 className=" font-bold mb-2">Title</h1>
              <input
                type="email"
                placeholder={title || "Gallery Title"}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 w-full p-2 rounded-xl"
              />
            </div>
            <button
              className=" bg-blue-700 rounded-xl text-white h-fit w-full text-center p-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
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
                        onChange={async (e) => {
                          const res = await handleImageUpload(e.target.files);
                          setImages(res.data);
                        }}
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
