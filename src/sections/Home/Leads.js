import React from 'react'
import UserPic from '../../assets/images/why-uipath.jpg'

const Leads = () => {
  return (
    <div className='w-full h-[570px] bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mt-12' src={UserPic} alt='/' />
        <div className='flex flex-col justify-center pt-2'>
          <p className='font-semibold'>WHO WE ARE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Why UiPath?
          </h1>
          <p>
            <ul class='pl-1 pt-3'>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> A vibrant hub
                within the global network of aspiring minds.
              </li>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> Dedicated to
                empowering the next generation of developers.
              </li>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> A dynamic
                collective where technology meets creativity.
              </li>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> Offers a
                comprehensive platform for holistic development.
              </li>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> Commitment to
                nurturing skills that go beyond traditional boundaries.
              </li>
              <li>
                <span class='text-orange-500 mr-2'>&#10004;</span> Beyond
                automation, the community encompasses various domains i.e,
                Mastery in
              </li>
              <li className='pl-6'>
                <span class='none mr-5'>
                  UiPath's robotic process automation, Exploration of web
                  development, core machine learning, RPA/AI, UI automation, and
                  cloud computing.
                </span>
              </li>
            </ul>
          </p>
          <div className='pt-6 pl-6'>
            <button class='bg-custom-orange hover: bg-custom-backg text-white font-semibold pl-4 py-2 px-4 rounded'>
              Connect, learn & Collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leads
