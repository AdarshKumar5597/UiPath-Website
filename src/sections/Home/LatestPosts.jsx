import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import YouthDay from "./../../assets/images/latestPosts/Brown Black Textured Daily Motivation Facebook Post.svg";
import challengeExtend from "./../../assets/images/latestPosts/Blue Professional Cyber Monday A4 Document.svg";
const LatestPosts = () => {
  const navigate = useNavigate();
  const navigateToBlogs = () => {
    navigate("/blogs");
  };

  return (
    <div className="md:h-screen h-fit w-screen bg-[#ffffff]">
      <div className="h-full w-9/12 m-auto py-16">
        <div className="h-full w-full p-4">
          <p className=" font-semibold text-sm mb-2">OUR BLOG</p>
          <div className="flex h-1/12 mb-14 justify-between items-center">
            <p className="text-4xl font-bold">Latest posts</p>
            <button
              className=" h-12 font-medium w-32 text-sm rounded-md bg-orange-600 text-center text-white"
              onClick={navigateToBlogs}
            >
              Go to blog
            </button>
          </div>
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="flex h-10/12 w-full justify-between">
              <div className="h-full w-full flex flex-col gap-2">
                <img
                  src={YouthDay}
                  className=" rounded-md h-56 w-72 md:w-full"
                />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Community |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    January 12, 2024
                  </p>
                  {/* <CiClock2 size={15} style={{ display: "inline" }} /> */}
                  <p className="text-xs font-medium text-[#4e515c]"></p>
                </div>
                <p className=" text-base font-bold text-[#4e515c]">
                  National Youth Day
                </p>
                <div className="w-full h-30 mb-2">
                  <p className="line-clamp-2 text-[#4e515c] text-sm">
                    STAND UP,BE BOLD,BE STRONG. TAKE THE WHOLE RESPONSIBILITY ON
                    YOUR OWN SHOULDERS, AND KNOW THAT YOU ARE THE CREATOR OF YOU
                    DESTINY.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/p/C1_u4U8PyE5/?igsh=MmIzbDF3ajV5cjg="
                  target="_blank"
                >
                  <div className="flex items-center justify-start">
                    <p className="mr-2 font-semibold text-sm">Read</p>
                    <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex h-10/12 w-full justify-between">
              <div className="h-full w-full flex flex-col gap-2">
                <img
                  src={challengeExtend}
                  className=" rounded-md h-56 w-72 md:w-full"
                />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Community |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    January 9, 2024
                  </p>
                  {/* <CiClock2 size={15} style={{ display: "inline" }} /> */}
                  <p className="text-xs font-medium text-[#4e515c]"></p>
                </div>
                <p className=" text-base font-bold text-[#4e515c]">
                  UiPath Automation Explorer Challenge
                </p>
                <div className="w-full h-30 mb-2">
                  <p className="line-clamp-2 text-[#4e515c] text-sm">
                    Great News, UiPath enthusiasts! Due to overwhelming demand
                    and your unwavweing passion for automation excellence, we're
                    thrilled to annoince that we're extending the deadline for
                    the UiPath Challenge!
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/p/C14kALBBJdk/?igsh=MWhxejlra2oya3dtNQ=="
                  target="_blank"
                >
                  <div className="flex items-center justify-start">
                    <p className="mr-2 font-semibold text-sm">Read</p>
                    <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex h-10/12 w-full justify-between">
              <div className="h-full w-full flex flex-col gap-2">
                <img src="https://martechseries.com/wp-content/uploads/2019/07/UiPath-Named-a-Leader-in-the-2019-Gartner-Magic-Quadrant-for-Robotic-Process-Automation.jpg" />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Automation |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    April 1, 2020
                  </p>
                  {/* <CiClock2 size={15} style={{ display: "inline" }} /> */}
                  <p className="text-xs font-medium text-[#4e515c]"></p>
                </div>
                <p className=" text-base font-bold text-[#4e515c]">
                  What is traffic arbitrage and does it really make money?
                </p>
                <div className="w-full h-30 mb-2">
                  <p className="line-clamp-2 text-[#4e515c] text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam omnis nobis ab tempore obcaecati sunt labore,
                    aliquid quod explicabo animi aspernatur dolores ut
                    voluptates commodi iure ducimus asperiores eum voluptate!
                  </p>
                </div>
                <div className="flex items-center justify-start">
                  <p className="mr-2 font-semibold text-sm">Read</p>
                  <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
