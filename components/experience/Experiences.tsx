import React from 'react';
import { eEntrerprises } from 'types';
import { useTranslation } from 'next-i18next';
import Layout from '../layout/Layout';
import { TExperience } from './helpers';
import Experience from './Experience';

const experiences: TExperience[] = [
    {
        period: 'Agosto 2018 - Enero 2019',
        periodTranslated: 'August 2018 - January 2019',
        charge: 'React Developer Jr.',
        enterpriseSlug: eEntrerprises.ezgmz,
        resume: 'Desde mi ingreso a Ezgmz, pasé por un periodo de adaptación en donde probé tecnologias como: Docker y Kubernetes para finalmente comenzar a adentrarme en el mundo de React.',
        resumeTranslated: 'Since I joined to Ezgmz, I went through a period of adaptation where I tried technologies such as: Docker and Kubernets and then finally began to enter into React world.',
    },
    {
        period: 'Junio 2019 - Agosto 2020',
        periodTranslated: 'June 2019 - August 2020',
        charge: 'React Native Developer Jr.',
        enterpriseSlug: eEntrerprises.anincubator,
        resume: 'Durante este periodo aprendí React Native trabajando en el desarrollo de una red social (iBeen) para compartir lugares y experiencias alrededor del mundo',
        resumeTranslated: 'During this period I learned React Native working on a social network called iBeen wich consists of sharing places and experiences around the world.',
    },
    {
        period: 'Septiembre 2020 - Abril 2021',
        periodTranslated: 'September 2020 - April 2021',
        charge: 'React Developer',
        enterpriseSlug: eEntrerprises.servisenior,
        resume: 'Trabajé manteniendo pull de aplicaciones web hechas en React y desarrollos de landing pages con Next JS. Además pude aprender sobre test unitarios aplicandolos en los distintos proyectos.',
        resumeTranslated: 'I worked maintaining pull of web apps built with React and new developments of landing pages with Next JS. I was also able to learn about unit testing by applying this knowledge to all of these projects.',
    },
    {
        period: 'Abril 2021 - Noviembre 2021',
        periodTranslated: 'April 2021 - November 2021',
        charge: 'React Developer Ssr.',
        enterpriseSlug: eEntrerprises.wadara,
        resume: 'Desarrollo de aplicaciones web con React y apps móviles con React Native.',
        resumeTranslated: 'Web and mobile apps development with React and React Native.',
    },
    {
        period: 'Noviembre 2021 - Septiembre 2022',
        periodTranslated: 'November 2021 - September 2022',
        charge: 'React Developer Ssr.',
        enterpriseSlug: eEntrerprises.brocsoft,
        resume: 'Desarrollo y mantenimiento de aplicaciones web para clientes de la empresa.',
        resumeTranslated: 'Web apps development and maintenance for company clients',
    },
    {
        period: 'Octubre 2022 - Marzo 2023',
        periodTranslated: 'October 2022 - March 2023',
        charge: 'React Developer Ssr.',
        isCurrent: false,
        enterpriseSlug: eEntrerprises.matic,
        resume: 'Desarrollo y mantenimiento de aplicaciones para ofrecer: 1. SDK app para facilitar formas de pago en USA. 2. Portal app para gestionar pagos y compañias asociadas.',
        resumeTranslated: 'Develop and maintenance pull of apps to offer: 1. SDK app to offer an easy way to handle your payments in USA. 2. Portal app to manage your payments and companies associated.',
    },
    {
        period: 'Marzo 2023 - Actualidad',
        periodTranslated: 'March 2023 - Current',
        charge: 'React Developer Ssr.',
        isCurrent: true,
        enterpriseSlug: eEntrerprises.servicepad,
        resume: 'Desarrollo y mantenimiento de aplicación web para ofrecer gestion de contratos con compañias, manufacturers y dealers in el mundo de la construcción de diferentes tipos de estructuras.',
        resumeTranslated: 'Web app development and maintenance to offer a way to manage contracts with companies, manufacturers and dealers in the world of construction of different unit structures.',
    },
];

const Experiences = () => {
    const { t } = useTranslation('common');

    return (
        <Layout
            classes={{
                outside: 'bg-slate-800',
                container: 'text-slate-300 min-h-screen-3/4 py-20 px-5',
            }}
        >
            <h4 className="text-3xl font-medium">{t('experiences.title')}</h4>
            <p className="mt-8 mobileLg:w-1/2">
                {t('experiences.description')}
            </p>

            <div className="grid mt-10 divide-y tabletLg:grid-cols-2 laptopLg:divide-y-0 laptopLg:divide-x laptopLg:grid-cols-3">
                {experiences.map((experience, index) => (
                    <Experience key={index} currentExperience={experience} />
                ))}
            </div>
        </Layout>
    );
};

export default Experiences;
