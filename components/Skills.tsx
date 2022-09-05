import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Layout from '@components/layout/Layout';
import htmlIcon from 'public/assets/skills/html.svg';
import cssIcon from 'public/assets/skills/css.svg';
import javascriptIcon from 'public/assets/skills/javascript.svg';
import typescriptIcon from 'public/assets/skills/typescript.svg';
import tailwindIcon from 'public/assets/skills/tailwind.svg';
import responsiveIcon from 'public/assets/skills/responsive.svg';
import reactIcon from 'public/assets/skills/react.svg';
import reactNativeIcon from 'public/assets/skills/react-native.svg';
import expoIcon from 'public/assets/skills/expo.svg';
import nextIcon from 'public/assets/skills/next.svg';
import graphqlIcon from 'public/assets/skills/graphql.svg';
import apolloIcon from 'public/assets/skills/apollo.svg';
import reactTestingLibraryIcon from 'public/assets/skills/react-testing-library.png';
import cypressIcon from 'public/assets/skills/cypress.svg';
import nodeIcon from 'public/assets/skills/node.svg';
import expressIcon from 'public/assets/skills/express.svg';
import dockerIcon from 'public/assets/skills/docker.svg';

const skills = [
    { icon: htmlIcon, alt: 'HTML' },
    { icon: cssIcon, alt: 'CSS' },
    { icon: javascriptIcon, alt: 'Javascript' },
    { icon: typescriptIcon, alt: 'Typescript' },
    { icon: responsiveIcon, alt: 'Responsive' },
    { icon: reactIcon, alt: 'React' },
    { icon: reactNativeIcon, alt: 'React Native' },
    { icon: expoIcon, alt: 'Expo' },
    { icon: tailwindIcon, alt: 'Tailwind CSS' },
    { icon: nextIcon, alt: 'Next' },
    { icon: nodeIcon, alt: 'Node' },
    { icon: expressIcon, alt: 'Express' },
    { icon: graphqlIcon, alt: 'GraphQl' },
    { icon: apolloIcon, alt: 'Apollo' },
    { icon: reactTestingLibraryIcon, alt: 'RTL' },
    { icon: cypressIcon, alt: 'Cypress' },
    { icon: dockerIcon, alt: 'Docker' },
];

const Skill = ({ icon, alt }: { icon: any, alt: string}) => (
    <div className="overflow-hidden text-sm text-center transition duration-200 rounded-lg hover:scale-105 ease">
        <Image
            src={icon}
            quality={1}
            alt={`${alt} icon`}
            layout="responsive"
        />
        <span className="inline-block mt-2">{alt}</span>
    </div>
);
const Skills = () => {
    const { t } = useTranslation('common');
    const skillsLearned = skills.slice(0, 10);
    const skillsToLearn = skills.slice(10);

    return (
        <Layout
            classes={{
                outside: 'bg-gradient-to-b from-white to-slate-300',
                container: 'text-slate-700 min-h-screen-3/4 py-20 px-5',
            }}
        >
            {' '}
            <h4 className="text-3xl font-medium">{t('skills.title')}</h4>
            <p className="mt-8 mobileLg:w-1/2">
                {t('skills.description')}
            </p>

            <div className="grid items-start grid-cols-3 gap-8 mx-auto mt-10 mobile:gap-16 laptopLg:w-full mobileLg:grid-cols-5 tabletLg:grid-cols-7 laptopLg:grid-cols-10">
                {skillsLearned.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
            <p className="mt-4">
                {t('skills.latest')}
            </p>
            <div className="grid items-start grid-cols-3 gap-8 mx-auto mt-10 mobile:gap-16 laptopLg:w-full mobileLg:grid-cols-5 tabletLg:grid-cols-7 laptopLg:grid-cols-10">
                {skillsToLearn.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </Layout>
    );
};

export default Skills;
