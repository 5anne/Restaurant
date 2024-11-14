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
            <div className='flex justify-between roboto gap-10 px-40 py-20'>
                <div className='flex-1 relative'>
                    <img src={imgAbout} alt="" />
                    <img className='absolute bottom-36' src={imgMarket} alt="" />
                </div>
                <div className='flex-1 space-y-4'>
                    <div className='flex border-b-2 border-[#B52B1D] gap-4'>
                        <button className='bg-[#B52B1D] py-1 px-2'>About</button>
                        <button>Experience</button>
                        <button>Contact</button>
                    </div>
                    <h6 className='bebas-neue text-4xl'>Exceptional culinary <br />experience and delicious food</h6>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                    <div className='flex items-center gap-8'>
                        <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 uppercase'>About more</button>
                        <div className='flex items-center gap-2'>
                            <img src={phone} alt="" />
                            <p className='text-black font-bold'>+88 3426 739 485</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly items-center mb-14'>
                <div className='flex items-center gap-8'>
                    <div className='shadow-xl p-2 rounded-full'>
                        <img className='' src={disk} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>fast delivery</h6>
                        <p>Within 30 minutes</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='shadow-xl p-2 rounded-full'>
                        <img className='' src={badge} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>absolute dining</h6>
                        <p>Best buffet restaurant</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='shadow-xl p-2 rounded-full'>
                        <img className='' src={bag} alt="" />
                    </div>
                    <div>
                        <h6 className='bebas-neue text-xl'>pickup delivery</h6>
                        <p>Grab your food order</p>
                    </div>
                </div>
            </div>
            <img className='absolute -right-0 bottom-8 w-32' src={capsicum} alt="" />
        </div>
    );
};

export default About;