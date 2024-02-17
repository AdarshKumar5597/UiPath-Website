import LeadData from "../../data/lead_data";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
export const AdminMembers = () => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/admin/members/${id}`);
  };
  const handleAddMember = () => {
    navigate("/admin/members/add");
  };
  return (
    <div className="h-full w-full overflow-scroll flex gap-2 p-2 overflow-x-hidden flex-wrap">
      <div className="w-full flex p-4">
        <h1 className="w-full p-4">Members</h1>
        <button>
          <IoMdAdd size={25} onClick={() => handleAddMember()} />
        </button>
      </div>
      {LeadData.map((lead) => {
        return (
          <div className="w-[32%] m-auto h-fit bg-white rounded-xl p-4 ">
            <div className=" flex mb-6 h-20">
              <img
                src={lead.src}
                className=" h-full w-[30%] object-cover rounded-full"
              />
              <div className="w-full h-1/3 text-center p-2">
                <h1 className="mb-4">{lead.name}</h1>
                <h4>{lead.postion}</h4>
              </div>
            </div>
            <div className="w-full h-1/3 flex gap-2">
              <button
                className="w-full p-2 rounded-xl border"
                onClick={() => handleEdit(lead.name)}
              >
                Edit
              </button>
              <button className="w-full p-2 rounded-xl border">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
