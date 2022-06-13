import React from 'react';
import ss1 from 'public/assets/latestWork/servisenior/site-1.png';
import ss3 from 'public/assets/latestWork/servisenior/despachos-1.png';
import ss4 from 'public/assets/latestWork/servisenior/enterprise-1.png';
import w1 from 'public/assets/latestWork/wadara/interview1.png';
import w2 from 'public/assets/latestWork/wadara/interview2.png';
import w3 from 'public/assets/latestWork/wadara/interview3.png';
import w4 from 'public/assets/latestWork/wadara/alo1.png';
import w5 from 'public/assets/latestWork/wadara/alo2.png';
import w6 from 'public/assets/latestWork/wadara/inspections1.jpg';
import w7 from 'public/assets/latestWork/wadara/inspections2.jpg';
import w8 from 'public/assets/latestWork/wadara/inspections3.jpg';
import Image from 'next/image';
import Layout from './layout/Layout';

const latestWork = [
    { images: [ss1] },
    { images: [ss3] },
    { images: [ss4] },
    { images: [w1] },
    { images: [w2] },
    { images: [w3] },
    { images: [w4] },
    { images: [w5] },
    { images: [w6, w7, w8] },
];
const LatestWork = () => (
    <Layout
        classes={{
            outside: 'bg-slate-900',
            container: 'text-slate-300 min-h-screen-3/4 py-20 px-5',
        }}
    >
        {' '}
        <h4 className="text-3xl font-medium">Latest Work</h4>
        <p className="w-1/2 mt-8">
            Por temas de confidencialidad y sensibilidad de datos no puedo compartir algunos assets de mis últimos trabajos, sin embargo puedes visualizar la mayoria de ellos en el último año a continuación:
        </p>

        <div className="grid grid-cols-3 gap-12 mt-10">
            {latestWork.map((work, index) => {
                if (work.images.length > 1) {
                    return (
                        <div key={index} className="grid grid-cols-3 gap-5">
                            {work.images.map((imageSrc, subIndex) => (
                                <Image
                                    key={subIndex}
                                    src={imageSrc}
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

export default LatestWork;
