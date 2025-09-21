import React from 'react';

const AboutSection = () => {
    return (
        <div className="py-24 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop"
                            alt="Team working together"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold">Our Mission</h2>
                        <p className="mt-4 text-lg">
                            We are a passionate team dedicated to building powerful, user-friendly applications using the latest web technologies. Our goal is to simplify complex processes and help businesses thrive in the digital world.
                        </p>
                        <button className="btn btn-primary mt-6">Learn More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;