import React from 'react';
import "../Home/Home.css";
import redDisk from "../../assets/Rectangle.svg";
import leftAngle from "../../assets/left-angle.svg";
import rightAgle from "../../assets/right-angle.svg";
import burger from "../../assets/burger.svg";
import pizza from "../../assets/pizza.svg";
import fries from "../../assets/frenchfries.svg";
import prawn from "../../assets/fried-shrimp-prawn-cake.svg";
import tomato from "../../assets/bell-pepper-pepper-sliced-black-bowl-2.svg";

const PopularFood = () => {
    return (
        <div className='bg-[#FBF7F2] roboto relative'>
            <div className='p-6 lg:px-40 lg:py-20'>
                <div className='lg:flex justify-between lg:mb-14'>
                    <div>
                        <div className='flex items-center gap-1 mb-2'>
                            <img src={redDisk} alt="" />
                            <p className='roboto text-[#BD1F17] font-bold'>Crispy, Every Bite Taste</p>
                        </div>
                        <h6 className='bebas-neue text-4xl'>POPULAR FOOD ITEMS</h6>
                    </div>
                    <div className='flex justify-center my-4 lg:my-0 gap-3'>
                        <img className='w-16' src={leftAngle} alt="" />
                        <img className='w-16' src={rightAgle} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    <div className='bg-white p-8 space-y-4'>
                        <div className='flex justify-center'>
                            <img src={burger} alt="" />
                        </div>
                        <p className='border-2 border-[#BD1F17] w-14 mx-auto'></p>
                        <h6 className='bebas-neue text-center text-xl'>vegetables burger</h6>
                        <p className='text-center text-sm'>Barbecue Italian cuisine pizza</p>
                    </div>
                    <div className='bg-white p-8 space-y-4'>
                        <div className='flex justify-center'>
                            <img src={pizza} alt="" />
                        </div>
                        <p className='border-2 border-[#BD1F17] w-14 mx-auto'></p>
                        <h6 className='bebas-neue text-center text-xl'>Spacial Pizza</h6>
                        <p className='text-center text-sm'>Barbecue Italian cuisine pizza</p>
                    </div>
                    <div className='bg-white p-8 space-y-4'>
                        <div className='flex justify-center'>
                            <img src={fries} alt="" />
                        </div>
                        <p className='border-2 border-[#BD1F17] w-14 mx-auto'></p>
                        <h6 className='bebas-neue text-center text-xl'>Spacial French fries</h6>
                        <p className='text-center text-sm'>Barbecue Italian cuisine</p>
                    </div>
                    <div className='bg-white p-8 space-y-4'>
                        <div className='flex justify-center'>
                            <img src={prawn} alt="" />
                        </div>
                        <p className='border-2 border-[#BD1F17] w-14 mx-auto'></p>
                        <h6 className='bebas-neue text-center text-xl'>Cuisine Chicken</h6>
                        <p className='text-center text-sm'>Japanese Cuisine Chicken</p>
                    </div>
                </div>
            </div>
            <img className='hidden lg:flex absolute bottom-28 w-32' src={tomato} alt="" />
        </div>
    );
};

export default PopularFood;