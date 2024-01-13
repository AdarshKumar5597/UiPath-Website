import React from 'react'
import User from "../../assets/images/user.jpeg"

const FacultyReviewCard = ({name}) => {
  return (
    <div className='relative flex items-center gap-x-7 bg-white p-2'>
        <img src={User} alt="user" className="w-[100px] h-[100px] rounded-full"/>
        <div className='flex flex-col gap-y-1 justify-evenly'>
          <p className=' font-bold text-xl'>{name}</p>
          <p className=' text-[#787A80] text-xl'>{name}</p>
        </div>
    </div>
  )
}

export default FacultyReviewCard