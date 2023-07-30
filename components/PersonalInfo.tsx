/* eslint-disable max-len */
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { saveAs } from 'file-saver';
import me from 'public/assets/me.jpeg';
import reactLogo from 'public/assets/react.png';
import Layout from './layout/Layout';

const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/Felixmp7',
        icon: 'fab fa-github',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/felixmp_a/',
        icon: 'fab fa-instagram',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/felix-pacheco-30/',
        icon: 'fab fa-linkedin',
    },
];

const PersonalInfo = () => {
    const { t } = useTranslation('common');

    const handleDownload = () => saveAs(
        '/assets/files/CV-AGO-2023-Felix-Pacheco.pdf',
        'cv-felix-pacheco_en.pdf',
    );

    return (
        <Layout
            classes={{
                outside: 'personal-info-bg',
                container:
          'flex flex-col items-center justify-center text-black personal-info-min-h',
            }}
        >
            <div className="w-full my-20 laptop:flex laptopLg:w-5/6 desktop:w-2/3 gap-x-10 desktop:my-0">
                <div className="relative self-center w-full mx-auto mb-10 overflow-hidden shadow-xl mobileLg:w-1/2 laptop:mb-0 rounded-xl">
                    <Image src={me} alt="me" quality={50} layout="responsive" />
                </div>
                <div className="w-full mx-auto tablet:w-2/3">
                    <h4 className="text-3xl font-medium text-slate-800">Felix Pacheco</h4>
                    <div className="items-center hidden tablet:flex">
                        <Image src={reactLogo} alt="react" width={20} height={20} />
                        <h5 className="ml-2 text-lg text-react">React Developer</h5>
                    </div>

                    <p className="mt-6 text-slate-700">
                        {t('personalInfo.greeting')}
                        {' '}
                        <b>Felix</b>
                        {'. '}
                        {t('personalInfo.paragraph1')}
                        <br />
                        <br />
                        {t('personalInfo.paragraph2')}
                    </p>
                    <div className="text-center laptop:text-left">
                        <button
                            type="button"
                            onClick={handleDownload}
                            className="px-4 py-2 mt-8 transition-all duration-500 border rounded border-react laptop:bg-transparent text-slate-50 bg-react laptop:text-slate-700 laptop:border-react ease laptop:hover:bg-react laptop:hover:text-white laptop:hover:border-slate-100"
                        >
                            {t('personalInfo.downloadCv')}
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-8 laptop:justify-start text-slate-700">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="__blank"
                                className="mr-4 text-2xl"
                            >
                                <i aria-hidden className={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PersonalInfo;
