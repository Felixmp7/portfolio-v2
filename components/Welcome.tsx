import React from 'react';

const Welcome = () => (
    <div className="flex flex-col items-center justify-center text-white min-h-90-screen welcome-bg">
        <div className="inline-block text-center">
            <h1 className="mb-4 text-4xl text-red-500">Hello</h1>
            <h2 className="pr-1 mb-4 text-6xl border-r-4">
                I&#39;m
                {' '}
                <span className="font-semibold">Engineer</span>
            </h2>

            <h3 className="font-light">
                <span className="text-blue-300">React</span>
                {' '}
                • Frontend •
                {' '}
                <span className="text-green-300">Developer</span>
            </h3>
        </div>
        <button
            type="button"
            className="px-4 py-2 mt-16 transition-all duration-500 border rounded ease hover:bg-white hover:text-slate-900 hover:border-slate-100"
        >
            Hire me
        </button>
    </div>
);

export default Welcome;
