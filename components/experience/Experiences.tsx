import React from 'react';
import ezgmzLogo from 'public/assets/enterprises/ezgmz.png';
import anIncubatorLogo from 'public/assets/enterprises/anincubator-logo.png';
import serviseniorLogo from 'public/assets/enterprises/servisenior-logo.png';
import wadaraLogo from 'public/assets/enterprises/wadara-logo.png';
import brocsoftLogo from 'public/assets/enterprises/brocsoft-logo.png';
import Layout from '../layout/Layout';
import { eEntrerprises, TExperience } from './helpers';
import Experience from './Experience';

const experiences: TExperience[] = [
    {
        period: 'Agosto 2018 - Enero 2019',
        charge: 'React Developer Jr.',
        enterprise: {
            name: eEntrerprises.ezgmz,
            logo: ezgmzLogo,
        },
        resume: 'Desde mi ingreso a Ezgmz, pasé por un periodo de adaptación en donde probé tecnologias como: Docker y Kubernetes para finalmente comenzar a adentrarme en el mundo de React.',
    },
    {
        period: 'Junio 2019 - Agosto 2020',
        charge: 'React Native Developer Jr.',
        enterprise: {
            name: eEntrerprises.anincubator,
            logo: anIncubatorLogo,
        },
        resume: 'Durante este periodo aprendí React Native trabajando en el desarrollo de una aplicación móvil (iBeen) la cual consistia en una red social para compartir lugares y experiencias alrededor del mundo.',
    },
    {
        period: 'Septiembre 2020 - Abril 2021',
        charge: 'React Developer',
        enterprise: {
            name: eEntrerprises.servisenior,
            logo: serviseniorLogo,
        },
        resume: 'Trabajé manteniendo pull de aplicaciones web hechas en React y desarrollos de landing pages con Next JS. Además pude aprender sobre test unitarios aplicandolos en los distintos proyectos.',
    },
    {
        period: 'Abril 2021 - Noviembre 2021',
        charge: 'React Developer Ssr.',
        enterprise: {
            name: eEntrerprises.wadara,
            logo: wadaraLogo,
        },
        resume: 'Desarrollo de aplicaciones web con React y apps móviles con React Native.',
    },
    {
        period: 'Noviembre 2021 - Actual',
        isCurrent: true,
        charge: 'React Developer Ssr.',
        enterprise: {
            name: eEntrerprises.brocsoft,
            logo: brocsoftLogo,
        },
        resume: 'Desarrollo y mantenimiento de aplicaciones web para clientes de la empresa.',
    },
];

const Experiences = () => (
    <Layout
        classes={{
            outside: 'bg-slate-800',
            container: 'text-slate-300 min-h-screen-3/4 py-20 px-5',
        }}
    >
        <h4 className="text-3xl font-medium">Experience</h4>
        <p className="w-1/2 mt-8">
            Desde mis inicios a finales de 2018 he trabajado e invertido tiempo en mi crecimiento para fortalecer mis debilidades y cada día acercarme más al profesional que deseo ser. A continuación puedes visualizar un resumen de mi trayectoria hasta el momento:
        </p>

        <div className="grid grid-cols-3 mt-10 divide-x">
            {experiences.map((experience, index) => (
                <Experience key={index} currentExperience={experience} />
            ))}
        </div>
    </Layout>
);

export default Experiences;
