import React from 'react'

const EventsListItems = ({index}) => {
  return (
    <div className={`${index!==2?'bg-white eventListItemShadow':'bg-transparent '} h-[136.32px] px-16 flex flex-row space-x-10 w-[1330px]`}>
     
     {/* date */}
     <div className='mt-[36px] flex flex-row space-x-5'> 
         <p 
         className='text-4xl font-bold '
         style={{color:'rgba(255, 63, 58, 1)'}}
         >
            01
         </p>
         <div className='flex flex-col'>
          <p className='font-bold'>
            April
          </p>
          <p className='text-slate-500'>
            11:00 - 12:30
          </p>

         </div>

     </div>
     <div className='my-[36px] w-[818px] '>
         <p className='font-bold'>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <p className='text-slate-500'>online masterclass</p>
     </div>

     <button className='h-[48px] px-8 mt-[38px]  hover:text-[#ff3f3a] hover:bg-[#ffffff] bg-[#ff3f3a] text-[#ffffff] rounded-md border-2 border-[#ff3f3a]'>
        view more
     </button>
        
    </div>
  )
}

export default EventsListItems