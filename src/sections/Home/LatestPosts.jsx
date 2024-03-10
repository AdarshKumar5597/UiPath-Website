import { CiCalendar } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import latestPosts from "../../data/latestPosts";
const LatestPosts = () => {
  const navigate = useNavigate();
  const navigateToBlogs = () => {
    navigate("/blogs");
  };
  const navigateToInsta = () => {
    window.open(
      "https://www.instagram.com/usc.kiit?igsh=Y3IyZzNnb2N0Y2V3",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div className="md:h-screen h-fit w-screen bg-[#ffffff]">
      <div className="h-full w-9/12 m-auto py-16">
        <div className="h-full w-full p-4">
          {/* <p className=" font-semibold text-sm mb-2">OUR BLOG</p> */}
          <div className="flex h-1/12 mb-14 justify-between items-center">
            <p className="text-4xl font-bold">Latest posts</p>
            <button
              className=" h-12 font-medium w-32 text-sm rounded-md bg-orange-600 text-center text-white"
              onClick={navigateToInsta}
            >
              Go to Instagram
            </button>
          </div>
          <div className="flex gap-8 flex-wrap justify-center flex-col md:flex-row">
            {latestPosts.map((post) => {
              return (
                <div className="flex h-10/12 md:w-1/4 justify-between">
                  <div className="h-full w-full flex flex-col gap-2">
                    <img
                      src={post.image_link}
                      className=" rounded-md h-56 w-72 md:w-full"
                    />
                    <div className="flex items-center h-6 justify-start gap-1 w-full">
                      <p className="text-xs font-medium text-[#4e515c]">
                        {post.domain} |
                      </p>
                      <CiCalendar size={15} style={{ display: "inline" }} />
                      <p className="text-xs font-medium text-[#4e515c]">
                        {post.date}
                      </p>
                      {/* <CiClock2 size={15} style={{ display: "inline" }} /> */}
                      <p className="text-xs font-medium text-[#4e515c]"></p>
                    </div>
                    <p className=" text-base font-bold text-[#4e515c]">
                      {post.title}
                    </p>
                    <div className="w-full h-30 mb-2">
                      <p className="line-clamp-2 text-[#4e515c] text-sm">
                        {post.description}
                      </p>
                    </div>
                    <a
                      href="https://www.instagram.com/p/C1_u4U8PyE5/?igsh=MmIzbDF3ajV5cjg="
                      target="_blank"
                    >
                      <div className="flex items-center justify-start">
                        <p className="mr-2 font-semibold text-sm">
                          {post.type}
                        </p>
                        <FaArrowRightLong style={{ color: "#ff3f3a" }} />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
