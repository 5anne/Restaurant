import React from 'react';
import "../Home/Home.css";
import imgAbout from "../../assets/about-image.svg";
import imgMarket from "../../assets/Market-Place.svg";
import phone from "../../assets/phone.svg";
import disk from "../../assets/disk.svg";
import badge from "../../assets/badge.svg";
import bag from "../../assets/bag.svg";
import capsicum from "../../assets/bell-pepper-sliced-black-bowl.svg";

const About = () => {
    return (
        <div className='relative'>
            <div className='lg:flex justify-between roboto gap-10 p-6 lg:px-40 lg:py-20'>
                <div className='flex-1 relative'>
                    <img className='' src={imgAbout} alt="" />
                    <img className='absolute bottom-36 w-36 lg:w-72' src={imgMarket} alt="" />
                </div>
                <div className='flex-1 space-y-4 mt-10'>
                    <div className='flex border-b-2 border-[#B52B1D] gap-4'>
                        <button className='bg-[#B52B1D] py-1 px-2'>About</button>
                        <button>Experience</button>
                        <button>Contact</button>
                    </div>
                    <h6 className='bebas-neue text-4xl'>Exceptional culinary <br />experience and delicious food</h6>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                    <div className='flex items-center gap-8'>
                        <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>About more</button>
                        <div className='flex items-center gap-2'>
                            <img className='w-4 lg:w-6' src={phone} alt="" />
                            <p className='text-black font-bold text-sm lg:text-base'>+88 3426 739 485</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-evenly items-center mb-14 px-6 lg:px-0'>
                <div className='flex items-center gap-8 mb-4 lg:mb-0'>
                    <div className='shadow-xl p-4 rounded-full'>
                        <img className='w-4 lg:w-full' src={disk} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>fast delivery</h6>
                        <p>Within 30 minutes</p>
                    </div>
                </div>
                <div className='flex items-center gap-8 mb-4 lg:mb-0'>
                    <div className='shadow-xl p-4 rounded-full'>
                        <img className='w-4 lg:w-full' src={badge} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>absolute dining</h6>
                        <p>Best buffet restaurant</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='shadow-xl p-4 rounded-full'>
                        <img className='w-4 lg:w-full' src={bag} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>pickup delivery</h6>
                        <p>Grab your food order</p>
                    </div>
                </div>
            </div>
            <img className='hidden lg:flex absolute -right-0 bottom-8 w-32' src={capsicum} alt="" />
        </div>
    );
};

export default About;