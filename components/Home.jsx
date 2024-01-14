import React from "react";
import { useRef } from "react";
import Navbar from "./Navbar";
import Auto from "../assets/auto_gif_3.gif";
import Orangedot from "../assets/Orangedot.png";

function Home(){
    // const el = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: ["Grow", "Develop", "Learn"], // Strings to display
    //         // Speed settings, try diffrent values untill you get good results
    //         startDelay: 300,
    //         typeSpeed: 250,
    //         backSpeed: 250,
    //         backDelay: 100,
    //         loop: true,
    //         showCursor: true,
    //         cursorChar: "!"
    //     });
   
    // return () => {
    //     typed.destroy();
    // };
    //     }, []);

    return(
        <div className="bgc w-full h-screen">
            <Navbar />
            <div className="flex w-full mt-24 h-5/6 justify-end items-center">
                <div class="flex w-4/12 h-full justify-around items-center">
                    <span className="font-bold text-black text-7xl w-1/2 h-full flex  justify-around items-center">UiPath Student Community KIIT</span>
                    {/* <span className="text-7xl neumorphic-text" ref={el}></span> */}
                </div>
                <div className="flex w-8/12 h-full  justify-around items-center">
                    <img src={Auto} alt="" className="h-96 rounded-3xl" />
                </div>
            </div>

            <div id="accomplishments" className="w-full p-7 h-1/6">
                <span className="flex justify-center items-center gap-10">
                    <span className="font-medium text-2xl flex items-center "> <span className="font-semibold text-6xl">12</span>   Domains</span><img src={Orangedot} alt="" className="w-4" />
                    <span className="font-medium text-2xl flex items-center"> <span className="font-semibold text-6xl">1</span>   Event Organized</span><img src={Orangedot} alt="" className="w-4" />
                    <span className="font-medium text-2xl flex items-center"> <span className="font-semibold text-6xl">1</span>   Challenge Completed</span>
                    </span>
            </div>
        </div>
    );
}

export default Home;