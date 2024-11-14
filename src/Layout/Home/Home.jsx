import React from 'react';
import About from '../About/About';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import PopularFood from '../PopularFood/PopularFood';
import Booking from '../Booking/Booking';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <PopularFood></PopularFood>
            <Booking></Booking>
            <Review></Review>
        </div>
    );
};

export default Home;