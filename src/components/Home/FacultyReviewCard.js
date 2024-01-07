import React from 'react'
import User from "../../assets/images/user.jpeg"

const FacultyReviewCard = ({name}) => {
  return (
    <div className='box relative flex items-center justify-center shadow-lg shadow-black'>
        <div className='wave -one'></div>
        <img src={User} alt="user" className="absolute w-[90%] h-[80%] translate-y-[-15px] rounded-md shadow-sm shadow-yellow-300"/>
    </div>
  )
}

export default FacultyReviewCard