import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/udsc.png";
import NavItems from '../../data/nav_items';

const Navbar = () => {
    const location = useLocation();

    const matchRoute = (route) => {
        return route === location.pathname;
    }

    return (
        <div className='flex justify-between px-10 items-center py-1 relative'>
            <Link to="/">
                <img src={Logo} alt='logo' className="h-[100px] w-[150px]" />
            </Link>
            <div className='flex justify-evenly items-center gap-3 w-[50vw]'>
                {NavItems.map((element) => (
                    <div key={element.index} className="p-3 text-white w-32 flex justify-center items-center relative">
                        <Link to={element.path}>
                            <p className={matchRoute(element.path) ? "scale-125 transition-all duration-200" : ""}>{element.name}</p>
                        </Link>

                        {matchRoute(element.path) && <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
