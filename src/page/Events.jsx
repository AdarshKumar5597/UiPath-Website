import Footer from "../components/common/Footer.jsx";
import { eventsData } from "../data/events_data";
import Navbar from "../layout/main/Navbar";
export const Events = () => {
  return (
    <div className="min-h-[100vh] overflow-x-clip bg-white">
      <Navbar />
      <div className="h-[60vh] w-full bg-[#fedad3] flex flex-col justify-center items-center">
        <h1 className=" mt-18 font-semibold text-xl">OUR EVENTS</h1>
        <h1 className="font-semibold text-4xl text-center">
          Lectures,workshops & master-classes
        </h1>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute flex items-center justify-center flex-col md:flex-row flex-wrap gap-10 -top-16 z-10">
          {eventsData.map((event) => {
            return (
              <div className="w-3/4 md:w-1/4 bg-white border flex flex-col gap-3 shadow-xl p-6 h-1/3">
                <h1 className=" text-2xl text-[#ff3f3a]">{event.date}</h1>
                <h1 className=" font-bold">{event.name}</h1>
                <p className=" line-clamp-3">{event.descripton}</p>
                <p>{event.venue}</p>
                <a target="_blank" href={event.link}>
                  <button className=" mt-4 hover:bg-[#ff3f3a] hover:text-white w-full h-fit p-2 border-2 border-[#ff3f3a] text-[#ff3f3a] font-semibold">
                    LEARN MORE
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
