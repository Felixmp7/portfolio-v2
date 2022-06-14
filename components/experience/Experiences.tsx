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
        period: 'Noviembre 2021 - Actual',
        periodTranslated: 'November 2021 - Current',
        isCurrent: true,
        charge: 'React Developer Ssr.',
        enterpriseSlug: eEntrerprises.brocsoft,
        resume: 'Desarrollo y mantenimiento de aplicaciones web para clientes de la empresa.',
        resumeTranslated: 'Web apps development and maintenance for company clients',
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
            <p className="w-1/2 mt-8">
                {t('experiences.description')}
            </p>

            <div className="grid grid-cols-3 mt-10 divide-x">
                {experiences.map((experience, index) => (
                    <Experience key={index} currentExperience={experience} />
                ))}
            </div>
        </Layout>
    );
};

export default Experiences;
