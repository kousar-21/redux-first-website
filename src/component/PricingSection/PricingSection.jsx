import React from 'react';

const PricingSection = () => {
    const plans = [
        { name: 'Basic', price: '$9', features: ['5 Projects', '10GB Storage', 'Basic Support'] },
        { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited Everything', 'Dedicated Manager', 'Custom Integrations'] },
    ];
    return (
        <div className="py-24">
            <h2 className="text-4xl font-bold text-center">Flexible Pricing Plans</h2>
            <p className="text-center text-lg mt-4">Choose the plan that's right for you.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {plans.map((plan, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl border border-neutral p-6 flex flex-col items-center">
                        <h3 className="text-3xl font-bold">{plan.name}</h3>
                        <p className="text-5xl font-bold mt-4">{plan.price}</p>
                        <ul className="list-disc list-inside mt-6 text-left w-full pl-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="py-1">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-8 w-full">Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;