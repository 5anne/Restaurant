import React from 'react';
import redDisk from "../../assets/Rectangle.svg";
import "../Home/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const numOfPeople = e.target.numOfPeople.value;
        const message = e.target.message.value;
        const clientData = { name, email, date, numOfPeople, message }

        console.log(clientData);
        if (clientData) {
            toast("Your Reservation is successfully done!");
        }
    }

    return (
        <div className='p-6 lg:px-40 lg:py-20 bg-no-repeat bg-cover bg-center space-y-4' style={{
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
            <form onSubmit={handleForm} action="">
                <div className='lg:flex gap-8 mb-6'>
                    <div className='flex flex-col'>
                        <input type="text" name='name' placeholder='Your Name' className='bg-transparent border-2 border-white text-white p-2' required /><br />
                        <input type="email" name='email' placeholder='Your Email' className='bg-transparent border-2 border-white text-white p-2 mb-6 lg:mb-0' required />
                    </div>
                    <div className='flex flex-col'>
                        <input type="datetime-local" name='date' placeholder='Reservation Date' className='bg-transparent border-2 border-white text-white p-2' required /><br />
                        <input type="text" name='numOfPeople' placeholder='Total People' className='bg-transparent border-2 border-white text-white p-2' required />
                    </div>
                </div>
                <textarea
                    type="text"
                    name='message'
                    placeholder="Message"
                    className="rounded-none textarea-lg w-[330px] lg:w-[470px] bg-transparent border-2 text-white border-white mb-6"></textarea><br />
                <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>Book Now</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Booking;