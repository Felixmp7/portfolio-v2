import { eEntrerprises, TEnterprise } from 'types';

export type TExperience = {
    period: string,
    isCurrent?: boolean,
    charge: string,
    enterprise: TEnterprise,
    resume: string,
}

export const getTextColor = (slug: eEntrerprises) => {
    const handler = {
        [eEntrerprises.ezgmz]: 'text-red-600',
        [eEntrerprises.anincubator]: 'text-green-600',
        [eEntrerprises.servisenior]: 'text-custom-purple',
        [eEntrerprises.wadara]: 'text-orange-500',
        [eEntrerprises.brocsoft]: 'text-blue-400',
    };
    return handler[slug];
};
