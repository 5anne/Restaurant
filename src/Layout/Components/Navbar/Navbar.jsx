import React from 'react';
import logo from "../../../assets/Logo.svg";
import "../../Home/Home.css";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className="navbar justify-evenly bg-[#BD1F17] roboto text-white font-light fixed z-10">
            <div className="gap-10">
                <img src={logo} alt="" />
                <div className='hidden lg:flex gap-10'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Clients</a>
                    <a>Blog</a>
                    <a>Contact</a>
                </div>
            </div>
            <div className="hidden lg:flex">
                <button className='bg-[#FEBF00] font-semibold text-black py-2 px-6 uppercase'>Book a Table</button>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
                <div tabIndex={0} role="button" className="text-2xl"><GiHamburgerMenu /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-[#BD1F17CC] rounded-box z-[1] p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Clients</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;