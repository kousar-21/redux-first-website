import React from 'react';

const TeamSection = () => {
    const team = [
        { name: 'John Doe', role: 'CEO & Founder', image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' },
        { name: 'Jane Smith', role: 'Lead Developer', image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' },
        { name: 'Peter Jones', role: 'Product Manager', image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' },
    ];
    return (
        <div className="py-24 bg-base-200 text-center">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg">The people who make it all happen.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {team.map((member, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl p-6">
                        <div className="avatar mx-auto">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={member.image} alt={member.name} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;