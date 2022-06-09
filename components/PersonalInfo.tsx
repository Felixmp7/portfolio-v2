import React from 'react';
import Image from 'next/image';
import me from 'public/assets/me-2.jpeg';
import reactLogo from 'public/assets/skills/react.png';

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

const PersonalInfo = () => (
    <div className="flex flex-col items-center justify-center text-black min-h-screen-3/4 personal-info-bg">
        <div className="grid w-2/3 grid-cols-3 gap-x-10">
            <div className="col-span-1 overflow-hidden shadow-xl rounded-xl">
                <Image src={me} alt="me" layout="responsive" />
            </div>
            <div className="col-span-2">
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
                    . I&#39;m Systems Engineer and I&#39;m from Caracas, Venezuela 🇻🇪. I&#39;m 25 years old and I&#39;m a React Developer since 2019. I characterize myself for being really honest, detailed, responsible and for all the time wanting to do things well.

                    <br />
                    <br />

                    I consider myself a person who never give up, I always try to overcome the obstacles and I try to stand out from others. I always try to help, support and learn from my coworkers to keep growing as a professional and as a human being.
                </p>

                <div className="flex items-center mt-8 text-slate-700">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} target="__blank" className="mr-4 text-2xl">
                            <i aria-hidden className={link.icon} />
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    className="px-4 py-2 mt-8 transition-all duration-500 border rounded text-slate-700 border-react ease hover:bg-react hover:text-white hover:border-slate-100"
                >
                    Download my CV
                </button>
            </div>
        </div>
    </div>
);

export default PersonalInfo;
