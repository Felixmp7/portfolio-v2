import React from 'react';
import ss1 from 'public/assets/latestWork/servisenior/ss1.jpeg';
import ss2 from 'public/assets/latestWork/servisenior/ss2.jpeg';
import ss3 from 'public/assets/latestWork/servisenior/ss3.jpeg';
import w1 from 'public/assets/latestWork/wadara/w1.png';
import w2 from 'public/assets/latestWork/wadara/w2.png';
import w3 from 'public/assets/latestWork/wadara/w3.png';
import w4 from 'public/assets/latestWork/wadara/w4.png';
import w5 from 'public/assets/latestWork/wadara/w5.png';
import w6 from 'public/assets/latestWork/wadara/w6.jpeg';
import w7 from 'public/assets/latestWork/wadara/w7.jpg';
import w8 from 'public/assets/latestWork/wadara/w8.jpg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Layout from './layout/Layout';

const latestWorkImages = [
    { images: [ss1] },
    { images: [ss2] },
    { images: [ss3] },
    { images: [w1] },
    { images: [w2] },
    { images: [w3] },
    { images: [w4] },
    { images: [w5] },
    { images: [w6, w7, w8] },
];
const LatestWorks = () => {
    const { t } = useTranslation('common');
    return (
        <Layout
            classes={{
                outside: 'bg-slate-900',
                container: 'text-slate-300 min-h-screen-3/4 py-20 px-5',
            }}
        >
            {' '}
            <h4 className="text-3xl font-medium">{t('latestWorks.title')}</h4>
            <p className="w-1/2 mt-8">
                {t('latestWorks.description')}
            </p>

            <div className="grid grid-cols-3 gap-12 mt-10">
                {latestWorkImages.map((work, index) => {
                    if (work.images.length > 1) {
                        return (
                            <div key={index} className="grid grid-cols-3 gap-5">
                                {work.images.map((imageSrc, subIndex) => (
                                    <Image
                                        key={subIndex}
                                        src={imageSrc}
                                        quality={1}
                                        className="transition duration-200 hover:scale-105 ease"
                                        alt="work"
                                        layout="responsive"
                                    />
                                ))}
                            </div>
                        );
                    }
                    return (
                        <div key={index}>
                            <Image
                                src={work.images[0]}
                                quality={1}
                                alt="work"
                                className="transition duration-200 hover:scale-105 ease"
                                layout="responsive"
                            />
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export default LatestWorks;
