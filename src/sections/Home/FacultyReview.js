import React from "react";
import FacultyReviewCard from "../../components/Home/FacultyReviewCard";
import FacultyData from "../../data/faculty_data";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const FacultyReview = () => {
  return (
    <div className="w-[100vw] h-[90vh] flex flex-col gap-y-5 bg-[#F4F5F6] items-center justify-center mt-[0px]">
      <div className="flex flex-col max-w-[1080px] w-[1080px] items-center justify-center gap-y-3">
        <p className="font-oswald text-xl text-black ">Testimonials</p>
        <p className="font-oswald text-5xl text-black">What Others Say</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Slider autoplay={1000}>
          {FacultyData.map((faculty, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-32 sliderCard bg-[#F4F5F6] py-5 lg:max-w-[1080px] md:max-w-[1080px]"
              // style={{ background: "no-repeat center center", backgroundColor: "#fff" }}
            >
              <div className="bg-white flex-wrap flex flex-col justify-evenly p-5 gap-y-3 reviewBox h-[400px] w-[1080px]">
                <p className="lg:text-xl md:text-lg sm:text-sm reviewText">
                  {faculty.review.length >= 630
                    ? faculty.review.slice(0, 630) + "..."
                    : faculty.review + " ".repeat(630 - faculty.review.length)}
                </p>
                <div>
                  <FacultyReviewCard name={faculty.name} src={faculty.src} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FacultyReview;
