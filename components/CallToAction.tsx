import { useTranslation } from 'next-i18next';
import React from 'react';
import HireMeLink from './HireMeLink';
import Layout from './layout/Layout';

const CallToAction = () => {
    const { t } = useTranslation('common');
    return (
        <Layout
            classes={{
                outside: 'bg-gradient-to-r from-cyan-500 to-blue-500',
                container: 'text-slate-100 p-10 text-center',
            }}
        >
            <h5 className="text-2xl mobileXl:text-4xl">{t('callToAction')}</h5>
            <div className="w-40 h-[2px] mx-auto mt-4 mb-10 bg-white" />
            <HireMeLink />
        </Layout>
    );
};

export default CallToAction;
