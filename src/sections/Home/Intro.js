import React, { useEffect, useRef } from 'react'
import BuildingLogo from "../../assets/images/building.png"
import Typed from 'typed.js';

const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Grow", "Develop", "Learn"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 250,
            backSpeed: 250,
            backDelay: 100,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="w-[100vw] h-[90vh] flex justify-center items-center">
            <div className="max-w-[1080px] flex justify-center items-center px-5">
                <div className="w-[1080px] h-[400px] bg-orange-500 rounded-lg flex flex-col items-start relative gap-y-5 pl-20 justify-center">
                    <p className="text-9xl font-bold neumorphic-text">
                        UiPath
                    </p>
                    <p className="text-5xl font-bold font-oswald">
                        A Community <br /> Where We <span className="text-7xl neumorphic-text" ref={el}></span>
                    </p>
                    <div className="absolute right-[-160px] top-[-180px]">
                        <img src={BuildingLogo} className="h-[800px] w-[700px]"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro