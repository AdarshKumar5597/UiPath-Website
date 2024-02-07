import React from 'react'
import { dots, circle } from '../../assets/images/upcomingEvents'
import EventsListItems from '../../components/upcomingEvents/EventsListItems'
import { upcomingEvents } from '../../data'

const UpcomingEvents = () => {
    return (
        <div className=' w-full lg:h-[400px] h-auto overflow-hidden'>
            <div className='h-full backgroundEvents flex flex-col items-center  relative'>
                <img
                    src={circle}
                    className='absolute -top-16 -right-44'
                    alt=''
                />

                <div className="flex flex-col w-11/12 ">
                    
                    <div className='text-black text-center lg:mt-[80px] mt-[40px] '>
                        <p className='text-sm'>OUR EVENTS</p>
                        <p className='text-3xl font-bold'>Upcoming events</p>
                    </div>

                    <div className='lg:mt-[59px] flex flex-col space-y-6 m-2 '>

                        {
                            upcomingEvents?.map((item, index) =>
                                <React.Fragment key={index}>
                                    <EventsListItems index={index} data={item} />
                                </React.Fragment>
                            )
                        }

                    </div>
                </div>


                <img
                    src={dots}
                    className='absolute -bottom-9 left-0'
                    alt=''
                />

            </div>

        </div>

    )
}

export default UpcomingEvents