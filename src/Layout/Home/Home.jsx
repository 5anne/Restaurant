import React from 'react';
import About from '../About/About';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;