import React from "react";
import Navbar from "./Navbar";

function Header({url}){
    return(
        <>
            <div className="flex justify-around items-center">
                <img src={url}/>
                <Navbar />
            </div>
        </>
    )
}

export default Header;