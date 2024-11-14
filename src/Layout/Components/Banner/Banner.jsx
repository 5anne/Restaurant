import React from 'react';
import imgHome from '../../../../src/assets/image-home.svg';
import imgGroup from '../../../../src/assets/flower.svg';
import "../../Home/Home.css"

const Banner = () => {
    return (
        <div className='bg-[#BD1F17] lg:flex lg:items-center max-w-full p-8 lg:px-40 relative'>
            <div className='flex-1'>
                <h6 className='bebas-neue text-white text-4xl lg:text-8xl bg-[#BD1F1780] py-2 pr-4 lg:absolute top-44'>Taste the authentic <br />Saudi cuisine</h6>
                <div className='lg:absolute top-96 space-y-4'>
                    <p className='roboto text-white font-light text-sm lg:text-base leading-relaxed'>Among the best Saudi chefs in the world, serving <br />you something beyond flavor.</p>
                    <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6'>Explore Menu</button>
                </div>
            </div>
            <div className='flex-1 my-10'>
                <img className='w-[550px] ' src={imgHome} alt="" />
                <div className='bg-[#FEBF00] rounded-full p-2 absolute right-10 lg:right-28 bottom-20 lg:bottom-[74px]'>
                    <button className='py-2 px-4 border-2 border-dashed border-[#BD1F17] rounded-full bebas-neue font-bold text-xl'>Today <br />offer</button>
                </div>
                <img className='absolute right-8 lg:right-[130px] bottom-[334px] lg:bottom-[518px]' src={imgGroup} alt="" />
            </div>
        </div>
    );
};

export default Banner;