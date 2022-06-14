import { useTranslation } from 'next-i18next';
import HireMeLink from './HireMeLink';
import Layout from './layout/Layout';
import Logo from './Logo';

const Welcome = () => {
    const { t } = useTranslation('common');

    return (
        <Layout
            classes={{
                outside: 'bg-custom-black',
                container: 'flex flex-col items-center justify-center text-white welcome-bg min-h-90-screen relative',
            }}
        >
            <div className="absolute left-0 top-10">
                <Logo />
            </div>
            <div className="inline-block text-center">
                <h1 className="mb-4 text-4xl text-red-500">{t('welcome.h1')}</h1>
                <h2 className="pr-1 mb-4 text-6xl border-r-4">
                    {t('welcome.h2.text')}
                    {' '}
                    <span className="font-semibold">{t('welcome.h2.boldText')}</span>
                </h2>

                <h3 className="font-light">
                    <span className="text-blue-300">React</span>
                    {' '}
                    • Frontend •
                    {' '}
                    <span className="text-green-300">Developer</span>
                </h3>
            </div>
            <HireMeLink />
        </Layout>
    );
};

export default Welcome;
