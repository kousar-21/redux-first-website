import React from 'react';

const BlogSection = () => {
    const posts = [
        { title: 'Redux State Management', date: 'Oct 1, 2023', excerpt: 'Learn the basics of Redux Toolkit for efficient state management...' },
        { title: 'Building with Tailwind CSS', date: 'Sep 25, 2023', excerpt: 'A guide to using Tailwind CSS and DaisyUI for rapid UI development...' },
        { title: 'The Power of React Hooks', date: 'Sep 15, 2023', excerpt: 'Exploring the latest React features and best practices for modern web apps...' },
    ];
    return (
        <div className="py-24 text-center">
            <h2 className="text-4xl font-bold">Latest from Our Blog</h2>
            <p className="mt-4 text-lg">Stay up to date with our latest insights and news.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {posts.map((post, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl p-6 flex flex-col items-start">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                        <p className="mt-4 text-left">{post.excerpt}</p>
                        <a href="#" className="link link-hover text-primary mt-4">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;