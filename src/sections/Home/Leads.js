import React from 'react';
import UserPic from '../../assets/images/user.jpeg';
import LeadData from '../../data/lead_data';
import { ReactComponent as Facebook } from '../../assets/icon/facebook-fill.svg';
import { ReactComponent as Instagram } from '../../assets/icon/instagram-fill.svg';
import { ReactComponent as Linkedin } from '../../assets/icon/linkedin-fill.svg';

const Leads = () => {
  return (
    <div className="w-full h-[570px] bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mt-12" src={UserPic} alt="/" />
        <div className="flex flex-col justify-center pt-2">
          <p className="font-semibold">WE ARE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Enthusiastic individuals working for an extraordinary team.
          </h1>
        </div>
      </div>
      <div className="h-[450px] flex gap-x-5 max-w-[1250px] overflow-x-scroll scrollbar-hide">
        {LeadData.map((lead) => (
          <div key={lead.index} className="w-[308.33px] h-[450px] flex-shrink-0 relative">
            <div className="h-[367.84px] w-[308.33px] group relative items-center justify-center">
              <img className="h-full w-full object-cover" src={UserPic} alt="lead" />
              <div class="flex-row items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
                <div className="flex flex-row items-center justify-end gap-2 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 relative bottom-14 right-4">
                  <a href={lead.facebook}>
                    <div className="rounded-full bg-gray-400 w-[34.62px] h-[34.62px] flex justify-center items-center">
                      <Facebook className="hover:fill-[#316FF6] w-[17.31px] h-[17.31px]" />
                    </div>
                  </a>
                  <a href={lead.instagram}>
                    <div className="rounded-full bg-gray-400 w-[34.62px] h-[34.62px] flex justify-center items-center">
                      <Instagram className="hover:fill-[#F52F6E] w-[17.31px] h-[17.31px]" />
                    </div>
                  </a>
                  <a href={lead.linkedin}>
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
