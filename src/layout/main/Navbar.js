import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from "../../assets/images/udsc.png";
function Navbar (){
    const NavItems = [
        {
            index: 0,
            name: "Domains",
            path: "/domains"
        },
        {
            index: 1,
            name: "Events",
            path: "/events"
        },
        {
            index: 2,
            name: "Projects",
            path: "/projects"
        },
        {
            index: 3,
            name: "Members",
            path: "/members"
        },
        {
            index: 4,
            name: "Blog",
            path: "/Blog"
        },
        {
            index: 5,
            name: "Gallery",
            path: "/gallery"
        },
        {
            index: 6,
            name: "Youtube",
            path: "/youtube"
        },
    ]
    


    const matchRoute = (route) => {
        return route === window.location.pathname;
    }

    return (
        <div className='flex fixed top-0 font-semibold text-xl w-full bg-opacity-100 bg-white justify-between px-10 items-center py-1'>
            <Link to="/">
                <img src={Logo} alt='logo' className="h-[100px] w-[150px]" />
            </Link>
            <div className='flex  justify-evenly items-center gap-3 w-[50vw]'>
                {NavItems.map((element) => (
                    <div key={element.index} className="p-3 hover:border-b-4 hover:border-b-orange-400 text-black w-32 flex justify-center items-center relative">
                        <Link to={element.path}>
                            <p className={matchRoute(element.path) ? "scale-125 transition-all duration-200" : ""}>{element.name}</p>
                        </Link>

                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;

