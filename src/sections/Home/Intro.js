import React from "react";
import { useRef } from "react";
import Navbar from "../../layout/main/Navbar.js";
import Auto from "../../assets/images/auto_gif_3.gif";
import Orangedot from "../../assets/images/Orangecirc.png";

function Intro(){

    return(
        <div className="bgc w-full h-screen">
            <Navbar />
            <div className="flex w-full h-5/6 justify-end items-center">
                <div class="flex w-4/12 h-full justify-around items-center">
                    <span className="font-bold text-black w-1/2 h-full flex flex-col justify-center items-center"><span className="text-9xl py-0 bg-gradient-to-br from-orange-700  via-orange-300 to-orange-700 grad bg-clip-text text-transparent">UiPath</span><span className="text-2xl py-0 text-center w-[400px]">Student Community KIIT</span><span></span></span>
                    {/* <span className="text-7xl neumorphic-text" ref={el}></span> */}
                </div>
                <div className="flex w-8/12 h-full  justify-around items-center">
                    <img src={Auto} alt="" className="h-96 rounded-3xl" />
                </div>
            </div>

            <div id="accomplishments" className="w-full h-32">
                <span className="flex justify-center items-center gap-10">
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">12</span><span>Domains</span></span><img src={Orangedot} alt="" className="w-4" />
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">1</span><span>Event Organized</span></span><img src={Orangedot} alt="" className="w-4" />
                    <span className="font-semibold text-2xl flex items-end gap-3 "> <span className="font-semibold text-6xl bottom-textS1 bg-clip-text text-transparent">1</span><span>Challenge Completed</span></span>
                    </span>
            </div>
        </div>
    );
}

export default Intro;