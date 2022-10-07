import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Layout from '@components/layout/Layout';
import reingTest from 'public/assets/frontend-tests/reign-test.png';
import maticTest from 'public/assets/frontend-tests/matic-test.png';

const TestForJobs = () => {
    const { t } = useTranslation('common');

    return (
        <Layout
            classes={{
                outside: 'bg-gradient-to-b from-slate-900 to-slate-800',
                container: 'text-slate-300 py-20 px-5',
            }}
        >
            {' '}
            <h4 className="text-3xl font-medium">Front-end Tests</h4>
            <p className="mt-8 mobileLg:w-1/2">
                {t('frontendTests.description')}
            </p>

            <div className="grid w-full gap-10 mt-10 tabletLg:grid-cols-2 place-items-center">
                <a href="https://admirable-dasik-8f8f85.netlify.app/" target="__blank" className="relative inline-block w-full overflow-hidden rounded-lg tabletLg:h-96">
                    <Image
                        src={reingTest}
                        alt="reign-test"
                        quality={50}
                        className="transition duration-200 hover:scale-105 ease"
                        layout="responsive"
                    />
                </a>
                <a href="https://matic-test.vercel.app/" target="__blank" className="relative inline-block w-full overflow-hidden border rounded-lg tabletLg:h-96">
                    <Image
                        src={maticTest}
                        alt="matic-test"
                        quality={50}
                        className="transition duration-200 hover:scale-105 ease"
                        layout="responsive"
                    />
                </a>
            </div>
        </Layout>
    );
};

export default TestForJobs;
