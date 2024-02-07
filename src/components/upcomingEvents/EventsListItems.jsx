import React from 'react'
import { Link } from 'react-router-dom'

const EventsListItems = ({ index, data }) => {




  return (
    <div className={`${index !== 2 ? 'bg-white eventListItemShadow' : 'bg-transparent '} lg:h-auto grid lg:grid-cols-12 grid-cols-1 justify-items-center  gap-x-4 gap-y-8  lg:px-12 px-5 py-6 w-full  h-full z-50`}>

      {/* date */}
      <div className=' flex flex-row justify-center  space-x-5 lg:col-span-2 '>
        <p
          className='text-4xl font-bold '
          style={{ color: 'rgba(255, 63, 58, 1)' }}
        >
          {data?.date?.day}
        </p>
        <div className='flex flex-col '>
          <p className='font-bold'>
            {data?.date?.month} {data?.date?.year}
          </p>
          <p className='text-slate-500 text-sm'>
            {data?.time?.start} - {data?.time?.end}
          </p>
        </div>

      </div>

      <div className=' lg:col-span-8 lg:text-start text-center'>
        <p className='font-bold'>
          {data?.event}
        </p>
        <p className='text-slate-500'>meetup event</p>
      </div>


        <Link 
          className='lg:col-span-1 px-[1.5rem] py-2 lg:w-[8.5rem] text-center w-[10.5rem]  h-12 lg:my-3 lg:ml-20  hover:text-[#ff3f3a] hover:bg-[#ffffff] bg-[#ff3f3a] text-[#ffffff] rounded-md border-2 border-[#ff3f3a] cursor-pointer'
          to='https://www.instagram.com/usc.kiit?igsh=MWt5ejVkd3lpcGc4'
          >
          view more
        </Link>
       


    </div>
  )
}

export default EventsListItems