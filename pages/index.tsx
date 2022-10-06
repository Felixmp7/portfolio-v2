import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHead from '@components/PageHead';
import Welcome from '@components/Welcome';
import PersonalInfo from '@components/PersonalInfo';
import Experiences from '@components/experience/Experiences';
import CallToAction from '@components/CallToAction';
import LatestWork from '@components/LatestWork';
import Skills from '@components/skills/Skills';
import TestForJobs from '@components/testsForJobs/TestsForJobs';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Home: NextPage = () => (
    <>
        <PageHead />
        <Welcome />
        <PersonalInfo />
        <Skills />
        <LatestWork />
        <TestForJobs />
        <Experiences />
        <CallToAction />
    </>
);

export default Home;
