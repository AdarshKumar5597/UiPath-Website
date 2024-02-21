import React from "react";
import Navbar from "../../layout/main/Navbar";
import Footer from "../../components/common/Footer.jsx";
import LeadData from "../../data/lead_data";

const Members = () => {
  return (
    <>
      <div className="min-h-[40vh] min-w-[1080px] overflow-x-clip bg-[#fedad3]">
        <Navbar />
        <div className="h-full mt-[108px] flex flex-wrap md:justify-center items-center ml-60">
          <p className="font-oswald text-2xl text-orange-600 lg:w-[400px] pt-10 pl-5 paraContainer">
            Members
          </p>
        </div>
        <div className="flex md:justify-center items-center mt-4">
          <h1 className="text-3xl font-bold pl-5 pb-2">
            Formation of the organizational
          </h1>
        </div>
        <div className="flex md:justify-center items-center mt-2">
          <h1 className="text-3xl font-bold pl-6 pb-2">
            structure of the community
          </h1>
        </div>
      </div>
      {/* Contents of card */}
      <div className="min-h-[100vh] grid p-4 lg:grid-cols-3 md:grid-cols-1 lg:gap-3 justify-items-center sm:justify-center md:justify-center">
        {LeadData.map((lead) => (
          <div className="py-8 max-w-sm " key={lead.id}>
            <div className="h-[480.84px] w-[422.33px] rounded overflow-hidden group relative shadow-lg max-w-sm ">
              <img
                src={lead.src}
                alt={lead.name}
                className="h-[370px] w-[422.33px] object-cover"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{lead.name}</div>
                <div className="text-gray-500">{lead.postion}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" min-w-[1080px] overflow-x-clip">
        <Footer />
      </div>
    </>
  );
};

export default Members;
