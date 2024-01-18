import React from 'react'

const MottoCard = ({ heading, desc, onHover }) => {
  return (
    <div
      className={`${
        onHover
          ? 'card max-w-[675px] max-h-[875px] p-1  bg-custom-orange text-left'
          : 'w-[275px] h-[375px] p-2 rounded-md flex flex-col items-center justify-evenly bg-white'
      }`}
    >
      <div className={`${onHover ? 'text-left' : ''}`}>
        <p
          className={`${
            onHover
              ? 'card-title'
              : 'p-2 text-3xl font-bold font-oswald text-center'
          }`}
        >
          {heading}
        </p>
        <p
          className={`${
            onHover ? 'card-description' : ' p-3 font-oswald text-left text-sm'
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

export default MottoCard
