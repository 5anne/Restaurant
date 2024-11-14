import React from 'react';
import "../Home/Home.css";
import clock from "../../assets/clock.svg";
import contact from "../../assets/contact.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedIn from "../../assets/linkedIn.svg";
import "../Footer/Footer.css";

const Footer = () => {
    return (
        <div className='restaurant-img roboto text-white text-center p-8 lg:py-28'>
            <p className='text-center bebas-neue text-3xl lg:text-5xl'>We ready to have you the best dining experiences</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 my-14'>
                <div className='mb-10 lg:mb-0'>
                    <div className='flex justify-center'>
                        <img src={clock} alt="" />
                    </div>
                    <p className='bebas-neue text-2xl my-3'>Opening hours</p>
                    <p>Monday - Sunday</p>
                    <p>9:00 AM to 11:30 PM</p>
                </div>
                <div className='mb-10 lg:mb-0'>
                    <div className='flex justify-center'>
                        <img src={contact} alt="" />
                    </div>
                    <p className='bebas-neue text-2xl my-3'>LET'S TALK</p>
                    <p>Phone: 1-800-222-4545</p>
                    <p>Fax: 1-800-222-4545</p>
                </div>
                <div className='mb-10 lg:mb-0'>
                    <div className='flex justify-center'>
                        <img src={email} alt="" />
                    </div>
                    <p className='bebas-neue text-2xl my-3'>BOOK A TABLE</p>
                    <p>Email: demo@website.com</p>
                    <p>Support: support@website.com</p>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <img src={location} alt="" />
                    </div>
                    <p className='bebas-neue text-2xl my-3'>Our Address</p>
                    <p>123 Street New York City , United</p>
                    <p>States Of America.</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 lg:gap-8 lg:pt-14 pb-4'>
                <img className='w-12 lg:w-14' src={facebook} alt="" />
                <img className='w-12 lg:w-14' src={twitter} alt="" />
                <img className='w-12 lg:w-14' src={instagram} alt="" />
                <img className='w-12 lg:w-14' src={linkedIn} alt="" />
            </div>
            <p>© 2023 All Rights Reserved </p>
        </div>
    );
};

export default Footer;