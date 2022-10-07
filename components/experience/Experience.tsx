import useLanguage from '@hooks/useLanguage';
import { TExperience, getTextColor } from './helpers';

type Props = {
    currentExperience: TExperience,
}

const getDefaultStyles = (isCurrent?: boolean) => {
    if (isCurrent) {
        return 'p-8 transition-all duration-500 ease bg-slate-100 text-slate-700';
    }
    return 'p-8 transition-all duration-500 ease hover:bg-slate-100 hover:text-slate-700';
};

const Experience = ({ currentExperience }: Props) => {
    const { isInEnglish } = useLanguage();

    const period = isInEnglish ? currentExperience.periodTranslated : currentExperience.period;
    const resume = isInEnglish ? currentExperience.resumeTranslated : currentExperience.resume;

    return (
        <div className={getDefaultStyles(currentExperience.isCurrent)}>
            <span className="block text-sm">{period}</span>
            <span className="block text-xl font-semibold">{currentExperience.charge}</span>
            {currentExperience.enterpriseSlug && (
                <span className={`text-sm capitalize font-bold ${getTextColor(currentExperience.enterpriseSlug)}`}>
                    {currentExperience.enterpriseSlug}
                </span>
            )}
            <p className="mt-6 text-sm">{resume}</p>
        </div>
    );
};

export default Experience;
