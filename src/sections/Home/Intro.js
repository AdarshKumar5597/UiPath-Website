import React from "react";
import { useRef } from "react";
import Navbar from "../../layout/main/Navbar.js";
import Auto from "../../assets/images/auto_gif_3.gif";
import Orangedot from "../../assets/images/Orangecirc.png";

function Intro(){

    return(
        <div className="bgc w-full  h-fit pb-10">
            <Navbar />
            <div className="flex w-full h-fit md:justify-end justify-center items-center">
                <div class="flex md:w-3/12 w-full h-full md:justify-around justify-center items-center md:mt-24 mt-52">
                    <span className="font-bold text-black w-full h-full flex flex-col justify-center items-center"><span className="text-9xl py-0 bg-gradient-to-br from-orange-700  via-orange-300 to-orange-700 grad bg-clip-text text-transparent">UiPath</span><span className="text-2xl py-0 text-center w-[400px]">Student Community KIIT</span><span></span></span>
                    {/* <span className="text-7xl neumorphic-text" ref={el}></span> */}
                </div>
                <div className="flex md:w-8/12 w-0 h-full justify-around items-center  mt-24">
                    <img src={Auto} alt="" className="h-80 absolute non hidden rounded-3xl md:visible md:static md:inline-block" />
                </div>
            </div>

            <div id="accomplishments" className="w-full h-fit md:mt-10 mt-60">
                <span className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-2">
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">12</span><span>Domains</span></span><img src={Orangedot} alt="" className="w-4 md:inline-block md:visible hidden" />
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">1</span><span>Event Organized</span></span><img src={Orangedot} alt="" className="w-4 md:inline-block md:visible hidden" />
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">1</span><span>Challenge Completed</span></span>
                    </span>
            </div>
        </div>
    );
}

export default Intro;
