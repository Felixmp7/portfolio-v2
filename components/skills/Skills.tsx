import { useTranslation } from 'next-i18next';
import Layout from '@components/layout/Layout';
import { eSkillFilter, skills } from './skillsData';
import SkillsRow from './SkillsRow';

const Skills = () => {
    const { t } = useTranslation('common');
    const mainStackSkills = skills.filter(({ filter }) => filter === eSkillFilter.mainStack);
    const interestedToLearn = skills.filter(({ filter }) => filter === eSkillFilter.interestedToLearn);
    const restOfSkills = skills.filter(({ filter }) => filter === eSkillFilter.restOfSkills);

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
                <br />
                <br />
                {t('skills.latestStack')}
            </p>

            <SkillsRow skills={mainStackSkills} />
            <p className="mt-4">
                {t('skills.interestedToLearn')}
            </p>
            <SkillsRow skills={interestedToLearn} />
            <p className="mt-4">
                {t('skills.restOfSkills')}
            </p>
            <SkillsRow skills={restOfSkills} />
        </Layout>
    );
};

export default Skills;
