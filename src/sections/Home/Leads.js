import React from 'react';
import LeadData from '../../data/lead_data';
import UserPic from '../../assets/images/user.jpeg';

const Leads = () => {
    return (
        <div className="max-w-[1080px] mx-auto overflow-x-scroll">
            <div className='flex max-w-[1080px] w-[1080px] items-center px-5 relative mt-32'>
                <p className='font-oswald text-7xl text-orange-600 w-[400px]' style={{ backgroundImage: 'linear-gradient(45deg, red, orange, yellow)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    Our Leads
                </p>
                <div className="flex relative items-center w-full">
                    <div className="h-[5px] rounded-full w-[700px] overflow-hidden absolute animate-width">
                        <div className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                    </div>
                    <div
                        className="bg-yellow-500 h-[30px] w-[30px] rounded-full flex items-center justify-center border border-yellow-500 absolute left-[715px] animate-ball">
                        <div className="bg-orange-500 h-[15px] w-[15px] rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
            <div className="h-[500px] flex items-center gap-x-5 overflow-x-scroll">
                {LeadData.map((lead) => (
                    <div key={lead.index} className='w-[275px] h-[375px] bg-orange-500 rounded-lg flex-shrink-0 relative lead-card' >
                        <img src={UserPic} alt='lead' className="h-full w-full object-cover rounded-lg" />
                        <p className='absolute bottom-2 text-center w-full font-bold font-oswald text-white'>
                            {lead.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leads;
