import { CiCamera } from "react-icons/ci";
import { useParams } from "react-router-dom";
import recuitment from "./../../assets/images/latestPosts/WhatsApp Image 2024-01-15 at 00.32.31_e6178c13.jpg";
import { useRef } from "react";
//import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

export const EventsEdit = (post) => {
  const handleImageUpload = (image) => {
    const filesUrl = [];
  };
  // const successCallBack = (result) => {
  //   const imgSrc = result.info.secure_url;
  //   console.log(imgSrc);
  // };
  const eventImg = useRef(null);
  const { id } = useParams();
  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden bg-white flex-col">
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full rounded-xl">
          <div className="h-full w-1/2">
            <h1 className=" font-bold mb-2">Event Name</h1>
            <input
              type="email"
              placeholder={post?.title || "Email"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Event Description</h1>
            <textarea
              placeholder={post?.description || "Description"}
              className="border-2 h-[30%] w-full p-2 rounded-xl"
            ></textarea>
            <h1 className=" font-bold mb-2">Venue</h1>
            <input
              type="text"
              placeholder={post?.domain || "Venue"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Registration Link</h1>
            <input
              type="text"
              placeholder={post?.link || "Registration Link"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">Event Date</h1>
            <input type="date" className="border-2 w-full p-2 rounded-xl" />
            <h1 className=" font-bold mb-2">Registration Started</h1>
            <select value={post?.type || false}>
              <option value={true}>True</option>
              <option value={false}>False</option>
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
                    <>
                      <CiCamera
                        size={70}
                        style={{ margin: "auto", color: "black" }}
                      />
                      {/* <WidgetLoader />
                      <Widget
                        cloudName={"dy0raom2p"}
                        uploadPreset={"ui-path"}
                        buttonText={"Upload Photo"}
                        onSuccess={successCallBack}
                        style={{
                          color: "black",
                          border: "none",
                          width: "120px",
                          backgroundColor: "white",
                          borderRadius: "4px",
                          position: "absolute",
                          bottom: "190px",
                          // height: "100%",
                          // width: "100%",
                        }}
                      /> */}

                      {/* <input
                          ref={eventImg}
                          type="file"
                          id="img"
                          className="h-full w-full hidden"
                          onChange={() => handleImageUpload}
                        />
                        <label
                          for="img"
                          className=" h-full w-full text-center underline text-blue-700"
                        > */}

                      {/* Select Event Image
                        </label> */}
                    </>
                  ) : (
                    <>
                      <img src={recuitment} />
                      {/*                       <WidgetLoader />
                      <Widget
                        cloudName={"dy0raom2p"}
                        uploadPreset={"ui-path"}
                        buttonText={"Upload Photo"}
                        onSuccess={successCallBack}
                        style={{
                          color: "black",
                          border: "none",
                          width: "120px",
                          backgroundColor: "white",
                          borderRadius: "4px",
                          // height: "100%",
                          padding: "20px",
                          width: "100%",
                          border: "1px solid black",
                        }}
                      /> */}
                      {/* <label
                        for="imgInput"
                        className="w-full p-2 rounded-xl text-center border"
                      >
                        Change Image
                      </label>
                      <input type="file" id="imgInput" className="hidden" /> */}
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
