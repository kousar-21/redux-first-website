import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='bg-gray-800 mb-10'>
                <Navbar></Navbar>
            </div>
            <div className='bg-gray-700'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;