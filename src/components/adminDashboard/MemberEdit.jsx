import logo from "./../../assets/images/leads/atri.jpg";
import { FaRegUser } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
export const MemberEdit = () => {
  const [member, setMember] = useState({});
  const { id } = useParams();
  // const successCallBack = (result) => {
  //   const imgSrc = result.info.secure_url;
  //   console.log(imgSrc);
  // };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/members/${id}`, {
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
        setMember(resp.data);
      });
  }, [id]);
  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden flex-col">
      {id !== "add" && (
        <div className="w-full h-1/2">
          <div className="w-full h-full flex bg-[#3c4651] rounded-xl overflow-clip">
            <div className="h-full p-2 w-1/5 bg-white rounded-xl">
              <img src={logo} className=" h-full rounded-lg  object-contain" />
            </div>

            <div className="w-full relative h-full text-white p-2">
              <div className=" mt-4 w-fit h-fit">
                <h1>DOMAIN</h1>
                <h1 className="mb-1">NAME</h1>
                <h4>POSITION</h4>
              </div>
              <div className="absolute -bottom-4 right-10">
                <FaRegUser size={202} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full bg-white rounded-xl">
          <div className="h-full w-1/2">
            <h1 className=" font-bold mb-2">NAME</h1>
            <input
              type="email"
              placeholder={member?.name || "Hritesh"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">EMAIL</h1>
            <input
              type="text"
              placeholder={member?.email || "hritesh@gmail.com"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">DOMAIN</h1>
            <input
              type="text"
              placeholder={member?.domain || "HRITESH"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">POSITION</h1>
            <input
              type="text"
              placeholder={member?.position || "HRITESH"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">LINKEDIN</h1>
            <input
              type="text"
              placeholder={member?.linkedin_link || "HRITESH"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">INSTAGRAM</h1>
            <input
              type="text"
              placeholder={member?.insta_link || "HRITESH"}
              className="border-2 w-full p-2 rounded-xl"
            />
            <h1 className=" font-bold mb-2">GITHUB</h1>
            <input
              type="text"
              placeholder={member?.github_link || "HRITESH"}
              className="border-2 w-full p-2 rounded-xl"
            />
          </div>
          <div className="h-full w-1/2 p-4">
            <div className=" border-dashed border-4 rounded-xl h-full w-full">
              <div className="w-full flex flex-col h-full  justify-center items-center relative">
                <CiCamera size={70} style={{ margin: "auto" }} />
{/*                 <WidgetLoader />
                <Widget
                  cloudName={"dy0raom2p"}
                  uploadPreset={"ui-path"}
                  buttonText={"Upload Photo"}
                  onSuccess={() => successCallBack()}
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
                {/* <input type="file" id="img" className="h-full w-full hidden" />
                <label for="img">
                  <p className=" underline text-blue-700">
                    Select your profile image
                  </p>
                </label> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
