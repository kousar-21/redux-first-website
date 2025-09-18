import React from 'react';

const FeaturesSection = () => {
    const features = [
        { title: 'Responsive Design', description: 'Built with Tailwind CSS for a seamless experience on any device.' },
        { title: 'State Management', description: 'Redux handles global state efficiently and predictably.' },
        { title: 'Component-Based', description: 'Modular React components make the code clean and reusable.' },
        { title: 'Customizable UI', description: 'DaisyUI provides powerful, ready-to-use components.' },
    ];
    return (
        <div className="py-24">
            <h2 className="text-4xl font-bold text-center">Key Features</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="card bg-base-200 shadow-xl p-6 text-center">
                        <h3 className="text-2xl font-semibold">{feature.title}</h3>
                        <p className="mt-4">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;