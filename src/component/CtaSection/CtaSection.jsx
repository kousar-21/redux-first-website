import React from 'react';

const CtaSection = () => {
    return (
        <div className="py-24 text-center bg-base-300">
            <h2 className="text-4xl font-bold">Ready to take the next step?</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto">
                Join thousands of users who are already benefiting from our service. Sign up now and get started in minutes.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <button className="btn btn-primary btn-lg">Start Your Free Trial</button>
                <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
        </div>
    );
};

export default CtaSection;