import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the Landing Page</h1>
            <p className="mt-4 text-gray-700">This is a simple landing page created with Next.js and TypeScript.</p>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;
