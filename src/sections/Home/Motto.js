import React, { useState } from 'react';
import MottoData from '../../data/motto';
import MottoCard from '../../components/Home/MottoCard';

const Motto = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center relative gap-y-5">
            <div className='flex max-w-[1080px] w-[1080px] items-center px-5'>
                <p className='font-oswald text-7xl text-orange-600 w-[400px]' style={{ backgroundImage: 'linear-gradient(45deg, red, orange, yellow)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    Our Motto
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
            <div className="max-w-[1080px] flex justify-evenly items-center">
                <div className="w-[1080px] h-[500px] bg-orange-500 rounded-3xl flex flex-row items-center justify-evenly">
                    {MottoData.map((motto, index) => (
                        <div
                            key={index}
                            className="transition-transform transform hover:scale-105"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <MottoCard
                                heading={motto.name}
                                desc={motto.description}
                                onHover={index === hoveredIndex}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Motto;
