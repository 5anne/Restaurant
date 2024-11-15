import React, { useState } from 'react';
import phone from "../../../assets/phone.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AboutTab = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleClick = (tabName) => {
        setActiveTab(tabName);
        console.log(activeTab);
    }

    return (
        <Tabs className='flex-1 mt-10 lg:mt-0'>
            <TabList className='flex border-b-2 border-[#B52B1D] gap-4'>
                <Tab className="hover:cursor-pointer py-1 px-2 bg-[#B52B1D] text-white" onClick={() => handleClick('about')}>About</Tab>
                <Tab className="hover:cursor-pointer py-1 px-2 bg-[#B52B1D] text-white" onClick={() => handleClick('experience')}>Experience</Tab>
                <Tab className="hover:cursor-pointer py-1 px-2 bg-[#B52B1D] text-white" onClick={() => handleClick('contact')}>Contact</Tab>
            </TabList>
            <TabPanel className='space-y-4 mt-4'>
                <h6 className='bebas-neue text-4xl'>Exceptional culinary <br />experience and delicious food</h6>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                <div className='flex items-center gap-8'>
                    <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>About more</button>
                    <div className='flex items-center gap-2'>
                        <img className='w-4 lg:w-6' src={phone} alt="" />
                        <p className='text-black font-bold text-sm lg:text-base'>+88 3426 739 485</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className='space-y-4 mt-4'>
                <h6 className='bebas-neue text-4xl'>Exceptional culinary <br />experience and delicious food</h6>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab est ipsam officia consequuntur qui eius laboriosam dolore rerum necessitatibus odit quo velit ducimus, iure ratione dolorem obcaecati autem quas.</p>
                <div className='flex items-center gap-8'>
                    <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>About more</button>
                    <div className='flex items-center gap-2'>
                        <img className='w-4 lg:w-6' src={phone} alt="" />
                        <p className='text-black font-bold text-sm lg:text-base'>+88 3426 739 485</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className='space-y-4 mt-4'>
                <h6 className='bebas-neue text-4xl'>Exceptional culinary <br />experience and delicious food</h6>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                <div className='flex items-center gap-8'>
                    <button className='bg-[#FEBF00] roboto font-bold text-black py-2 px-6 text-sm lg:text-base uppercase'>Contact Now</button>
                    <div className='flex items-center gap-2'>
                        <img className='w-4 lg:w-6' src={phone} alt="" />
                        <p className='text-black font-bold text-sm lg:text-base'>+88 3426 739 485</p>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default AboutTab;