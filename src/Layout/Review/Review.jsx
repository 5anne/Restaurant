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
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Review = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

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
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        pagination,
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
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
                                <iframe className='w-full h-full' src="https://www.youtube.com/embed/wdvIcau0TxM?si=Nsl9k74Owq4G8Feg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col-reverse lg:flex-row'>
                            <div className='lg:w-5/12 bg-[#FEBF00] p-12 relative'>
                                <img src={comma} alt="" />
                                <p className='leading-relaxed mb-24 ml-4'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                <div className='flex justify-between border-b-2 border-black'>
                                    <div className='mb-2'>
                                        <p className='bebas-neue text-xl'>Anastasia R.</p>
                                        <p>Newyork, USA</p>
                                    </div>
                                    <img className='border-b-2 border-[#BD1F17] pb-2' src={customer} alt="" />
                                </div>
                                <img className='absolute -left-0 bottom-14 w-6' src={flower} alt="" />
                            </div>
                            <div className='lg:w-7/12'>
                                <iframe className='w-full h-full' src="https://www.youtube.com/embed/8GxfnU5gVII?si=wQhhbaiAaGL4av4v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col-reverse lg:flex-row'>
                            <div className='lg:w-5/12 bg-[#FEBF00] p-12 relative'>
                                <img src={comma} alt="" />
                                <p className='leading-relaxed mb-24 ml-4'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                <div className='flex justify-between border-b-2 border-black'>
                                    <div className='mb-2'>
                                        <p className='bebas-neue text-xl'>Hannah Rao</p>
                                        <p>Sydney, Australia</p>
                                    </div>
                                    <img className='border-b-2 border-[#BD1F17] pb-2' src={customer} alt="" />
                                </div>
                                <img className='absolute -left-0 bottom-14 w-6' src={flower} alt="" />
                            </div>
                            <div className='lg:w-7/12'>
                                <iframe className='w-full h-full' src="https://www.youtube.com/embed/YxVZuuxxXxk?si=DUhhAzgYBSLMW5T6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden lg:flex justify-between'>
                <img className='absolute bottom-96 w-24' src={tomato} alt="" />
                <img className='absolute bottom-8 -right-0 w-52' src={celery} alt="" />
            </div>
        </div>
    );
};

export default Review;