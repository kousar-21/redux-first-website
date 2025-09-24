import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import FeaturesSection from '../../component/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../../component/TestimonialsSection/TestimonialsSection';
import ContactSection from '../../component/ContactSection/ContactSection';
import AboutSection from '../../component/AboutSection/AboutSection';
import CtaSection from '../../component/CtaSection/CtaSection';
import PricingSection from '../../component/PricingSection/PricingSection';
import TeamSection from '../../component/TeamSection/TeamSection';

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
            <CtaSection></CtaSection>
            <PricingSection></PricingSection>
            <TeamSection></TeamSection>
            <div className='bg-gray-700'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;