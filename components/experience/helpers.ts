import { StaticImageData } from 'next/image';

export enum eEntrerprises {
    ezgmz = 'ezgmz',
    anincubator = 'anincubator',
    servisenior = 'servisenior',
    wadara = 'wadara',
    brocsoft = 'brocsoft'

}

export type TExperience = {
    period: string,
    isCurrent?: boolean,
    charge: string,
    enterprise: {
        name: eEntrerprises,
        logo: StaticImageData,
    },
    resume: string,
}

export const getTextColor = (name: eEntrerprises) => {
    const handler = {
        [eEntrerprises.ezgmz]: 'text-red-600',
        [eEntrerprises.anincubator]: 'text-green-600',
        [eEntrerprises.servisenior]: 'text-custom-purple',
        [eEntrerprises.wadara]: 'text-orange-500',
        [eEntrerprises.brocsoft]: 'text-blue-400',
    };
    return handler[name];
};
