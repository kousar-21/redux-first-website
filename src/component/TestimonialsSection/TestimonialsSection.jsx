import React from 'react';

const TestimonialsSection = () => {
    return (
        <div className="py-24 bg-base-300">
            <h2 className="text-4xl font-bold text-center">What Our Users Say</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="card bg-base-100 shadow-xl p-6">
                    <p className="italic">"This stack is a game changer! The development process is so fast."</p>
                    <p className="mt-4 font-bold">- Alex P.</p>
                </div>
                <div className="card bg-base-100 shadow-xl p-6">
                    <p className="italic">"The state management with Redux is incredibly simple and effective."</p>
                    <p className="mt-4 font-bold">- Jane D.</p>
                </div>
                <div className="card bg-base-100 shadow-xl p-6">
                    <p className="italic">"I love the clean, modern look of the UI components."</p>
                    <p className="mt-4 font-bold">- Chris R.</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;