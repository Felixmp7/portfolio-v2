import type { NextPage } from 'next';
import PageHead from '@components/PageHead';
import Welcome from '@components/Welcome';
import PersonalInfo from '@components/PersonalInfo';
import Experiences from '@components/experience/Experiences';
import CallToAction from '@components/CallToAction';

const Home: NextPage = () => (
    <>
        <PageHead />
        <Welcome />
        <PersonalInfo />
        <Experiences />
        <CallToAction />
    </>
);

export default Home;
