import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyuMkIdyF9eEgud9JWMWsEN5dYgghXC9X1253qj3FXlVFjB9cnQD2Bosu2rFjWeEYVXc&usqp=CAU"
                  className=" rounded-md h-56 w-72 md:w-full"
                />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Automation |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    April 1, 2020 |{" "}
                  </p>
                  <CiClock2 size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">36 min</p>
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
                  <p className="mr-2 font-semibold text-sm">Listen</p>
                  <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                </div>
              </div>
            </div>
            <div className="flex h-10/12 w-full justify-between">
              <div className="h-full w-full flex flex-col gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyuMkIdyF9eEgud9JWMWsEN5dYgghXC9X1253qj3FXlVFjB9cnQD2Bosu2rFjWeEYVXc&usqp=CAU"
                  className=" rounded-md h-56 w-72 md:w-full"
                />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Automation |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    April 1, 2020 |{" "}
                  </p>
                  <CiClock2 size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">36 min</p>
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
                  <p className="mr-2 font-semibold text-sm">Listen</p>
                  <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                </div>
              </div>
            </div>
            <div className="flex h-10/12 w-full justify-between">
              <div className="h-full w-full flex flex-col gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyuMkIdyF9eEgud9JWMWsEN5dYgghXC9X1253qj3FXlVFjB9cnQD2Bosu2rFjWeEYVXc&usqp=CAU"
                  className=" rounded-md h-56 w-72 md:w-full"
                />
                <div className="flex items-center h-6 justify-start gap-1 w-full">
                  <p className="text-xs font-medium text-[#4e515c]">
                    Automation |
                  </p>
                  <CiCalendar size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">
                    April 1, 2020 |{" "}
                  </p>
                  <CiClock2 size={15} style={{ display: "inline" }} />
                  <p className="text-xs font-medium text-[#4e515c]">36 min</p>
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
                  <p className="mr-2 font-semibold text-sm">Listen</p>
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
