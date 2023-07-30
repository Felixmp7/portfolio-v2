import { eEntrerprises } from 'types';

export type TExperience = {
    period: string,
    periodTranslated: string,
    isCurrent?: boolean,
    charge: string,
    enterpriseSlug?: eEntrerprises,
    resume: string,
    resumeTranslated: string,
}

export const getTextColor = (slug: eEntrerprises) => {
    const handler = {
        [eEntrerprises.ezgmz]: 'text-red-600',
        [eEntrerprises.anincubator]: 'text-green-600',
        [eEntrerprises.servisenior]: 'text-custom-purple',
        [eEntrerprises.wadara]: 'text-orange-500',
        [eEntrerprises.brocsoft]: 'text-blue-400',
        [eEntrerprises.matic]: 'text-blue-300',
        [eEntrerprises.servicepad]: 'text-green-700',
    };
    return handler[slug];
};
