import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import FeaturesSection from '../../component/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../../component/TestimonialsSection/TestimonialsSection';
import ContactSection from '../../component/ContactSection/ContactSection';
import AboutSection from '../../component/AboutSection/AboutSection';

const Home = () => {
    return (
        <div>
            <div className='bg-gray-800 mb-10'>
                <Navbar></Navbar>
            </div>
            <FeaturesSection></FeaturesSection>
            <TestimonialsSection></TestimonialsSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
            <div className='bg-gray-700'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;