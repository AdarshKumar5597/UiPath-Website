import React, { useState } from 'react'
import MottoData from '../../data/motto'
import MottoCard from '../../components/Home/MottoCard'

const WeBelieve = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className='bg-custom-backg w-[100vw] p-5 flex flex-col justify-center items-center gap-y-5'>
      <div className='flex max-w-[1080px] lg:w-[1080px] items-center px-5 md:justify-center sm:justify-center mottoTitle'>
        <p
          className='font-oswald text-5xl text-orange-600 lg:w-[400px] ml-12 paraContainer'
          style={{
            backgroundImage: 'linear-gradient(45deg, red, orange, yellow)',
            WebkitBackgroundClip: 'text',
            color: 'black',
          }}
        >
          We believe in
        </p>
        <div className=' items-center w-full lg:grid-cols-3 md:grid-cols-1'></div>
      </div>
      <div className='max-w-[1080px] md: pb-4'>
        <div className='md:w-[1080px] bg-custom-backg rounded-3xl flex md:flex-col sm:flex-col lg:flex-row items-center justify-evenly pb-16 md:pb-2 md:mb-3 md:gap-y-3 sm:gap-y-3 mottoCardContainer'>
          {MottoData.map((motto, index) => (
            <div
              key={index}
              className='lg:transition-transform lg:transform lg:hover:scale-105'
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
