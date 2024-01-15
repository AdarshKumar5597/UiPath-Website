import React, { useState } from 'react'
import MottoData from '../../data/motto'
import MottoCard from '../../components/Home/MottoCard'

const WeBelieve = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className='bg-custom-backg w-[100vw] h-[90vh] flex flex-col justify-center items-center gap-y-5'>
      <div className='flex max-w-[1080px] w-[1080px] items-center px-5'>
        <p
          className='font-oswald text-5xl text-orange-600 w-[400px] ml-12'
          style={{
            backgroundImage: 'linear-gradient(45deg, red, orange, yellow)',
            WebkitBackgroundClip: 'text',
            color: 'black',
          }}
        >
          We believe in
        </p>
        <div className='flex relative items-center w-full'></div>
      </div>
      <div className='max-w-[1080px] flex justify-evenly items-center'>
        <div className='w-[1080px] h-[500px] bg-custom-backg rounded-3xl flex flex-row items-center justify-evenly pb-16'>
          {MottoData.map((motto, index) => (
            <div
              key={index}
              className='transition-transform transform hover:scale-105'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <MottoCard
                heading={motto.name}
                desc={motto.description}
                onHover={index === hoveredIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeBelieve
