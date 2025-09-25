import React from 'react';

const PartnersSection = () => {
    const partnerLogos = [
        'https://daisyui.com/images/stock/photo-1544367520-419b26501a30.jpg', // Placeholder 1
        'https://daisyui.com/images/stock/photo-1547841243-e4965d1d60db.jpg', // Placeholder 2
        'https://daisyui.com/images/stock/photo-1588347913808-b80c10b7b649.jpg', // Placeholder 3
        'https://daisyui.com/images/stock/photo-1544367520-419b26501a30.jpg', // Placeholder 4
    ];
    return (
        <div className="py-20 bg-base-100 text-center">
            <h2 className="text-2xl font-semibold uppercase tracking-wider opacity-70">
                Trusted by Leading Companies
            </h2>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-80">
                {partnerLogos.map((logo, index) => (
                    // Use grayscale for a professional look, and add hover to show color
                    <img
                        key={index}
                        src={logo}
                        alt={`Partner Logo ${index + 1}`}
                        className="w-24 h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;