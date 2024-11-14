import React from 'react';
import redDisk from "../../assets/Rectangle.svg";
import "../Home/Home.css";

const Booking = () => {
    return (
        <div className='p-6 lg:px-40 lg:py-20 bg-no-repeat bg-cover bg-current space-y-4' style={{
            backgroundImage: "url(https://i.postimg.cc/XJZ5HXS7/utensils-Background.jpg)",
        }}>
            <div>
                <div className='flex items-center gap-1 mb-2'>
                    <img src={redDisk} alt="" />
                    <p className='roboto text-[#BD1F17] font-bold'>Book Now</p>
                </div>
                <h6 className='bebas-neue text-4xl text-white'>Book Your Table</h6>
            </div>
            <p className='text-gray-400'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br />molestie vel, ornare non id blandit netus.</p>
            <form action="">
                <div className='lg:flex gap-8 mb-6'>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='Your Name' className='bg-transparent border-2 border-white p-2' /><br />
                        <input type="email" placeholder='Your Email' className='bg-transparent border-2 border-white p-2 mb-6 lg:mb-0' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="datetime-local" placeholder='Reservation Date' className='bg-transparent border-2 border-white p-2' /><br />
                        <input type="text" placeholder='Total People' className='bg-transparent border-2 border-white p-2' />
                    </div>
                </div>
                <textarea
                    placeholder="Message"
                    className="rounded-none textarea-lg w-[330px] lg:w-[470px] bg-transparent border-2 border-white mb-6"></textarea><br />
                <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>Book Now</button>
            </form>
        </div>
    );
};

export default Booking;