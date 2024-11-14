import React from 'react';
import "../Home/Home.css";
import redDisk from "../../assets/Rectangle.svg";
import leftAngle from "../../assets/left-angle.svg";
import rightAgle from "../../assets/right-angle.svg";
import foodImg from "../../assets/review-image.svg";
import customer from "../../assets/customer.svg";
import comma from "../../assets/comma.svg";
import flower from "../../assets/Group.svg";
import tomato from "../../assets/tomato.svg";
import celery from "../../assets/celery.svg";

const Review = () => {
    return (
        <div className='relative'>
            <div className='p-6 lg:px-40 lg:py-20 roboto'>
                <div className='lg:flex justify-between lg:mb-14'>
                    <div>
                        <div className='flex items-center gap-1 mb-2'>
                            <img src={redDisk} alt="" />
                            <p className='roboto text-[#BD1F17] font-bold'>Crispy, Every Bite Taste</p>
                        </div>
                        <h6 className='bebas-neue text-4xl'>What Some of my Customers Say</h6>
                    </div>
                    <div className='flex justify-center my-4 lg:my-0 gap-3'>
                        <img className='w-16' src={leftAngle} alt="" />
                        <img className='w-16' src={rightAgle} alt="" />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='lg:w-5/12 bg-[#FEBF00] p-12 relative'>
                        <img src={comma} alt="" />
                        <p className='leading-relaxed mb-24 ml-4'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                        <div className='flex justify-between border-b-2 border-black'>
                            <div className='mb-2'>
                                <p className='bebas-neue text-xl'>Khalid Al Dawsry</p>
                                <p>Jeddah, Saudi</p>
                            </div>
                            <img className='border-b-2 border-[#BD1F17] pb-2' src={customer} alt="" />
                        </div>
                        <img className='absolute -left-0 bottom-14 w-6' src={flower} alt="" />
                    </div>
                    <div className='lg:w-7/12'>
                        <img src={foodImg} alt="" />
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex justify-between'>
                <img className='absolute bottom-96 w-24' src={tomato} alt="" />
                <img className='absolute bottom-8 -right-0 w-52' src={celery} alt="" />
            </div>
        </div>
    );
};

export default Review;