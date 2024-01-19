import React from "react";
import LeadData from "../../data/lead_data";
import { ReactComponent as Gmail } from "../../assets/icon/mail-fill.svg";
import { ReactComponent as Instagram } from "../../assets/icon/instagram-fill.svg";
import { ReactComponent as Linkedin } from "../../assets/icon/linkedin-fill.svg";
const Leads = () => {
    return (
        <div className="w-[100vw] h-[110vh] flex flex-col md:pl-[210px] pl-10  gap-y-5 pt-10 bg-white" style={{ 'font-family': 'Lato, sans-serif' }}>
            <div className="flex flex-col w-[full] h-[full] mb-3 md:w-[573px] md:h-[229px] md:mb-0">
                <p className="font-[Lato] text-lg font-bold text-gray-900">WE ARE</p>
                <p className="font-[Lato] text-4xl md:text-5xl mt-3 font-black text-gray-900">
                    Enthusiastic individuals working for extraordinary team.
                </p>
            </div>

            <div className="h-[450px] flex gap-x-5 max-w-[1250px] overflow-x-scroll scrollbar-hide">
                {LeadData.map((lead) => (
                    <div key={lead.index} className="w-[308.33px] h-[450px] flex-shrink-0 relative">

                        <div className="h-[367.84px] w-[308.33px] group relative items-center justify-center">

                            <img className="h-full w-full object-cover" src={lead.src} alt="lead" />

                            <div class="flex-row items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">

                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-tranzsparent to-black/50"></div>

                                <div className="flex flex-row items-center justify-end gap-2 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 relative bottom-14 right-4">
                                    <a href={lead.facebook} target="blank">
                                        <div className="rounded-full bg-gray-400 w-[34.62px] h-[34.62px] flex justify-center items-center">
                                            <Gmail className="hover:fill-[#fafafa] w-[17.31px] h-[17.31px]" />
                                        </div>
                                    </a>
                                    <a href={lead.instagram} target="blank">
                                        <div className="rounded-full bg-gray-400 w-[34.62px] h-[34.62px] flex justify-center items-center">
                                            <Instagram className="hover:fill-[#F52F6E] w-[17.31px] h-[17.31px]" />
                                        </div>
                                    </a>

                                    <a href={lead.linkedin} target="blank">
                                        <div className="rounded-full bg-gray-400 w-[34.62px] h-[34.62px] flex justify-center items-center">
                                            <Linkedin className="hover:fill-[#0077b5] w-[17.31px] h-[17.31px]" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <p className="flex justify-center items-center w-full h-8 font-bold text-xl leading-8 font-oswald text-gray-800">
                            {lead.name}
                        </p>
                        <p className="flex justify-center items-center w-full h-8 font-normal text-base leading-7 font-oswald text-gray-800">
                            {lead.postion}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leads;
