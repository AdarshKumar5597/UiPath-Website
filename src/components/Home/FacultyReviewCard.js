import React from 'react';

const FacultyReviewCard = ({ name, src }) => {
  return (
    <div className='relative flex items-center gap-x-4 bg-white p-2 frc'>
      <img src={src} alt="user" className="w-[80px] h-[80px] sm:w-[50px] sm:h-[50px] facultyImage rounded-full" />
      <div className='flex flex-col gap-y-1 justify-evenly'>
        <p className='font-bold text-lg md:text-base facultyText'>{name}</p>
      </div>
    </div>
  );
};

export default FacultyReviewCard;
