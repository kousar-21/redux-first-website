import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import FeaturesSection from '../../component/FeaturesSection/FeaturesSection';

const Home = () => {
    return (
        <div>
            <div className='bg-gray-800 mb-10'>
                <Navbar></Navbar>
            </div>
            <FeaturesSection></FeaturesSection>
            <div className='bg-gray-700'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;