import React from 'react'
import {Link} from 'react-router-dom'

const EventsListItems = ({index,data}) => {



  return (
    <div className={`${index!==2?'bg-white eventListItemShadow':'bg-transparent '} h-[136.32px] px-16 flex flex-row space-x-8 w-[1390px]`}>
     
     {/* date */}
     <div className='mt-[36px] flex flex-row space-x-5'> 
         <p 
         className='text-4xl font-bold '
         style={{color:'rgba(255, 63, 58, 1)'}}
         >
            {data?.date?.day}
         </p>
         <div className='flex flex-col'>
          <p className='font-bold'>
            {data?.date?.month} {data?.date?.year}
          </p>
          <p className='text-slate-500'>
            {data?.time?.start} - {data?.time?.end}
          </p>

         </div>

     </div>
     <div className='my-[36px] w-[818px] '>
         <p className='font-bold'>
        {data?.event}
         </p>
         <p className='text-slate-500'>meetup event</p>
     </div>

    <Link to='https://www.instagram.com/usc.kiit?igsh=MWt5ejVkd3lpcGc4'>
     <button className='h-[48px] px-8 mt-[38px]  hover:text-[#ff3f3a] hover:bg-[#ffffff] bg-[#ff3f3a] text-[#ffffff] rounded-md border-2 border-[#ff3f3a]'>
        view more
     </button>
    </Link> 
    </div>
  )
}

export default EventsListItems