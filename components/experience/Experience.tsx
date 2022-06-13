import React from 'react';
import { TExperience, getTextColor } from './helpers';

type Props = {
    currentExperience: TExperience,
}

const getDefaultStyles = (isActual?: boolean) => {
    if (isActual) {
        return 'p-8 transition-all duration-500 ease bg-slate-100 text-slate-700';
    }
    return 'p-8 transition-all duration-500 ease hover:bg-slate-100 hover:text-slate-700';
};

const Experience = ({ currentExperience }: Props) => (
    <div className={getDefaultStyles(currentExperience.isCurrent)}>
        <span className="block text-sm">{currentExperience.period}</span>
        <span className="block text-xl font-semibold">{currentExperience.charge}</span>
        <span className={`text-sm ${getTextColor(currentExperience.enterprise.slug)}`}>
            {currentExperience.enterprise.slug}
        </span>
        <p className="mt-6 text-sm">{currentExperience.resume}</p>
    </div>
);

export default Experience;
