import React from 'react';
import Layout from './layout/Layout';

const CallToAction = () => (
    <Layout
        classes={{
            outside: 'bg-gradient-to-r from-cyan-500 to-blue-500',
            container: 'text-slate-100 p-10 text-center',
        }}
    >
        <h5 className="text-4xl">Have any project in mind?</h5>
        <div className="w-40 mx-auto mt-4 border" />
        <button
            type="button"
            className="px-4 py-2 mt-8 transition-all duration-500 border rounded ease hover:bg-white hover:text-slate-900 hover:border-slate-100"
        >
            Hire me
        </button>
    </Layout>
);

export default CallToAction;
