import React from 'react'
import UserPic from '../../assets/images/why-uipath.jpg'

const WhyUi = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md: grid-cols-2'>
        <img className='w-[500px] mx-auto my-5' src={UserPic} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='font-semibold pl-5'>WHO WE ARE</p>
          <h1 className='text-3xl font-bold pl-5'>Why UiPath?</h1>
          <ul class='pl-6 pt-4'>
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
              <span class='text-orange-500 mr-2'>&#10004;</span> Beyond
              automation, the community encompasses various domains i.e,Mastery
              in
            </li>
            <li>
              <span class='text-orange-500 mr-2'>&#10004;</span> UiPath's
              robotic process automation. Exploration of web development, core
            </li>
            <li>
              <span class='pl-4 mr-2'></span> machine learning, RPA/AI, UI
              automation, and cloud computing.
            </li>
          </ul>
          <div className='pt-5 pl-11'>
            <a
              href="https://www.linkedin.com/company/uipath-community-kiit/'"
              class='bg-custom-orange text-white font-bold py-2 px-4 rounded pl-4'
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUi
