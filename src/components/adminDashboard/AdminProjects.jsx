import LeadData from "../../data/lead_data";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const AdminProjects = () => {
  const navigate = useNavigate();
  const handleAddProject = () => {
    navigate("/admin/projects/add");
  };
  return (
    <div className="h-full w-full overflow-scroll flex gap-2 p-4 overflow-x-hidden flex-wrap">
      <div className="w-full flex p-4 flex-col">
        <h1 className="w-full px-4 py-2 font-semibold text-[2rem] leading-[2.325] tracking-[0.5%]">
          Projects
        </h1>
        <div className="w-full flex justify-between px-4 h-fit items-center">
          <div className="w-[15.14vw] h-[1.5vh] flex justify-between items-center">
            <p className="text-[1rem] leading-[1.2rem] tracking-[0.5%] text-[#92929D] font-bold">
              All
            </p>
            <p className="text-[1rem] leading-[1.2rem] tracking-[0.5%] text-[#92929D] font-bold">
              Approved
            </p>
            <p className="text-[1rem] leading-[1.2rem] tracking-[0.5%] text-[#92929D] font-bold">
              Pending
            </p>
          </div>
          <button className="w-[48.5px] h-[48.5px] rounded-full bg-[#515977] flex justify-center items-center text-white font-bold">
            <IoMdAdd size={25} onClick={() => handleAddProject()} />
          </button>
        </div>
      </div>
      {LeadData.map((lead) => {
        return (
          <div className="w-[36.67vw] m-auto h-fit bg-white rounded-xl p-4 ">
            <div className=" flex items-center">
              <img
                src={lead.src}
                className=" h-[41.14px] w-[41.14px] rounded-[14px] object-cover"
              />
              <div className="w-full h-fit p-2">
                <h1 className="font-bold text-[24px] leading-[1.8rem] tracking-[0.5%]">
                  {lead.name}
                </h1>
                <h4 className="text-[14px] text-[#9A9AB0] font-bold">
                  {lead.postion}
                </h4>
              </div>
            </div>
            <div className="w-full h-fit p-4">
              <p className="text-[1rem] font-semibold text-[#92929D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                blanditiis aut dolorum quis id repellat. Eos id conse
              </p>
            </div>
            <div className="w-full h-1/3 flex gap-2 p-4">
              {/* <button
                className="w-full p-2 rounded-xl border"
                onClick={() => handleEdit(lead.name)}
              >
                Edit
              </button>
              <button className="w-full p-2 rounded-xl border">Delete</button> */}
              <p className="text-[14px] font-bold text-[#9A9AB0] tracking-[0.8%] leading-[1.5rem]">
                69 Feb 2069
              </p>
            </div>
          </div>
        );
      })}
      <div className="w-[73.7423vw] h-[4.8vh] flex justify-between p-4">
        <div className="w-[10.105vw] h-[1.67vh] flex">
          <p className="font-bold text-[#A5A5A5] text-[18px] leading-[2rem]">
            Showing <span className="font-bold text-black">6</span> out of{" "}
            <span className="font-bold text-black">40</span> data.
          </p>
        </div>
        <div className="w-[15.83vw] h-[4.2vh] flex justify-between items-center">
          <FaAngleLeft />
          <button className="w-[48.5px] h-[48.5px] rounded-full bg-[#515977] flex justify-center items-center text-white font-bold">
            1
          </button>
          <button className="w-[48.5px] h-[48.5px] rounded-full bg-[#515977] flex justify-center items-center text-white font-bold">
            2
          </button>
          <button className="w-[48.5px] h-[48.5px] rounded-full bg-[#515977] flex justify-center items-center text-white font-bold">
            3
          </button>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
