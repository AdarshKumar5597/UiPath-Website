import { domainData } from "../../data/domains";
import Navbar from "./../main/Navbar";
import img from "../../assets/images/leads/atri.jpg";
import Footer from "../../components/common/Footer.jsx";

export const DomainLayout = () => {
  return (
    <div className="min-h-[90vh] overflow-x-clip bg-[#fedad3]">
      <Navbar />
      <div className="h-[50vh] w-full bg-[#fedad3] flex justify-center items-center">
        <h1 className=" mt-36 font-semibold text-3xl md:text-5xl">
          OUR DOMAINS
        </h1>
      </div>
      <div className="h-full py-24 flex bg-[#fedad3] flex-wrap">
        {domainData.map((domain) => {
          return (
            <div className="h-1/2 flex flex-col">
              <h1 className="h-fit bg-white border font-bold border-slate-400 p-4 w-full text-black rounded-xl ml-12">
                {domain.name}
              </h1>
              <div className="w-full p-4 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 ">
                <div className="h-full w-1/2">
                  <p className="text-center">{domain.description}</p>
                </div>
                <div className="w-full md:w-1/2 h-full justify-around gap-4 flex">
                  {domain.leads.map((lead) => {
                    return (
                      <div className="h-1/2 w-1/2 md:w-1/3">
                        <img src={img} className="h-56 w-56" />
                        <div className="w-full h-fit flex flex-col justify-center items-center">
                          <h1>Name</h1>
                          <p className=" font-bold">Position</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
