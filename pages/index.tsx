import type { NextPage } from 'next';
import PageHead from '@components/PageHead';
import Welcome from '@components/Welcome';
import PersonalInfo from '@components/PersonalInfo';
import Experiences from '@components/experience/Experiences';
import CallToAction from '@components/CallToAction';
import LatestWork from '@components/LatestWork';

const Home: NextPage = () => (
    <>
        <PageHead />
        <Welcome />
        <PersonalInfo />
        <LatestWork />
        <Experiences />
        <CallToAction />
    </>
);

export default Home;
