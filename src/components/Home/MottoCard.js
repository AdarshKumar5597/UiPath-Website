import React from 'react'

const MottoCard = ({ heading, desc, onHover }) => {
    return (
        <div className={`${onHover ? "card max-w-[275px] max-h-[375px]" : "w-[275px] h-[375px] p-2 rounded-md flex flex-col items-center justify-evenly bg-orange-500 neumorphic-box"}`}>
            <div className={`${onHover ? "container-card bg-red-box" : ""}`}>
                <p className={`${onHover ? "card-title" : "text-3xl font-bold font-oswald text-center"}`}>
                    {heading}
                </p>
                <p className={`${onHover ? "card-description" : "font-semibold font-oswald text-center"}`}>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default MottoCard