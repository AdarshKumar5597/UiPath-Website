import React from 'react';
import FacultyReviewCard from '../../components/Home/FacultyReviewCard';
import FacultyData from '../../data/faculty_data';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const FacultyReview = () => {

    return (
        <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center relative gap-y-5 mt-[-80px]">
            <div className='flex max-w-[1080px] w-[1080px] items-center px-5'>
                <p className='font-oswald text-5xl text-orange-600 w-[400px]' style={{ backgroundImage: 'linear-gradient(45deg, red, orange, yellow)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    Faculty Reviews
                </p>
                <div className="flex relative items-center w-full">
                    <div className="h-[3px] rounded-full w-[700px] overflow-hidden absolute animate-width">
                        <div className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                    </div>
                    <div
                        className="bg-yellow-500 h-[30px] w-[30px] rounded-full flex items-center justify-center border border-yellow-500 absolute left-[715px] animate-ball">
                        <div className="bg-orange-500 h-[15px] w-[15px] rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
            <Slider autoplay={2000}>
                {FacultyData.map((faculty, index) => (
                    <div
                        key={index}
                        className='flex flex-row items-center justify-center p-2 gap-x-2'
                        style={{background:"no-repeat center center", backgroundColor:"#ffa500", width:"1080px"}}
                    >
                        <div className="transition-transform transform hover:scale-[102%]">
                            <FacultyReviewCard name={faculty.name} />
                        </div>
                        <div
                            className="bg-white rounded-md w-[500px] flex flex-col items-center justify-evenly h-[225px] shadow-md shadow-black font-bold font-oswald p-5"
                            style={{ background: 'linear-gradient(to right, white, yellow)' }}
                        >
                            <p>
                                <span className="text-superscript text-3xl">'' </span>
                                {faculty.review}
                            </p>
                            <span className="text-superscript text-3xl text-end w-[90%]">''</span>
                            <p className="text-end w-[100%]">By - {faculty.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default FacultyReview;
