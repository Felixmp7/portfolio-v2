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
                container: 'flex flex-col items-center justify-center text-white welcome-bg h-screen min-h-90-screen mobileXl:h-auto relative bg-center',
            }}
        >
            <div className="absolute left-10 mobile:left-20 bigScreen:left-0 top-10">
                <Logo />
            </div>
            <div className="inline-block text-center">
                <h1 className="mb-4 text-2xl text-red-500 mobileSm:text-3xl mobileXl:text-4xl">{t('welcome.h1')}</h1>
                <h2 className="pr-1 mb-4 text-3xl border-r-4 mobileSm:text-5xl mobileXl:text-6xl">
                    {t('welcome.h2.text')}
                    {' '}
                    <span className="font-semibold">{t('welcome.h2.boldText')}</span>
                </h2>

                <h3 className="text-sm font-light mobileSm:text-base">
                    <span className="text-blue-300">React</span>
                    {' '}
                    • Frontend •
                    {' '}
                    <span className="text-green-300">Developer</span>
                </h3>
            </div>
            <div className="absolute bottom-10 mobileXl:static mobileXl:mt-16">
                <HireMeLink />
            </div>
        </Layout>
    );
};

export default Welcome;
