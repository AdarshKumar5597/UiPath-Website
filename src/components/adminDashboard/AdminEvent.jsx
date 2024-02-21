import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../data/events_data";

export const AdminEvents = () => {
  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate("/admin/events/add");
  };
  const handleEventEdit = (id) => {
    navigate(`/admin/events/${id}`);
  };

  return (
    <div className="h-full w-full flex gap-2 p-2 overflow-x-hidden flex-col">
      <div className="w-full flex p-4">
        <h1 className=" w-full p-4">Events</h1>
        <button>
          <IoMdAdd size={25} onClick={() => handleAddEvent()} />
        </button>
      </div>
      <div className=" p-4 flex flex-wrap">
        {eventsData.map((event) => {
          return (
            <div className="w-3/4 md:w-1/4 bg-white border flex flex-col gap-3 shadow-xl p-6 h-fit">
              <h1 className=" text-2xl text-[#ff3f3a]">{event.date}</h1>
              <h1 className=" font-bold">{event.name}</h1>
              <p className=" line-clamp-3">{event.descripton}</p>
              <p>{event.venue}</p>
              <div className="w-full h-1/3 flex gap-2">
                <button
                  className="w-full p-2 rounded-xl border"
                  onClick={() => handleEventEdit(1234)}
                >
                  Edit
                </button>
                <button className="w-full p-2 rounded-xl border">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
