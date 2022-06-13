/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import me from 'public/assets/me.jpeg';
import reactLogo from 'public/assets/react.png';
import { saveAs } from 'file-saver';
import Layout from './layout/Layout';

const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/Felixmp7',
        icon: 'fab fa-github',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/felixmp_a/',
        icon: 'fab fa-instagram',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/felix-pacheco-30/',
        icon: 'fab fa-linkedin',
    },
];

const handleDownload = () => saveAs('/assets/cv-june-2022.pdf', 'cv-felix-pacheco.pdf');

const PersonalInfo = () => (
    <Layout
        classes={{
            outside: 'personal-info-bg',
            container: 'flex flex-col items-center justify-center text-black min-h-screen-3/4',
        }}
    >
        <div className="flex w-5/6 my-20 desktop:w-2/3 gap-x-10 desktop:my-0">
            <div className="relative w-1/2 overflow-hidden shadow-xl rounded-xl">
                <Image src={me} alt="me" layout="responsive" />
            </div>
            <div className="w-2/3">
                <h4 className="text-3xl font-medium text-slate-800">Felix Pacheco</h4>
                <div className="flex items-center mb-8">
                    <Image src={reactLogo} alt="react" width={20} height={20} />
                    <h5 className="ml-2 text-lg text-react">
                        React Developer
                    </h5>
                </div>

                <p className="text-slate-700">
                    Hi, I&#39;m
                    {' '}
                    <b>Felix</b>
                    . I&#39;m a System Engineer from Caracas, Venezuela 🇻🇪. I&#39;m 25 years old and I have been working as a React Developer since 2019. I&#39;m able to describe myself for being really honest, detailed, responsible and active in terms of work. I&#39;m into doing things well.

                    <br />
                    <br />

                    I consider myself as a person who never gives up, I always try to overcome the obstacles and I try to stand out from others. I always try to help, support and learn from my coworkers to keep growing as a professional and as a human being.
                </p>
                <button
                    type="button"
                    onClick={handleDownload}
                    className="px-4 py-2 mt-8 transition-all duration-500 border rounded text-slate-700 border-react ease hover:bg-react hover:text-white hover:border-slate-100"
                >
                    Download my CV
                </button>
                <div className="flex items-center mt-8 text-slate-700">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} target="__blank" className="mr-4 text-2xl">
                            <i aria-hidden className={link.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
);

export default PersonalInfo;
